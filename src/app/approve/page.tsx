"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import toast from 'react-hot-toast'
const ApprovalPage = () => {
    const [reservationId, setReservationId] = useState('');
    const handleApprove = async () => {
        try {

            const response = await fetch('/api/reservations/approve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ reservationId: parseInt(reservationId, 10) }),
            });

            if (response.ok) {
                toast.success('Reservation approved successfully!', {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    }
                });
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
                    <Input placeholder="Enter reservation ID" value={reservationId}
                        onChange={(e) => setReservationId(e.target.value)} />
                    <Button onClick={handleApprove}>Approve</Button>
                </div>
            </div>
        </section>
    )
}

export default ApprovalPage