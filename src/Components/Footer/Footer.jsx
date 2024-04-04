 
import logo from '../../assets/Logo.png'
export default function Footer() {
  return (
    <footer className="mt-[30px]">
     <div className="flex justify-between">
          <div className="left">
               <a href="#" className="logo"><img className='w-[120px]  ' src={logo} alt="logo" /></a>
               <p className='text-[12px] leading-[16px] font-[400] text-[#989898] my-3'>Beautifully designed, expertly crafted Flutter components and templates, to jumpstart <br /> your projects and speed up your development process.</p>
               <ul className="media flex gap-5">
                 <li className='bg-[#0D0D0E] rounded-full p-4'><a href="#"><i className='text-white my-icon icon-twiter'></i></a></li>   
                 <li className='bg-[#0D0D0E] rounded-full p-4'><a href="#"><i className='text-white my-icon icon-instragram'></i></a></li>   
                 <li className='bg-[#0D0D0E] rounded-full p-4'><a href="#"><i className='text-white my-icon icon-linkedin'></i></a></li>   
                 <li className='bg-[#0D0D0E] rounded-full p-4'><a href="#"><i className='text-white my-icon icon-facebook'></i></a></li>   
               </ul>
          </div>
          <div className=" flex gap-28 pr-10">
               <ul className="ul">
                    <li className='text-[14px] leading-[18px] font-[600] text-[#000000]'>Explore</li>
                    <li className='text-[14px] leading-[18px] font-[400] my-3'>Blog</li>
                    <li className='text-[14px] leading-[18px] font-[400] my-3'>Template</li>
                    <li className='text-[14px] leading-[18px] font-[400] my-3'>Screen</li>
               </ul>
               <ul className="ul">
                    <li className='text-[14px] leading-[18px] font-[600] text-[#000000]'>Support</li>
                    <li className='text-[14px] leading-[18px] font-[400] text-[#111111] my-5'>pricing</li>
                    <li className='text-[14px] leading-[18px] font-[400] text-[#111111] my-5'>Become a sponsor</li>
                    <li className='text-[14px] leading-[18px] font-[400] text-[#111111] my-5'>Hire top Flutter Devs</li>
               </ul>
          </div>
     </div>
     <div className="flex justify-between mt-8">
          <p>Copyright 2024 TheFlutterLibrary. All rights reserved.</p>
          <p>Privacy Policy | Terms & Conditions | Cookie Policy</p>
     </div>
    </footer>
  )
}
