import React from 'react'

const about = () => {
    return (
        <section className="flex items-center px-8 py-12 min-h-screen bg-custom-beige">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-2xl font-bold text-red-700 mb-4"><img alt="Dong Fang Logo" className="h-8 inline " src="/dongfangLogo.svg" />Our Story</h3>
                    <p className="text-lg text-gray-700 text-left">
                        东方餐厅：在洛桑品味传统

                        Dong Fang东方餐厅位于洛桑市中心和火车站附近，为您带来一场穿越中国正宗美食的舌尖之旅。我们的菜单为您呈现出传统与创新结合的中国菜肴，旨在让您尽情享受每一道佳肴。

                        东方餐厅由热爱正宗中国美食的Jenny小姐创立，旨在将她家乡的风味带到瑞士。Jenny的足迹遍布中国，从上海繁华的市场到四川辛辣的美食，这些经历激发了她创造一个将传统与卓越烹饪技艺相结合的用餐体验。在东方，每道菜都体现了中国丰富的烹饪文化，为您带来难忘的美食冒险！
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
                <div className=" h-[300px] overflow-hidden mx-auto">
                    <img alt="Our Story Image" className=" h-full object-cover " src="/homepage/1.jpg" />
                </div>
            </div>
        </section>
    )
}

export default about