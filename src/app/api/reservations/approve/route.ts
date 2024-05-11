import { sendEmail } from '@/lib/resendService';
import { ReservationConfirmation } from '@/components/emails/ReservationConfirmation';
import { PrismaClient } from '@prisma/client';
import React from 'react';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { reservationId } = await request.json();

    try {
        const reservation = await prisma.reservation.update({
            where: { id: reservationId },
            data: { status: 'APPROVED' },
        });

        // Send email to the customer
        await sendEmail(
            reservation.email,
            'Reservation Confirmed',
            ReservationConfirmation({ reservation }) as React.ReactElement,
        );

        return new Response(JSON.stringify({ message: 'Reservation approved successfully!' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error approving reservation:', error);
        return new Response(JSON.stringify({ message: 'An error occurred while approving the reservation.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
