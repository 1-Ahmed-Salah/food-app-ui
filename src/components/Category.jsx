import { useState } from "react"
import { categories } from "../data/data"

const Category = () => {

    const [cat, setCat] = useState(categories)

  return (
    <div className="my-[90px]">
        <div className="container">
            <h2 className="text-center text-[25px] font-bold text-orange-500">Top Rated Menu Items</h2>
            <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    categories.map(item => (
                        <div key={item.id} className="bg-gray-100 rounded-xl flex justify-between items-center p-4 shadow hover:scale-105 duration-300">
                            <h2 className="text-[18px] font-bold">{item.name}</h2>
                            <img src={item.image} alt={item.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Category