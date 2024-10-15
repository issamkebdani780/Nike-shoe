// wide => min-width : 1440px

import Hero from "./sections/Hero";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import Services from "./sections/Services";
import PopularProduct from "./sections/popularProduct";
import Footer from "./sections/Footer";
import SuperQuality from "./sections/SuperQuality";
import Nav from "./componenets/Nav.jsx";
import { jsx } from "react/jsx-runtime";


function App() {
  return (
    <main>
      <Nav/>
      <section>
        <Hero/>
      </section>
      <section className="padding-x py-32">
        <PopularProduct/>
      </section>
      <section className="padding-x padding-b">
        <SuperQuality/>
      </section>
      <section className="padding-x">
        <Services/>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews/> 
      </section>
      <section className="padding">
        <Subscribe/>
      </section>
      <section className="padding-t pb-8 bg-black padding-x">
        <Footer />
      </section>
      
    </main>
  )
}

export default App ;