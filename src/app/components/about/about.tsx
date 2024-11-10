import Image from "next/image"

 const AboutPage = () => {
  return (
    <div>
        {/* About  section  */}
      
      <section id="about" className="bg-zinc-950 font-font">
        <div className="flex flex-row justify-center items-center pt-24 text-4xl text-secondary font-font hover:font-bold "> <h2> About Me </h2></div>
        
        <div className='max-w-4xl m-auto font-font leading-[1.5] tracking-[2px]  text-[16px] text-secondary '>
          <div className='grid grid-cols-2 gap-32 py-20 '>

            {/*About left section */}
            
        
            <div className="flex flex-col justify-center items-start ">
              <p className="leading-[1.5] tracking-[2px]" > I am Maira Naeem a front-end developer with a strong passion for crafting responsive, scalable, and
                visually stunning web application. With expertise in HTML, CSS, TypeScript, Next.js, i am to deliver seamless user experience
                . i am excited to bring my skills to innovative projects and collaborate with like-minded individuals. </p>
            </div>

            {/* About right section */}
            <div>
              <Image src="/images/aboutpic.png" alt="about" width="500" height="500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AboutPage
