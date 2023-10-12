import FoodCard from "./FoodCard"
import { data } from "../data/data"
import { useState } from "react"

const Food = () => {

    const [food, setFood] = useState(data)

    const filterByName = (category) => { 
        setFood(
            data.filter(item => {
                return item.category === category
            })
        )
    }

    const filterByPrice = (price) => {
        setFood(
            data.filter(item => {
                return item.price === price
            })
        )
    }

  return (
    <div className="my-[90px]">
        <div className="container">
            <div>
                <h2 className="text-center text-[25px] font-bold text-orange-500">Top Rated Menu Items</h2>

                {/* Fillter Row */}
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                    {/* Fillter Type */}
                    <div>
                        <h3 className="text-[20px] font-medium">Fillter Type</h3>
                        <div className="flex gap-3 mt-3">
                            <button
                                className="btn-food"
                                onClick={()=> setFood(data)}
                            >
                                All
                            </button>
                            <button 
                                className="btn-food" 
                                onClick={()=> filterByName('burger')}
                            >
                                Burgers
                            </button>
                            <button 
                                className="btn-food" 
                                onClick={()=> filterByName('pizza')}
                            >
                                Pizza
                            </button>
                            <button 
                                className="btn-food" 
                                onClick={()=> filterByName('salad')}
                            >
                                Salads
                            </button>
                            <button 
                                className="btn-food" 
                                onClick={()=> filterByName('chicken')}
                            >
                                Chicken
                            </button>
                        </div>
                    </div>

                    {/* Fillter Price */}
                    <div>
                        <h3 className="text-[20px] font-medium">Fillter Price</h3>
                        <div className="flex gap-3 mt-3">
                            <button 
                                className="btn-food" 
                                onClick={()=> filterByPrice('$')}
                            >
                                $
                            </button>
                            <button 
                                className="btn-food" 
                                onClick={()=> filterByPrice('$$')}
                            >
                                $$
                            </button>
                            <button 
                                className="btn-food" 
                                onClick={()=> filterByPrice('$$$')}
                            >
                                $$$
                            </button>
                            <button 
                                className="btn-food" 
                                onClick={()=> filterByPrice('$$$$')}
                            >
                                $$$$
                            </button>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-[40px]">
                    {
                        food.map(item => <FoodCard key={item.id} {...item} /> )
                    }                   
                </div>

            </div>
        </div>
    </div>
  )
}

export default Food