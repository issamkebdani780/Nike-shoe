import { footerLogo } from "../assets/images"
import { instagram } from "../assets/icons"
import { twitter } from "../assets/icons"
import { facebook } from "../assets/icons"

const Footer = () => {
  return (
    <section>
      <div className="text-white grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-10 ">
        <div className="flex gap-5 flex-col">
          <img src={footerLogo} alt="" className="w-32"/>
          <p>Get shoes ready for the new term at your neatrest nike store. find your perfect size in store Get rewards</p>
          <div className="flex gap-2">
            <img src={instagram} alt="" className="bg-white rounded-full p-1" />
            <img src={twitter} alt="" className="bg-white rounded-full p-1"  />
            <img src={facebook} alt="" className="bg-white rounded-full p-1"  />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Products</h1>
          <p>Air force 1</p>
          <p>Air max 1</p>
          <p>Air jordan 1</p>
          <p>Air Force 1</p>
          <p>Nike waffle recaer</p>
          <p>Nike cortez</p>
        </div>
        <div>
          <h1 className="font-bold">Help</h1>
          <p>About US</p>
          <p>FaQs</p>
          <p>FaQs</p>
          <p>how it works</p>
          <p>privacy policy</p>
          <p>payement policy</p>
        </div>
        <div>
          <h1 className="font-bold">Get in touch</h1>
          <p>kbd@gmail.com</p>
          <p>+213 781243966</p>
        </div>
      </div>
      <div>

      </div>
    </section>
  )
}

export default Footer