"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
const page = () => {

    const handleApprove = async () => {
        try {

            const response = await fetch('/api/reservations/approve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ reservationId: 5 }),
            });

            if (response.ok) {
                console.log('Reservation approved successfully');
            } else {
                console.error('Failed to approve reservation');
            }
        } catch (error) {
            console.error('Error approving reservation:', error);
        }
    };
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-4 px-4 md:px-6">
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Approve Reservation</h2>
                    <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Please review and approve the reservation details below to continue.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Button onClick={handleApprove}>Approve</Button>
                </div>
            </div>
        </section>
    )
}

export default page