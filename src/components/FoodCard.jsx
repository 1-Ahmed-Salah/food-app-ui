
const FoodCard = ({image, name, price}) => {
  return (
    <div className="border shadow-lg rounded-xl hover:scale-105 duration-300 ">
        <img src={image} alt={name} className="w-full h-[230px] object-cover rounded-t-xl" />
        <div className="flex items-center justify-between p-3">
            <h3 className="text-[16px] font-semibold">{name}</h3>
            <p className="text-white text-[13px] font-medium bg-orange-500 w-[40px] text-center p-1 rounded-xl">{price}</p>
        </div>
    </div>
  )
}

export default FoodCard