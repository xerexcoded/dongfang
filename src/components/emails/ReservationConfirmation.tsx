import { Html, Text, Section } from "@react-email/components";

interface ReservationConfirmationProps {
  reservation: {
    name: string;
    date: Date;
    time: Date;
    seats: number;
  };
}

export const ReservationConfirmation: React.FC<
  ReservationConfirmationProps
> = ({ reservation }) => {
  return (
    <Html>
      <Section>
        <Text>Dear {reservation.name},</Text>
        <Text>Your reservation has been confirmed:</Text>
        <Text>Date: {reservation.date.toDateString()}</Text>
        <Text>Time: {reservation.time.toTimeString()}</Text>
        <Text>Seats: {reservation.seats}</Text>
        <Text>We look forward to serving you!</Text>
      </Section>
    </Html>
  );
};
