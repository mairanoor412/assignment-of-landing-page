
import Link from "next/link"
import Header from "./components/header/header"
import { HeroSection } from "./components/hero-section/hero-section";
import Image from "next/image"
import aboutpic from "./aboutpic.png"
import project1 from "./project-1.jpg"
import project2 from "./project-2.jpg"
import project3 from "./project-3.jpg"
import project4 from "./project-4.jpg"
import Footer from "./components/footer/footer";


const HomePage = () => {
  return (
    <div>
      {/* nav */}
      <Header></Header>

      {/* hero section */}
      <HeroSection></HeroSection>

      {/* About  section  */}
      
      <section id="about" className="bg-zinc-950">
        <div className="flex flex-row justify-center items-center pt-24 text-4xl text-red-600 font-serif font-bold "> <h2> About Me </h2></div>
        
        <div className='max-w-4xl m-auto font-serif tracking-wider font-normal text-lg text-white leading-relaxed '>
          <div className='grid grid-cols-2 gap-32 py-20 '>

            {/*About left section */}
            
        
            <div className="flex flex-col justify-center items-start text-justify">
              <p> iam Maira Naeem a front-end developer with a strong passion for crafting responsive, scalable, and
                visually stunning web application. With expertise in HTML, CSS, TypeScript, Next.js, iam to deliver seamless user experience
                . iam excited to bring my skills to innovative projects and collaborate with like-minded individuals. </p>
            </div>

            {/* About right section */}
            <div>
              <Image src={aboutpic} alt="about"></Image>
            </div>
          </div>
        </div>
      </section>


      {/*Portfolio Section  */}
      <section className="bg-black">
          <div className="text-red-600 flex flex-row justify-center items-center pt-28 pb-10 font-serif text-4xl font-bold ">
          <h2 > Portfolio </h2>
           </div>

        <div className='max-w-4xl m-auto font-serif tracking-wider font-normal text-lg text-white leading-relaxed'>
      
        <p className="text-white"> Wellcome to my Portfolio Here you will find a showcase of my projects, skills and Experience. Below are some of the CLI-based projects.</p>
          <div className="grid grid-cols-2 gap-32 py-20">
          
          {/* project 1 */}
          <div className="border-2 border-red-600 hover:bg-red-800 " >
            <Link href="https://github.com/mairanoor412/calculator-NPX-command" target="_blank">
            <Image src={project1} alt="project 1" className="h-56"></Image>
            <h2 className="pt-5 pb-2 text-3xl p-4 text-red-600 font-bold " > Calculator </h2>
            <p className="p-4 hover:text-xl">A simple command-line interface calculator built using TypeScript for basic arithmetic operations.</p>
            </Link>
          </div>

          {/* project 2 */}
          <div className="border-2 border-red-600 hover:bg-red-800 ">
          <Link href="https://github.com/mairanoor412/cli-numbers-guessing" target="_blank">
            <Image src={project2} alt="project 1" className="h-56"></Image>
            <h2 className="pt-5 pb-2 text-3xl p-4 text-red-600 font-bold " > Number Guessing Game </h2>
            <p className="p-4 hover:text-xl">A simple command-line interface game built using TypeScript where user can play a number guessing game.</p>
            </Link>
          </div>

          {/* project 3 */}
          <div className="border-2 border-red-600 hover:bg-red-800 ">
          <Link href="https://github.com/mairanoor412/todo-list" target="_blank">
            <Image src={project3} alt="project 1" className="h-56"></Image>
            <h2 className="pt-5 pb-2 text-3xl p-4 text-red-600 font-bold " > Todo List </h2>
            <p className="p-4 hover:text-xl">A simple and efficient command-line interface for managing your daily task .</p>
            </Link>
          </div>

          {/* project 4 */}
          <div className="border-2 border-red-600 hover:bg-red-800 "> 
          <Link href="https://github.com/mairanoor412/atm" target="_blank">
            <Image src={project4} alt="project 1" className="h-56"></Image>
            <h2 className="pt-5 pb-2 text-3xl p-4 text-red-600 font-bold " > ATM </h2>
            <p className="p-4 hover:text-xl">A simple command-line interface ATM simulator built using TypeScript for managing bank accounts.</p>
            </Link>
          </div>


          </div>
        </div>
      </section>

      {/* footer section */}
      <Footer></Footer>

    </div>
  )
}

export default HomePage;
