

const ServicesCard = ({iconUrl , heading , parageraphe}) => {
  return (
    <div className="flex flex-col gap-4 bg-white px-5 py-7 rounded-lg shadow-xl">
        <img src={iconUrl} className="w-5" />
        <h3 className="font-bold leading-9">{heading}</h3>
        <p className="text-slate-400">{parageraphe}</p>
    </div>
  )
}

export default ServicesCard