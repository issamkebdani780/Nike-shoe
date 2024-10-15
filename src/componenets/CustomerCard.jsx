

const CustomerCard = ({imgUrl , text , Username ,starIcon}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
        <img src={imgUrl} className="w-[100px] rounded-full" />
        <p className="text-slate-400">{text}</p>
        <p className="flex gap-3 "><img src={starIcon} alt="" />(4.5)</p>
        <p className="font-bold">{Username}</p>
    </div>
  )
}

export default CustomerCard