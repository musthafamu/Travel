import { NAV_LINKS } from '../constant'
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const Navbar = () => {


  return (
    <nav className="flexBetween flexCenter  max-container padding-container lg:p-5 relative z-30 py-5 ">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} priority={true} />
      </Link>

      <ul className=" hidden h-full gap-12 lg:flex">
      {NAV_LINKS.map((item) => (
          <li key={item.key}>
            <Link href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}

      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image  className='inline cursor-pointer lg:hidden' src='menu.svg' alt='hammenu' width={25} height={25} />
       
     
    </nav>
  )
}

export default Navbar