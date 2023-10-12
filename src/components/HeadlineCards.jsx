import { useState } from "react"
import CardHandle from "./CardHandle"
import imageOne from '../assets/pexels-jonathan-borba-2983098.jpg'
import imageTwo from '../assets/pexels-nerfee-mirandilla-3186654.jpg'
import imageThree from '../assets/pexels-marta-dzedyshko-2067396.jpg'


const HeadlineCards = () => {

    const [data, setData] = useState([
        {
            title: 'Sun\'s Out BOGO\'s Out',
            desc: 'Through 8/26',
            titleButton: 'Order Now',
            imgCard: imageOne
        },
        {
            title: 'New Restaurants',
            desc: 'Added Daily',
            titleButton: 'Order Now',
            imgCard: imageTwo
        },
        {
            title: 'We Deliver Desserts Too',
            desc: 'Tasty Treats',
            titleButton: 'Order Now',
            imgCard: imageThree
        },
    ])

  return (
    <div className="my-[90px]">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data.map( data => <CardHandle key={data.title} {...data} /> )
                }
            </div>
        </div>
    </div>
  )
}

export default HeadlineCards