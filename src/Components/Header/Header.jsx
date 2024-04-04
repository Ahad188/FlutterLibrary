 
 
 export default function Header() {
   return (
     <div className="flex justify-between mt-5 px-10">
           <div className=" h-[48px] rounded-xl bg-[#F0F0F0] flex items-center py-[16px] px-10">
               <i className="my-icon icon-search"></i>
               <input className="rounded-xl bg-[#F0F0F0] px-5 focus:outline-none" type="search" name="" id="" placeholder="search here" />
          </div>
          <div className="flex items-center gap-5">
               <i className="my-icon icon-dark h-[24px] w-[24px]"></i>
                <a className="text-[16px] leading-[21px] font-[600] text-[#111111]" href="#">Login</a> 
               <a className="border rounded-[16px] bg-[#111111] text-white w-[90px] h-[49px] py-[14px] px-[16px]" href="#">Get Pro</a>
          </div>
     </div>
   )
 }
 