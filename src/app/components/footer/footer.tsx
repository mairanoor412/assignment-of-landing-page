import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link"

import React from 'react'

 const Footer = () => {
  return (
    
    <footer className="bg-black text-secondary  tracking-wider h-48 font-font ">
      <div className="flex justify-center gap-7 pt-14"> 
        
        <Link href="https://www.linkedin.com/in/maira-naeem-6765692b5/" target="_blank">
        <TiSocialLinkedinCircular className=" text-[35px] hover:text-primary hover:text-[37px]" />
         </Link>

         <Link href="https://github.com/mairanoor412" target="_blank">
         <VscGithub className="text-[25px] hover:text-[27px] hover:text-primary" /> 
         </Link>

         <Link href="https://www.facebook.com/profile.php?id=100045771274782" target="_blank">
         <FaFacebook className="text-[25px] hover:text-[27px] hover:text-primary" />
         </Link>

         <Link href="https://wa.me/923416784867" target="_blank">
         <IoLogoWhatsapp className="text-[25px] hover:text-[27px] hover:text-primary" />
         </Link>

       </div>
       <hr className="  w-[50%] m-auto mt-2" />
    <div className="mt-5 w-full flex flex-row justify-center items-center" >
        <p className="">  All Right Reserved <span className="text-primary">|</span> This template is made by<span className="text-primary italic"> Maira Naeem</span> </p>
    </div>
</footer>
  )
}
export default Footer;
