import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Map from "./map";
import Image from "next/image";
import { SVGProps } from "react";
import Link from "next/link";

export default function homepage() {
  return (
    <>
      <section
        className="flex flex-col md:flex-row items-center justify-around bg-cover bg-center px-8"
        style={{
          backgroundColor: "#FAF3EB",
        }}
      >
        <div className="w-full md:w-2/5 p-6">
          <h1 className="text-4xl sm:text-2xl font-bold  mb-4">
            <p className="text-red-700 text-pretty">
              Authentic Chinese Cuisine
            </p>{" "}
            in Switzerland.
          </h1>
          <p className="text-sm text-wrap text-gray-700 text-left">
            Located near Lausanne’s city center and train station, Dong Fang
            Restaurant offers an authentic culinary journey through Chinese
            cuisine. Our menu, crafted with a blend of traditional and
            innovative dishes, promises to deliver an unforgettable dining
            experience.
          </p>
          <Button
            asChild
            className="bg-red-700  text-white px-6 py-3 flex drop-shadow-2xl  mt-4 items-center space-x-2 rounded-none"
          >
            <Link href="/menu">
              <span>菜单</span>
              <span>Our Iconic Dishes</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </Button>
        </div>
        <div className="w-full md:w-3/5 p-6 overflow-hidden">
          <Image
            src="/home.jpg"
            width={800}
            height={450}
            alt="home"
            className="opacity-40 "
          />
        </div>
      </section>

      <section className="px-8  py-10 flex justify-center bg-custom-beige">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
          <Image
            alt="Gallery Image 1"
            height="300"
            src="/homepage/2.JPG"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
              borderRadius: "100px",
            }}
            width="300"
          />
          <Image
            alt="Gallery Image 2"
            height="200"
            src="/homepage/3.PNG"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
              borderRadius: "100px",
            }}
            width="300"
          />
          <Image
            alt="Gallery Image 2"
            height="200"
            src="/homepage/3.PNG"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
              borderRadius: "100px",
            }}
            width="300"
          />
          <Image
            alt="Gallery Image 3"
            height="200"
            src="/homepage/4.PNG"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
              borderRadius: "100px",
            }}
            width="300"
          />
          <Image
            alt="Gallery Image 4"
            height="200"
            src="/homepage/5.PNG"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
              borderRadius: "100px",
            }}
            width="300"
          />
        </div>
      </section>

      <section className="px-4 py-12 bg-custom-beige mx-auto">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-6 mx-auto">
          <div className=" h-[300px] overflow-hidden  mx-auto">
            <img
              alt="Our Story Image"
              className=" h-full object-cover "
              src="/homepage/1.jpg"
            />
          </div>
          <div className="mx-auto">
            <div className="bg-custom-beige xs:text-center sm:text-pretty lg:text-left  text-black  w-full">
              <h1 className="text-3xl lg:text-4xl font-bold text-red-800 uppercase leading-tight mb-6">
                We open every day for you
              </h1>
              <p className="font-medium mb-2">
                Monday: 10 AM–2:30 PM, 6PM–10:30 PM
              </p>
              <p className="font-medium mb-2">
                Tuesday: 10 AM–2:30 PM, 6PM–10:30 PM
              </p>
              <p className="font-medium mb-2">
                Wednesday: 10 AM–2:30 PM, 6PM–10:30 PM
              </p>
              <p className="font-medium mb-2">
                Thursday: 10 AM–2:30 PM, 6PM–10:30 PM
              </p>
              <p className="font-medium mb-2">
                Friday: 10 AM–2:30 PM, 6PM–10:30 PM
              </p>
              <p className="font-medium mb-2">
                Saturday: 10 AM–2:30 PM, 6PM–10:30 PM
              </p>
              <p className="font-medium mb-6">Sunday: 6PM–10:30 PM</p>
              <div className="flex items-center mx-auto text-center">
                <PhoneIcon className="text-black h-6 w-6 mr-2" />
                <p className="font-medium ">
                  Téléphone / WhatsApp: 021 312 70 30
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-custom-beige mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col mx-auto md:pr-4">
            <h3 className="text-3xl md:text-5xl font-bold mb-4 text-center text-nowrap md:text-left text-red-700">
              OUR LOCATION
            </h3>
            <p className="text-center text-nowrap  pb-4">
              3 Minutes Walk From Lausanne Gare station.
            </p>
            <div className="w-full  rounded-lg overflow-hidden opacity-80 my-auto">
              <Map />
            </div>
            <p className="text-center text-nowrap pt-2 md:text-left text-xl md:text-2xl text-red-800">
              Av. de la Gare 20, 1003 Lausanne
            </p>
          </div>
          <div className="items-center grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mx-auto  lg:pr-6">
            <div className="overflow-hidden">
              <Image
                alt="Gallery Image 3"
                className="w-full h-full"
                src="/homepage/6.JPG"
                width={414}
                height={621}
                style={{
                  aspectRatio: "414/621",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="overflow-hidden">
              <Image
                alt="Gallery Image 4"
                className="w-full h-full"
                src="/homepage/7.JPG"
                width={414}
                height={621}
                style={{
                  aspectRatio: "414/621",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <div
        key="1"
        className="bg-custom-beige p-4  grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="flex flex-col min-h-min text-left items-center p-4 border-4  border-red-800 relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0"
            style={{ backgroundImage: "url('/homepage/8.png')" }}
          ></div>
          <div className="relative flex flex-col items-center justify-center z-10 m-4 mx-auto">
            <span className="text-3xl text-center uppercase px-2 py-1 mb-4 text-yellow-700 text-rose-900">
              Nos réductions
            </span>
            <h2 className="text-3xl md:text-2xl lg:text-3xl text-nowrap font-bold mt-2 mb-4 text-red-700">
              We Offer Discounts
            </h2>
            <p className="text-3xl md:text-2xl text-center">新年</p>
          </div>
        </div>

        <div>
          <Image
            alt="Birthday Discount"
            className="object-cover mx-auto"
            height={500}
            src="/reservation/1.jpg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width={500}
          />
        </div>
        <div>
          <Image
            alt="Student Discount"
            className="object-cover mx-auto"
            height={500}
            src="/reservation/2.jpg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width={500}
          />
        </div>
      </div>
      <section className="px-8 py-12 bg-custom-beige">
        <h3 className="text-2xl font-bold mb-4 text-center">
          What our patrons say
        </h3>
        <div className="flex flex-col space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="rounded-lg p-4 lg:p-8 backdrop-blur-sm bg-white/30">
              <p>
                {
                  "The ambiance at Dong Fang is truly unmatched! 🌟 The food was delightful, and the service was outstanding. Highly recommend the Peking Duck! 🦆🔥"
                }
              </p>
            </Card>
            <Card className="rounded-lg p-4 lg:p-8 backdrop-blur-sm bg-white/30">
              <p>
                {
                  "A perfect spot for a family dinner! 👨‍👩‍👧‍👦 We had a wonderful time and the kids loved the dumplings. 🥟 Will definitely be back! 🙌"
                }
              </p>
            </Card>
            <Card className="rounded-lg p-4 lg:p-8 backdrop-blur-sm bg-white/30">
              <p>
                {
                  "Visited for a special occasion and it was a night to remember! 🎉 The staff made sure every detail was perfect. The desserts are a must-try! 🍰🤤"
                }
              </p>
            </Card>
          </div>
          <div className="flex justify-center">
            <Input
              className="max-w-md rounded-lg backdrop-blur-sm border-red-700 focus:ring-red-700 focus:border-red-700"
              placeholder="Leave your feedback... 📝"
            />
          </div>
        </div>
      </section>
    </>
  );
}
function ArrowRightIcon(
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
