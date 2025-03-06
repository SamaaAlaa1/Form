import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="bg-[#1f1f1f] text-white flex md:flex-row flex-col gap-8  md:justify-between md:py-6 py-[10%]  md:px-[20%] px-5 md:text-sm text-[17px] w-full  ">
      <div className="flex flex-col gap-2">
        <p>copyright © 2020-2025, 180Daraga. All Rights Reserved</p>
        <ul className=" flex gap-1 md:text-base text-xl text-center items-center  ">
            <li className="bg-[#3b5999]  md:w-6 w-8 md:h-6 h-8 flex justify-center items-center rounded-md "><a href="https://www.facebook.com/180.Daraga"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li className="bg-[#cd201f]  md:w-6 w-8 md:h-6 h-8 flex justify-center items-center   rounded-md "><a href="https://www.youtube.com/channel/UCy2pNwCwdCDBa557YSYzLOA"><FontAwesomeIcon icon={faYoutube} /></a></li>
            <li className="bg-[#55acee]  md:w-6 w-8 md:h-6 h-8 flex justify-center items-center   rounded-md  "><a href="https://twitter.com/180daraga"></a><FontAwesomeIcon icon={faTwitter} /></li>
            <li className="bg-[#e4405f]  md:w-6 w-8 md:h-6 h-8 flex justify-center items-center   rounded-md "><a href="https://www.instagram.com/180daraga"><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
      </div>
      <div className="flex flex-col md:gap-1 gap-2">
        <p>Email: <a href="180daraga.org@gmail.com" className="underline">180daraga.org@gmail.com</a></p>
        <p>Tel: <a href="+20 104 056 4660" className="underline">+20 104 056 4660</a></p>
      </div>
    </div>
  )
}

export default Footer
