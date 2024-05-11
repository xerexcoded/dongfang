import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Section } from '@react-email/section';
import { Tailwind, Button } from "@react-email/components";
interface ReservationApproveProps {
    reservation: {
        id: number;
        name: string;
        email: string;
        phone: string;
        date: Date;
        time: Date;
        seats: number;
    };
    approveUrl: string;
}

export const ReservationApprove: React.FC<ReservationApproveProps> = ({ reservation, approveUrl }) => {
    const handleApprove = async () => {
        try {
            const response = await fetch(approveUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ reservationId: reservation.id }),
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
        <Html>
            <Tailwind
                config={{
                    theme: {
                        extend: {
                            colors: {
                                brand: "#007291",
                            },
                        },
                    },
                }}
            >
                <Section>
                    <Text>A new reservation has been made:</Text>
                    <Text>Name: {reservation.name}</Text>
                    <Text>Email: {reservation.email}</Text>
                    <Text>Phone: {reservation.phone}</Text>
                    <Text>Date: {reservation.date.toDateString()}</Text>
                    <Text>Time: {reservation.time.toTimeString()}</Text>
                    <Text>Seats: {reservation.seats}</Text>
                    <Button onClick={handleApprove} className="bg-brand px-3 py-2 font-medium leading-4 text-white">Approve Reservation</Button>
                </Section>
            </Tailwind>
        </Html>
    );
};
