
import { star } from "../assets/icons" ;

const PopularShoe = ({imgUrl , text , price}) => {
  return (
    <div className="flex flex-col gap-1">
        <img src={imgUrl} className="w-[200px]" />
        <div className="flex gap-2">
            <img src={star} alt="" />
            <span className="text-blue-300">(4.5)</span>
        </div>
        <p className="font-bold">{text}</p>
        <p className="text-orange-400">${price}</p>
    </div>
  )
}

export default PopularShoe ;