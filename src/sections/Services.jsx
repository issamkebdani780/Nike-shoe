import ServicesCard from "../componenets/ServicesCard"
import { star } from "../assets/icons"


const Services = () => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-16">
      <ServicesCard iconUrl={star} heading="Free shipping" parageraphe="Enjoy sealmess shopping with our complimentary shipping service" />
      <ServicesCard iconUrl={star} heading="Secure Payement" parageraphe="Enjoy sealmess shopping with our complimentary shipping service" />
      <ServicesCard iconUrl={star} heading="love to help you" parageraphe="Enjoy sealmess shopping with our complimentary shipping service" />
    </section>
  )
}

export default Services ;