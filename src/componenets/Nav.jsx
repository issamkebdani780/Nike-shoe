// mx-lg : hidden => min-width : 1024px {display : none}

import {headerLogo} from '../assets/images'
import { navLinks } from '../constant/script'
import {hamburger} from '../assets/icons'

const Nav = () => {
  return (
    <nav className='flex justify-between padding-x py-6 items-center absolute w-full z-10'>
        <a href="">
            <img src={headerLogo} alt="logo" className="w-25" />
        </a>
        <ul className='flex gap-10 max-lg:hidden '>
            {navLinks.map((element) => (
                <li key={element.label}>
                    <a href={element.href} className='text-lg text-slate-gray'>{element.label}</a>
                </li> 
            ))}
        </ul>
        <div className="max-lg:hidden flex gap-2">
            <a href="">sign in</a> 
            <span>/</span>
            <a href="">Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
            <img src={hamburger} width={25} height={25}/>
        </div>
    </nav>
  )
}

export default Nav