import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Map from "./map"

export default function homepage() {
  return (
    <>
      <section
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1561394818-699dc5ac3e9e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="bg-white bg-opacity-80 rounded-lg p-8 mx-6">
          <h1 className="text-4xl font-bold text-center mb-4">Taste of home in every dish</h1>
          <p className="text-lg text-gray-700 text-center">
            Experience the flavors of authentic home-cooked meals in a warm and inviting atmosphere.
          </p>
        </div>
      </section>
      <section className="px-8 py-12 bg-gradient-to-br from-amber-200 to-orange-400">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <Card className="rounded-lg p-2  mx-auto max-w-sm backdrop-blur-sm bg-white/30 ">
            <div>
              <h3 className="text-2xl font-bold mb-4"><img alt="Dong Fang Logo" className="h-8 inline " src="/dongfangLogo.svg" />Our Story</h3>
              <p className="text-lg text-gray-700 text-left">
                <strong>Dong Fang Restaurant was founded in 1990 by the Chen family</strong>, who emigrated from China with a dream of
                bringing authentic Chinese cuisine to Switzerland. What started as a small family-run establishment
                quickly <strong>grew into a beloved local favorite, known for its warm hospitality and mouthwatering dishes.</strong>
              </p>
              {/* <p className="text-lg text-gray-700 mt-4">
                Over the years, Dong Fang has remained true to its roots, using traditional recipes and techniques passed
                down through generations. Our chefs take pride in sourcing the freshest ingredients and carefully crafting
                each dish with love and attention to detail.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Today, Dong Fang is more than just a restaurant; it is a place where families and friends come together to
                create lasting memories over delicious food and warm company. We invite you to experience the taste of
                home in every dish and become a part of our story.
              </p> */}
            </div>
          </Card>
          <div className="w-full h-[300px] rounded-lg overflow-hidden">
            <img alt="Our Story Image" className="w-full h-full object-cover " src="https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmVzZXxlbnwwfHwwfHx8MA%3D%3D" />
          </div>
        </div>
      </section>

      <section className="px-8 py-12 flex justify-center bg-gradient-to-br from-amber-200 to-orange-400">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
          <img
            alt="Gallery Image 1"
            className="rounded-lg opacity-80"
            height="300"
            src="https://images.unsplash.com/photo-1518541355664-6ca16f8aacf5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmVzZSUyMCUyMGRpc2hlc3xlbnwwfHwwfHx8MA%3D%3D"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Gallery Image 2"
            className="rounded-lg opacity-80"
            height="200"
            src="https://images.unsplash.com/photo-1669808118592-d120b3965cd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Gallery Image 3"
            className="rounded-lg opacity-80"
            height="200"
            src="https://images.unsplash.com/photo-1565720490528-48e5be3d6a1f?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Gallery Image 4"
            className="rounded-lg opacity-80"
            height="200"
            src="https://images.unsplash.com/photo-1603255032826-64753c00630b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Gallery Image 5"
            className="rounded-lg opacity-80"
            height="200"
            src="https://images.unsplash.com/photo-1591214896508-22fc74d84a75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmVzZSUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Gallery Image 6"
            className="rounded-lg opacity-80"
            height="200"
            src="https://images.unsplash.com/photo-1541379889336-70f26e4c4617?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Gallery Image 7"
            className="rounded-lg opacity-80"
            height="200"
            src="https://images.unsplash.com/photo-1614104030967-5ca61a54247b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoaW5lc2UlMjByZXN0YXVyYW50fGVufDB8fDB8fHww"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Gallery Image 8"
            className="rounded-lg opacity-80"
            height="200"
            src="https://images.unsplash.com/photo-1583475020831-fb4fbb497315?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmVzZSUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
      </section>

      <section className="px-8 py-12  bg-gradient-to-tl from-amber-200 to-orange-400">
        <h3 className="text-2xl font-bold mb-4 text-center">Come find us, we are always ready to welcome 🍷</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="rounded-lg p-2 mx-auto max-w-sm backdrop-blur-sm bg-white/30">
            <div className="w-full h-[300px] rounded-lg overflow-hidden opacity-80">
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
          </Card>
          <div className="w-full  h-[300px] rounded-lg overflow-hidden opacity-80">
            <Map /></div>

        </div>
      </section>
      <section className="px-8 py-12 bg-gradient-to-br from-amber-200 to-orange-400">
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
              className="max-w-md rounded-lg backdrop-blur-sm border-red-300 focus:ring-red-300 focus:border-red-300"
              placeholder="Leave your feedback... 📝"
            />
          </div>
        </div>
      </section>
    </>
  )
}
