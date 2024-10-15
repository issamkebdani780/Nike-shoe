import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div>
        <h1 className="text-3xl font-bold mb-3">
          We Provide You <span className="text-orange-400">Super Quality</span> Shoes
        </h1>
        <p className="text-slate-400 mb-4">
          Ensuring premium comfort ans dtyle, our meticulously ceafted footwear is designed to elevate your experience providing you with unmatched quality innovation and a touch of elegance
        </p>
        <p className="text-slate-400 mb-4">
          Our dedication to detail and excleince ensures your satisfaction
        </p>
        <button className="bg-orange-400 px-5 py-2 rounded-full text-white">
          View details
        </button>
      </div>
      <div className="flex justify-center">
        <img src={shoe8} className="w-[400px] object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality