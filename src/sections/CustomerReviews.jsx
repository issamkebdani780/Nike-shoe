import CustomerCard from '../componenets/CustomerCard.jsx'
import { customer1 } from '../assets/images';
import { customer2 } from '../assets/images';
import { star } from '../assets/icons';

function CustomerReviews() {
    return (
        <section id='Testimonials' className="flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl sm:text-4xl font-bold">What Our <span className="text-orange-400">Customers</span> Say?</h1>
            <p className='text-slate-400 mb-20'>Hear genuine stories from uor satified customers about their exceptional experirnce with us</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
                <CustomerCard imgUrl={customer1} text="the attention to detail and the quality of the prouduct exeeded my expentations highly recommended" Username="Morich Brown" starIcon={star}/>
                <CustomerCard imgUrl={customer2} text="the attention to detail and the quality of the prouduct exeeded my expentations highly recommended" Username="Lota Mongeskar" starIcon={star}/>
            </div>
        </section>
    )
}

export default CustomerReviews ;