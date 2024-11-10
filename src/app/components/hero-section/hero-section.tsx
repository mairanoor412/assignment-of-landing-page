import Link from "next/link"
import Image from "next/image"
import { GiHumanTarget } from "react-icons/gi";

export const HeroSection = () => {
  return (
    <main>
        <section className="bg-black font-font h-screen">
            <div className='max-w-4xl m-auto text-secondary '>
                <div className='grid grid-cols-2 gap-32 py-40 '>

        
                     {/* hero section left side */}
            <div className="flex flex-col justify-center items-start ">
              <p className="text-4xl"> Hey iam <span className="text-primary italic"> Maira Naeem </span> </p>
              <h1 className="text-2xl pt-6 font-bold leading-[1.5] tracking-[2px]"> FRONTEND DEVELOPER </h1>
              <p className="pt-6 leading-[1.5] tracking-[2px] text-[16px]"> 
                Hey iam frontend developer from pakistan, dedicated to delivering beautiful, functional and user-friendly websites that exceed your expectations.
              </p>

               {/* Button */}
              <Link href="#about" target="_blank">
              <button className="mt-10 bg-primary p-2 text-secondary text-[18px] rounded-[5px] hover:font-bold pl-6 pr-6 flex items-center" > <GiHumanTarget className="text-[25px] mr-2" /> More About Me </button>
              </Link>
            </div>


            {/* hero section right side */}
            <div className="">
            <Image src="/images/profile.jpg"  alt="This is me Maira Naeem" width={360} height={360} className="max-w-[360px] h-[360px] rounded-full border-2 border-primary pt-5 "  ></Image>
            </div>

          
                </div>
            </div>

        </section>
    </main>
  )
}
