import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { bigShoe2 } from "../assets/images";
import { bigShoe3 } from "../assets/images";

const Hero = () => {
  
  function slectShoe(element) {
    document.querySelectorAll("#cardShoe img").forEach((e) => {
      e.style = "border-color : none" ;
    })
    element.target.style = "border-color : red" ;
    document.getElementById("bigShoe").src = element.target.src ;
    
  }

  return (
    <section className="w-full flex xl:flex-row flex-col padding-x">
      <div className="flex flex-col items-start justify-center padding-y max-sm:py-[100px] xl:w-2/5">
        <p className="text-orange-400 mb-10 ">our summer collection</p>
        <h1 className="text-8xl sm:text-4xl font-bold mb-10 ">
          <span> the new arrival</span>
          <br />
          <span className="text-orange-400">Nike</span> shoes
        </h1>
        <p className="text-slate-400 mb-15">
          Discover stylish Nike arrival quality comfort and innovation for your
          active life
        </p>
        <button className="bg-orange-400 flex gap-3 py-2 px-4 items-center rounded-full mt-6">
          Shop now <img src={arrowRight} alt="icon" />
        </button>
        <div className="flex gap-24 mt-9 max-sm:gap-10 flex-wrap">
          <div className="flex flex-col">
            <span className="text-2xl font-bold">1K+</span>
            <span className="text-slate-400">Brands</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">500+</span>
            <span className="text-slate-400">Shops</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">250K+</span>
            <span className="text-slate-400">Costomers</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-primary bg-hero bg-cover relative flex-1 min-h-screen">
        <img src={bigShoe1} alt="" width={450} id="bigShoe"/>
        <div className="flex gap-6 absolute bottom-[-50px] " id="cardShoe">
          <img src={bigShoe1} alt="" width={150} className="card bg-transparent" onClick={(e) => slectShoe(e)}/>
          <img src={bigShoe2} alt="" width={150} className="card bg-transparent" onClick={(e) => slectShoe(e)}/>
          <img src={bigShoe3} alt="" width={150} className="card bg-transparent" onClick={(e) => slectShoe(e)}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;