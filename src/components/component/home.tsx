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
        <div className="w-full flex md:w-3/5 p-6 overflow-hidden">
          <Image
            src="/home.jpg"
            width={800}
            height={450}
            alt="home"
            className="opacity-30 "
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
            }}
            width="300"
          />
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
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden opacity-80 my-auto">
              <Map />
            </div>
            <p className="text-center text-nowrap md:text-left text-xl md:text-2xl">
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
