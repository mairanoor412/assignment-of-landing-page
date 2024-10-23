import Link from "next/link"
import Image from "next/image"
import icon from "../hero-section/icon.png"

 const Header = () => {
  return (
    <header className="bg-black font-sans tracking-wider w-full fixed leading-relaxed">
        <div className="max-w-6xl m-auto h-16">
            <div className="grid grid-cols-2 justify-center items-center text-white " >
                {/* logo */}
                <div>
                    <Image src={icon} alt="icon" className="h-14 w-14 pt-1" ></Image>
                </div>

                {/* nav */}
                <nav >
                    <ul className="flex gap-16 p-5">
                        <li >
                            <Link href="/" className="hover:text-red-600"> Home </Link>
                        </li>

                        <li>
                            <Link href="#about" className="hover:text-red-600"> About </Link>
                        </li>

                        <li>
                            <Link href="#portfolio" className="hover:text-red-600"> Portfolio </Link>
                        </li>

                        <li>
                            <Link href="#contact" className="hover:text-red-600"> Contact </Link>
                        </li>
                    </ul>
                </nav>



            </div>
        </div>
    </header>
  )
}

export default Header;
