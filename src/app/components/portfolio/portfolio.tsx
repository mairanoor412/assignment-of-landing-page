import Link from "next/link"
import Image from "next/image";



const PortfolioPage = () => {
  return (
    <div>
        {/*Portfolio Section  */}
      <section id="portfolio" className="bg-black font-font">
          <div className="text-secondary flex flex-row justify-center items-center pt-20 pb-5 font-serif text-4xl hover:font-bold ">
          <h2 > Portfolio </h2>
           </div>

        <div className='max-w-4xl m-auto  font-normal text-lg text-secondary leading-[1.5] tracking-[1px] '>
      
        <p className="text-secondary"> Wellcome to my Portfolio Here you will find a showcase of my projects, skills and Experience. Below are some of the CLI-based projects.</p>
          <div className="grid grid-cols-2 gap-32 py-20">
          
          {/* project 1 */}
          <div className="border-2 border-secondary h-[370px] w-[320px]   " >
            <Image src="/images/project-1.jpg" alt="project 1" width="320" height="300" />
            <h2 className="text-[25px] pt-5    text-secondary font-bold flex justify-center" > Calculator </h2>
            <p className="pl-5 pr-5 pt-3 pb-3  ">A simple command-line interface calculator built using TypeScript for basic arithmetic operations.</p>
            

            <Link href="https://github.com/mairanoor412/calculator-NPX-command" target="_blank">
            <button className=" hover:bg-primary hover:border-primary border-secondary border-2 pt-2 pb-2 pl-10 pr-10 text-secondary text-[18px] hover:font-bold ml-[65px] mt-3 rounded-[5px]"> View Project </button>
            </Link>
          </div>

          {/* project 2 */}
          <div className="border-2 border-secondary h-[370px] w-[320px]  ">
            <Image src="/images/project-2.jpg" alt="project 2" width="320" height="300" />
            <h2 className="text-[25px] pt-5    text-secondary font-bold flex justify-center" > Number Guessing Game </h2>
            <p className="pl-5 pr-5 pt-3 pb-3">A simple command-line interface game built using TypeScript where user can play a number guessing game.</p>
            
            <Link href="https://github.com/mairanoor412/cli-numbers-guessing" target="_blank">
            <button className="  hover:bg-primary hover:border-primary  border-secondary border-2 pt-2 pb-2 pl-10 pr-10 text-secondary text-[18px] hover:font-bold ml-[65px] mt-3 rounded-[5px]"> View Project </button>
            </Link>
          </div>

          {/* project 3 */}
          <div className="border-2 border-secondary h-[370px] w-[320px] ">
            <Image src="/images/project-3.jpg" alt="project 3" width="320" height="300" />
            <h2 className="text-[25px] pt-5    text-secondary font-bold flex justify-center" > Todo List </h2>
            <p className="pl-5 pr-5 pt-3 pb-3">A simple and efficient command-line interface for managing your daily task .</p>
           
            <Link href="https://github.com/mairanoor412/todo-list" target="_blank">
            <button className="  hover:bg-primary hover:border-primary border-secondary border-2 pt-2 pb-2 pl-10 pr-10 text-secondary text-[18px] hover:font-bold ml-[65px] mt-10 rounded-[5px]"> View Project </button>
            </Link>
          </div>

          {/* project 4 */}
          <div className="border-2 border-secondary h-[370px] w-[320px] "> 
          
            <Image src="/images/project-4.jpg" alt="project 4" width="320" height="300" />
            <h2 className="text-[25px] pt-5    text-secondary font-bold flex justify-center" > ATM </h2>
            <p className="pl-5 pr-5 pt-3 pb-3">A simple command-line interface ATM simulator built using TypeScript for managing bank accounts.</p>
           
            <Link href="https://github.com/mairanoor412/atm" target="_blank">
            <button className="  hover:bg-primary hover:border-primary border-secondary border-2 pt-2 pb-2 pl-10 pr-10 text-secondary text-[18px] hover:font-bold ml-[65px] mt-3 rounded-[5px]"> View Project </button>
            </Link>
          </div>


          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage;
