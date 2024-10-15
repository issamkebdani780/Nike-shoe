import PopularShoe from "../componenets/PopularShoe";
import { shoe4 } from "../assets/images"
import { shoe5 } from "../assets/images"
import { shoe6 } from "../assets/images"
import { shoe7 } from "../assets/images"

const PopularProduct = () => {
  return (
    <section id="prouducts">
      <h1 className="text-4xl font-bold font-palanquin">
        <span>Our </span>
        <span className="text-orange-400">Popular </span>
        <span>Products</span>
      </h1>
      <p className="text-gray-500 lg:max-w-lg">Experiencs top notch quality and style with our sought-after selection Discover a world of confort, design, and value</p>
      <div className="flex flex-wrap flex-col sm:flex-row items-center justify-center gap-14 sm:gap-4 mt-10">
        <PopularShoe imgUrl={shoe4} text="Nike Air Joedan-01" price="200.20"/>
        <PopularShoe imgUrl={shoe5} text="Nike Air Joedan-10" price="210.20"/>
        <PopularShoe imgUrl={shoe6} text="Nike Air Joedan-100" price="220.20"/>
        <PopularShoe imgUrl={shoe7} text="Nike Air Joedan-001" price="230.20"/>
      </div>
    </section>
  )
}

export default PopularProduct ;