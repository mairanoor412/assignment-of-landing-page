
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { GiFastForwardButton } from "react-icons/gi";
import Link from "next/link";


const ContactPage =()=>{
    return(
        <form>
        <section id="contact" className="h-screen bg-zinc-950 font-font">

            {/* main container */}
            <div className="max-w-4xl m-auto  ">
                <h1 className="pt-20 flex flex-row justify-center items-center text-secondary text-[30px] hover:font-bold mb-10 "> Contact Me </h1>
            <div className= "grid grid-cols-2  "> 

                {/* left section */}
                <div className="left-section ml-28 ">
                
                {/* email */}
                <Link href="mailto:mairanoor412@gmail.com" target="_blank">   
                <div className="bg-zinc-900 w-64 h-28 mb-3 flex flex-col justify-center items-center rounded-[3px]">          
                    <p className="text-secondary text-[30px] hover:text-[35px]"> <MdOutlineMarkEmailRead /> </p>
                    <p className="text-secondary text-[16px]  hover:text-[18px]"> Email </p>
                   <p className="flex items-center text-primary text-[17px] "> Write me < FaLongArrowAltRight className="ml-2"/> </p>  
                </div>
                </Link>

                   
                {/* whatsapp */}
                <Link href="https://wa.me/923416784867" target="_blank">
                <div className="bg-zinc-900 w-64 h-28 mb-3 flex flex-col justify-center items-center rounded-[3px]">
                    <p className="text-secondary text-[30px] hover:text-[35px]"> <FaWhatsapp /> </p>
                    <p className="text-secondary text-[16px]  hover:text-[18px]"> Whatsapp </p>
                   <p className="flex items-center text-primary text-[17px] "> Write me < FaLongArrowAltRight className="ml-2"/> </p>  
                </div>
                </Link>
                  
                  {/* Messenger */}
                  <Link href="sms:03416784867" target="_blank">
                <div className="bg-zinc-900 w-64 h-28 mb-3 flex flex-col justify-center items-center rounded-[3px]">
                    <p className="text-secondary text-[30px] hover:text-[35px]"> <FaFacebookMessenger /> </p>
                    <p className="text-secondary text-[16px]  hover:text-[18px]"> Messenger </p>
                   <p className="flex items-center text-primary text-[17px]  "> Write me < FaLongArrowAltRight className="ml-2"/> </p>  
                </div>
                </Link>

                </div>

                {/* Right section */}
                <div className="">
                    <input className="h-9 w-80 bg-black border-secondary border-[1px] pl-4 text-secondary rounded-[4px]" type="text" id="name" placeholder="Username" required />
                    <br/>
                    <br/>

                    <input className="h-9 w-80 bg-black border-secondary border-[1px] pl-4 text-secondary rounded-[4px]" type="text" id="email" placeholder="Email" required />
                    <br/>
                    <br/>

                    <input className="h-9 w-80 bg-black border-secondary border-[1px] pl-4 text-secondary rounded-[4px]" type="tel" id="phone" placeholder="Phone" required />
                    <br/>
                    <br/>

                    <textarea className="h-32 w-80 bg-black border-secondary border-[1px] pl-4 text-secondary rounded-[4px] placeholder:text-gray-400" name="Message"  rows={3} cols={30} placeholder="Message"> </textarea>
                    <br/>
                    <br/>

                    {/* button */}
                    <button className="flex items-center bg-primary py-2 px-5 text-secondary hover:font-bold hover:text-[17px] rounded-[4px]"> 
                    <GiFastForwardButton className="mr-2" />
                    Send Message
                    </button>

                </div>




            </div>
            </div>
        </section>
        </form>
    )
}

export default ContactPage;
