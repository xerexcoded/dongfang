-- CreateTable
CREATE TABLE "MenuItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "spiceLevel" INTEGER NOT NULL,
    "dishType" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "regions" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "isVegetarian" BOOLEAN NOT NULL,

    CONSTRAINT "MenuItem_pkey" PRIMARY KEY ("id")
);
