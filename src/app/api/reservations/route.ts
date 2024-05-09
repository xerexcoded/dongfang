// app/api/reservations/route.ts

import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    const { name, email, phone, date, time, seats } = await request.json();

    try {

        // Parse the date and time values
        const reservationDate = new Date(date);
        const [hours, minutes] = time.split(':');
        const reservationTime = new Date(reservationDate);
        reservationTime.setHours(parseInt(hours, 10));
        reservationTime.setMinutes(parseInt(minutes, 10));
        const seatsCount = parseInt(seats, 10);
        await prisma.reservation.create({
            data: {
                name,
                email,
                phone,
                date: reservationDate,
                time: reservationTime,
                seats: seatsCount,
            },
        });

        return NextResponse.json({ message: 'Reservation created successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error creating reservation:', error);
        return NextResponse.json({ message: 'An error occurred while creating the reservation.' }, { status: 500 });
    }
}
