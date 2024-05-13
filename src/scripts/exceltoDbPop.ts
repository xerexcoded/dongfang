const XLSX = require('xlsx');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

interface ExcelRow {
    'Dish Name': string;
    'Level of Spice': number;
    'Dish Type': string;
    'Ingredients': string;
    'Regions': string;

}
interface MenuItem {
    name: string;
    spiceLevel: number;
    dishType: string;
    ingredients: string;
    regions: string;
    imageUrl: string;
}

const readExcelFile = (filePath: string): ExcelRow[] => {
    console.log('📖 Reading Excel file...');
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);
    console.log('✅ Excel file read successfully!');
    return data;
};

const transformData = (data: ExcelRow[]): MenuItem[] => {
    console.log('🔄 Transforming data...');
    console.log(data);
    const transformedData = data.map((row) => ({
        name: row['Dish Name'],
        spiceLevel: row['Level of Spice'],
        dishType: row['Dish Type'],
        ingredients: row['Ingredients'],
        regions: row['Regions'],
        imageUrl: `/images/${row['Dish Name'].toLowerCase().replace(/ /g, '-')}.jpg`,
    }));
    console.log('✅ Data transformed successfully!');
    return transformedData;
};

const populateDatabase = async (menuItems: MenuItem[]): Promise<void> => {
    console.log('🚀 Populating database...');
    for (const item of menuItems) {
        try {
            await prisma.menuItem.create({
                data: item,
            });
            console.log(`✅ Inserted: ${item.name}`);
        } catch (error) {
            console.error(`❌ Error inserting ${item.name}:`, error);
        }
    }
    console.log('✅ Database populated successfully!');
};

const filePath = 'menuitem.xlsx';

const run = async (): Promise<void> => {
    const rawData = readExcelFile(filePath); // returns an array of ExcelRow objects
    const menuItems = transformData(rawData); // returns an array of MenuItem objects
    await populateDatabase(menuItems); // populate the database with the menu items
    console.log('🎉 Finished populating the database.');
};

run().catch((error) => {
    console.error('❌ An error occurred:', error);
});
