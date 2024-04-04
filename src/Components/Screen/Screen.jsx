import ScreenImage from "./ScreenImage";

export default function Screen() {
  return (
    <section className="mt-[40px]">
      <div className="title flex justify-between items-end">
        <h2 className="text-[24px] leading-[24px] font-[400] text-[#111111]">Screen</h2>
        <a href="#" className="text-[12px] leading-[16px] font-[400] text-[#989898]">
          See All
        </a>
      </div>
      <ul className="my-2 flex items-center gap-2">
        <button className="items">
          {" "}
          <i className="my-icon icon-filters mr-2"></i>Filter
        </button>
        <button className="items">All</button>
        <button className="items">Popular</button>
        <button className="items">Onboarding</button>
        <button className="items">Auth</button>
        <button className="items">Shop</button>
        <button className="items">Cart</button>
        <button className="items">TOP Verification</button>
        <button className="items">Dashboard</button>
        <button className="items">Food</button>
        <button className="items">Restaurant</button>
        <button className="items">Fitness</button>
        <a href="#" className="items">
          {" "}
          <i className="my-icon icon-right-arrow"></i>
        </a>
      </ul>
      <div className="mt-5">

      <ScreenImage  ></ScreenImage>
      </div>
    </section>
  );
}
