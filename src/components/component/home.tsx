import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Map from "./map"
import Image from "next/image"

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
          <h1 className="text-4xl font-bold text-left mb-4"><p className="text-red-700">Authentic Chinese Cuisine</p> in Switzerland.</h1>
          <p className="text-sm text-wrap text-gray-700 text-left">
            Located near Lausanne’s city center and train station, Dong Fang Restaurant offers an authentic culinary journey through Chinese cuisine. Our menu, crafted with a blend of traditional and innovative dishes, promises to deliver an unforgettable dining experience.
          </p>
        </div>
        <div className="w-full flex md:w-3/5 p-6">
          <Image src="/home.jpg" width={1600} height={900} alt="home" className="opacity-30 " />
        </div>
      </section>


      <section className="px-8  py-10 flex justify-center bg-custom-beige">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
          <Image
            alt="Gallery Image 1"
            className="rounded-lg opacity-80"
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
            className="rounded-lg opacity-80"
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
            className="rounded-lg opacity-80"
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
            className="rounded-lg opacity-80"
            height="200"
            src="/homepage/4.png"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <Image
            alt="Gallery Image 4"
            className="rounded-lg opacity-80"
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

      <section className="px-8 py-12  bg-custom-beige mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-center">Come find us, we are always ready to welcome 🍷</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">

          <div className="w-full h-full rounded-lg text-left overflow-hidden opacity-80 pr-4">
            <h4 className="text-lg font-semibold mb-2">Our Address 🏠</h4>
            <p>Avenue de la Gare 20 - 1003 Lausanne 🇨🇭</p>
            <p>Téléphone: 📞 <strong>021 312 70 30</strong></p>
            <p className="mt-4">
              <span className="font-semibold">Opening Hours:</span>
              <br />
              Monday - Friday: <strong>11:00 AM - 10:00 PM</strong>
              <br />
              Saturday - Sunday: <strong>12:00 PM - 11:00 PM</strong>
            </p>
            <p className="mt-4 mb-4">
              <span className="font-semibold">Directions:</span>
              <br />
              We are located <strong>near the Lausanne train station</strong>, just a short walk from the main entrance.
            </p>
          </div>

          <div className=" w-full h-[300px] rounded-lg overflow-hidden opacity-80">
            <Map /></div>

        </div>
      </section>
      <section className="px-8 py-12 bg-custom-beige">
        <h3 className="text-2xl font-bold mb-4 text-center">What our patrons say</h3>
        <div className="flex flex-col space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="rounded-lg p-4 lg:p-8 backdrop-blur-sm bg-white/30">
              <p>
                {"The ambiance at Dong Fang is truly unmatched! 🌟 The food was delightful, and the service was outstanding. Highly recommend the Peking Duck! 🦆🔥"}
              </p>
            </Card>
            <Card className="rounded-lg p-4 lg:p-8 backdrop-blur-sm bg-white/30">
              <p>
                {"A perfect spot for a family dinner! 👨‍👩‍👧‍👦 We had a wonderful time and the kids loved the dumplings. 🥟 Will definitely be back! 🙌"}
              </p>
            </Card>
            <Card className="rounded-lg p-4 lg:p-8 backdrop-blur-sm bg-white/30">
              <p>
                {"Visited for a special occasion and it was a night to remember! 🎉 The staff made sure every detail was perfect. The desserts are a must-try! 🍰🤤"}
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
  )
}
