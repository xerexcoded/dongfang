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
    // const handleApprove = async () => {
    //     try {
    //         console.log('Approving reservation:', reservation.id);
    //         console.log('Approve URL:', approveUrl);
    //         const response = await fetch(approveUrl, {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ reservationId: reservation.id }),
    //         });

    //         if (response.ok) {
    //             console.log('Reservation approved successfully');
    //         } else {
    //             console.error('Failed to approve reservation');
    //         }
    //     } catch (error) {
    //         console.error('Error approving reservation:', error);
    //     }
    // };

    return (
        <Html>

            <Section>
                <Text>A new reservation has been made:</Text>
                <Text>Name: {reservation.name}</Text>
                <Text>Email: {reservation.email}</Text>
                <Text>Phone: {reservation.phone}</Text>
                <Text>Date: {reservation.date.toDateString()}</Text>
                <Text>Time: {reservation.time.toTimeString()}</Text>
                <Text>Seats: {reservation.seats}</Text>
                <a href={approveUrl}
                    style={{
                        lineHeight: '1rem',
                        textDecoration: 'none',
                        display: 'inline-block',
                        maxWidth: '100%',
                        backgroundColor: 'rgb(0,114,145)',
                        paddingLeft: '0.75rem',
                        paddingRight: '0.75rem',
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        fontWeight: '500',
                        color: 'rgb(255,255,255)',
                        padding: '8px 12px 8px 12px',
                    }}>Approve Reservation
                </a>
            </Section>

        </Html>
    );
};
