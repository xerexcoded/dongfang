"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, JSX, SVGProps } from "react";
import toast from "react-hot-toast";

export default function reservation() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      name: (event.currentTarget.elements.namedItem("name") as HTMLInputElement)
        .value,
      email: (
        event.currentTarget.elements.namedItem("email") as HTMLInputElement
      ).value,
      phone: (
        event.currentTarget.elements.namedItem("phone") as HTMLInputElement
      ).value,
      date: (event.currentTarget.elements.namedItem("date") as HTMLInputElement)
        .value,
      time: (event.currentTarget.elements.namedItem("time") as HTMLInputElement)
        .value,
      seats: (
        event.currentTarget.elements.namedItem("seats") as HTMLInputElement
      ).value,
    };

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your seats are reserved", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
        // Reset form fields or redirect to a success page
      } else {
        toast.error("An error occurred while creating the reservation.", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      }
    } catch (error) {
      console.error("Error creating reservation:", error);
      alert("An error occurred while creating the reservation.");
    }
  };
  return (
    <div
      key="1"
      className="flex flex-col md:flex-row lg:flex-row justify-center items-center min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat p-4 gap-4 pt-24"
      style={{ backgroundImage: "url('/homepage/1.jpg')" }}
    >
      <div className="max-w-md w-full lg:w-3/5  p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-lg shadow-md  mb-8 md:mb-0">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2 text-black">
            Reserve a Table
          </h2>
          <p className="text-black-200">Book your table at our restaurant</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label
              className="block mb-1 text-gray-900 dark:text-white"
              htmlFor="name"
            >
              Name
            </Label>
            <Input
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              id="name"
              placeholder="Enter your name"
              required
              type="text"
            />
          </div>
          <div className="mb-4">
            <Label
              className="block mb-1 text-gray-900 dark:text-white"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              id="email"
              placeholder="Enter your email"
              required
              type="email"
            />
          </div>
          <div className="mb-4">
            <Label
              className="block mb-1 text-gray-900 dark:text-white"
              htmlFor="phone"
            >
              Phone
            </Label>
            <Input
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              id="phone"
              placeholder="Enter your phone number"
              required
              type="tel"
            />
          </div>
          <div className="mb-4">
            <Label
              className="block mb-1 text-gray-900 dark:text-white"
              htmlFor="date"
            >
              Date
            </Label>
            <Input
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              id="date"
              required
              type="date"
            />
          </div>
          <div className="mb-4">
            <Label
              className="block mb-1 text-gray-900 dark:text-white"
              htmlFor="time"
            >
              Time
            </Label>
            <Input
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              id="time"
              required
              type="time"
            />
          </div>
          <div className="mb-4">
            <Label
              className="block mb-1 text-gray-900 dark:text-white"
              htmlFor="seats"
            >
              Number of Seats
            </Label>
            <Input
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              id="seats"
              min="1"
              placeholder="Enter number of seats"
              required
              type="number"
            />
          </div>
          <div />
          <Button
            className="w-full bg-red-700 text-white hover:bg-red-900 "
            type="submit"
          >
            Reserve
          </Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">Contact us:</p>
          <div className="flex justify-center gap-4">
            <a
              className="text-red-900 hover:text-red-700 dark:text-white dark:hover:text-gray-300"
              href="#"
            >
              <MailIcon className="w-6 h-6" />
            </a>
            <a
              className="text-red-900 hover:text-red-700 dark:text-white dark:hover:text-gray-300"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SmartphoneIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function SmartphoneIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
