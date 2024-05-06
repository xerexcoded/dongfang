import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function homepage() {
  return (
    <>
      <section
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1561394818-699dc5ac3e9e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="bg-white bg-opacity-80 rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-4">Taste of home in every dish</h1>
          <p className="text-lg text-gray-700 text-center">
            Experience the flavors of authentic home-cooked meals in a warm and inviting atmosphere.
          </p>
        </div>
      </section>
      <section className="px-8 py-12 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <img
            alt="Gallery Image 1"
            className="rounded-lg"
            height="200"
            src="https://images.unsplash.com/photo-1518541355664-6ca16f8aacf5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmVzZSUyMCUyMGRpc2hlc3xlbnwwfHwwfHx8MA%3D%3D"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Gallery Image 2"
            className="rounded-lg"
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
            className="rounded-lg"
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
            className="rounded-lg"
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
            className="rounded-lg"
            height="200"
            src="https://media.istockphoto.com/id/1197753461/photo/mushroom-tofu-and-onion-in-sukiyaki-pot-at-hokkaido-japan.webp?s=2048x2048&w=is&k=20&c=6GzEGgjRP2noBhH7U5vj2umTNzqyIRT9Hn8CnX5amJc="
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Gallery Image 6"
            className="rounded-lg"
            height="200"
            src="https://media.istockphoto.com/id/1281781153/photo/windows.webp?s=2048x2048&w=is&k=20&c=Ib0uneE6D7tmyDWILgUkSu6PdA6uJo5ZWcyMlwsrIDk="
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Gallery Image 7"
            className="rounded-lg"
            height="200"
            src="https://media.istockphoto.com/id/1299557078/photo/delicious-beef-and-vegetables-japanese-dish.webp?s=2048x2048&w=is&k=20&c=DuTyKoeGf2PgqEHetQyjTXAnczz72nCSDCgEQSInHnw="
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Gallery Image 8"
            className="rounded-lg"
            height="200"
            src="https://media.istockphoto.com/id/453780395/photo/chicken-chow-mein.webp?s=2048x2048&w=is&k=20&c=Y36Am4OZnr4xfjCHBCau84dLFnG26lVxJoJUzypgFVc="
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
      </section>
      <section className="px-8 py-12">
        <h3 className="text-2xl font-bold mb-4 text-center">Find Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="rounded-lg p-2 mx-auto max-w-sm">
            <div className="w-full h-[300px] rounded-lg overflow-hidden">
              <h4 className="text-lg font-semibold mb-2">Our Address 🏠</h4>
              <p>Avenue de la Gare 20 - 1003 Lausanne 🇨🇭</p>
              <p>Téléphone: 📞 021 312 70 30</p>
              <p className="mt-4">
                <span className="font-semibold">Opening Hours:</span>
                <br />
                Monday - Friday: 11:00 AM - 10:00 PM
                <br />
                Saturday - Sunday: 12:00 PM - 11:00 PM
              </p>
              <p className="mt-4 ">
                <span className="font-semibold">Directions:</span>
                <br />
                We are located near the Lausanne train station, just a short walk from the main entrance.
              </p>
            </div>
          </Card>
          <div className="w-full h-[300px] rounded-lg overflow-hidden" />
        </div>
      </section>
      <section className="px-8 py-12">
        <h3 className="text-2xl font-bold mb-4 text-center">Customer Reviews 😍</h3>
        <div className="flex flex-col space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="rounded-lg p-4 lg:p-8">
              <p>
                {"The ambiance at Dong Fang is truly unmatched! 🌟 The food was delightful, and the service was outstanding. Highly recommend the Peking Duck! 🦆🔥"}
              </p>
            </Card>
            <Card className="rounded-lg p-4 lg:p-8">
              <p>
                {"A perfect spot for a family dinner! 👨‍👩‍👧‍👦 We had a wonderful time and the kids loved the dumplings. 🥟 Will definitely be back! 🙌"}
              </p>
            </Card>
            <Card className="rounded-lg p-4 lg:p-8">
              <p>
                {"Visited for a special occasion and it was a night to remember! 🎉 The staff made sure every detail was perfect. The desserts are a must-try! 🍰🤤"}
              </p>
            </Card>
          </div>
          <div className="flex justify-center">
            <Input
              className="max-w-md rounded-lg border-red-300 focus:ring-red-300 focus:border-red-300"
              placeholder="Leave your feedback... 📝"
            />
          </div>
        </div>
      </section>
    </>
  )
}
