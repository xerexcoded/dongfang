import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <div className="bg-custom-beige min-h-svh">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-5xl font-bold uppercase text-red-700">
              Our Story
            </h2>
            <p className="mt-2 text-xl">我们的故事...</p>
            <Image
              alt="Team photo"
              className="mt-4 w-full max-w-md h-auto shadow-lg"
              height="300"
              src="/homepage/1.jpg"
              style={{
                aspectRatio: "450/300",
                objectFit: "cover",
              }}
              width="450"
            />
          </div>
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h2 className="text-5xl flex flex-row font-bold text-red-700">
              <Image
                alt="Dong Fang Logo"
                className="mr-2"
                height={50}
                src="/about/1.svg"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
                width={75}
              />
              Dong Fang
            </h2>
            <p className="mt-2 mb-4 text-xl">东方</p>
            <p className="text-lg">
              东方故事。在浓浓家乡情怀 Dong
              Fang东方系列扎根浓浓中西文化融为一体，为客户带来一场浓郁中国正宗家庭的美食之旅。来自不同文化背景及出生地的创始者的中国家庭，告诉您真实东方故事一道菜。
            </p>
            <p className="text-lg mt-4">
              东方厨房由来自正宗中国家庭的Jenny小姐创立，她有地球另的风味带到英土。Jenny的父亲道师中国，从上海携带的市场到四川省家的食谱，这些东西就是了她创造一个特殊地与异味意东家土祖传给的用料火烧。生东方，街道本纯粹于中国古董精选红木，为您带来东方的美食感受!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
