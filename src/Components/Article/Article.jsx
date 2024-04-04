import ar1 from '../../assets/ar1.png'
import ar2 from '../../assets/ar2.png'
import ar3 from '../../assets/ar3.png'

export default function Article() {
  return (
    <section className=" mt-[50px]">
          <h2 className="text-[24px] leading-[24px] font-[400] text-[#111111]">Article</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          <div className="w-[398px] rounded-[12px]">
               <div className="box-img ">
                    <img src={ar1} alt="ar1" />
               </div>
               <h4 className='text-[14px] leading-[18px] font-[400] text-[#989898] my-2'>Mar 24, 2024   <span className='ms-3'>Animation</span></h4>
               
                    <h3 className='text-[16px] leading-[21px] font-[600] text-[#111111]'>Learn Flutter animation</h3>
          </div>
          <div className="w-[398px] rounded-[12px]">
               <div className="box-img ">
                    <img src={ar2} alt="ar2" />
               </div>
               <h4 className='text-[14px] leading-[18px] font-[400] text-[#989898] my-2'>Mar 24, 2024   <span className='ms-3'>Animation</span></h4>
               
                    <h3 className='text-[16px] leading-[21px] font-[600] text-[#111111]'>Onboarding Screen with Carousel & Animated Dots</h3>
          </div>
          <div className="w-[398px] rounded-[12px]">
               <div className="box-img ">
                    <img src={ar3} alt="ar3" />
               </div>
               <h4 className='text-[14px] leading-[18px] font-[400] text-[#989898] my-2'>Mar 24, 2024   <span className='ms-3'>Animation</span></h4>
               
                    <h3 className='text-[16px] leading-[21px] font-[600] text-[#111111]'>Parallax Scroll Effect with PageView in Flutter</h3>
          </div>
           
         
           

     </div>
    </section>
  )
}
