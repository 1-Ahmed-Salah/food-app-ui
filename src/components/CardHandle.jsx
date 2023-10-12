
const CardHandle = ({title, desc, titleButton, imgCard}) => {
  return (
    <div className="h-[240px] relative shadow rounded-xl">
        <div className="absolute w-full h-full text-gray-300 flex flex-col justify-between bg-black/50 p-4 rounded-xl">
            <div>
                <h3 className="text-[20px] font-bold">{title}</h3>
                <p className="text-slate-400 font-semibold mt-1">{desc}</p>
            </div>
            <a href="" className="bg-white text-slate-800 w-[120px] text-center font-medium py-2 rounded-full hover:bg-orange-500 hover:text-white duration-300">{titleButton}</a>
        </div>
        <img src={imgCard} alt={title} className="max-h-full w-full object-cover rounded-xl" />
    </div>
  )
}

export default CardHandle