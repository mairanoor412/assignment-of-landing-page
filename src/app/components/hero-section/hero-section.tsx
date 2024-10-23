import Link from "next/link"
import Image from "next/image"
import pic from "./pixs.jpg"

export const HeroSection = () => {
  return (
    <main>
        <section className="bg-black ">
            <div className='max-w-4xl m-auto font-serif tracking-wider font-normal text-lg text-white '>
                <div className='grid grid-cols-2 gap-32 py-40 '>

        
                     {/* hero section left side */}
            <div className="flex flex-col justify-center items-start ">
              <p className="text-4xl"> Hey iam <span className="text-red-600 italic"> Maira Naeem </span> </p>
              <h1 className="text-2xl pt-6 font-bold "> FRONTEND DEVELOPER </h1>
              <p className="pt-6 "> 
                Hey iam frontend developer from pakistan, dedicated to delivering beautiful, functional and user-friendly websites that exceed your expectations.
              </p>

               {/* Button */}
              <Link href="/about" target="_blank">
              <button className="mt-6 bg-red-700 p-2 text-base rounded-2xl hover:font-bold hover:bg-red-700" > More About Me </button>
              </Link>
            </div>


            {/* hero section right side */}
            <div className="">
            <Image src={pic} alt="This is me Maira Naeem" className="max-w-80 h-80 border-2 border-red-600 pt-2 "  ></Image>
            </div>

          
                </div>
            </div>

        </section>
    </main>
  )
}
