import Link from "next/link"
import Image from "next/image"


 const Header = () => {
  return (
    <header className="bg-black tracking-wider w-full fixed leading-relaxed font-font">
        <div className="max-w-6xl m-auto h-16">
            <div className="grid grid-cols-2 justify-center items-center text-white " >
                {/* logo */}
                <div>
                    <Image src="/images/icon.png" alt="icon" width={40} height={40} className="" ></Image>
                </div>

                {/* nav */}
                <nav >
                    <ul className="flex gap-16 p-5">
                        <li >
                            <Link href="/" className="hover:text-primary  hover:text-[18px] "> Home </Link>
                        </li>

                        <li>
                            <Link href="#about" className="hover:text-primary hover:text-[18px]"> About </Link>
                        </li>

                        <li>
                            <Link href="#portfolio" className="hover:text-primary hover:text-[18px]"> Portfolio </Link>
                        </li>

                        <li>
                            <Link href="#contact" className="hover:text-primary hover:text-[18px]"> Contact </Link>
                        </li>
                    </ul>
                </nav>



            </div>
        </div>
    </header>
  )
}

export default Header;
