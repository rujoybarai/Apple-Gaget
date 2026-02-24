
import img1 from "../assets/HeroPic/pic1.webp";
import img2 from "../assets/HeroPic/pic2.webp";
import img3 from "../assets/HeroPic/pic3.webp";
import img5 from "../assets/HeroPic/pic5.webp";
import { Calculator } from "lucide-react";
import { Truck } from "lucide-react";
import { RefreshCcw } from "lucide-react";
import { Wallet } from "lucide-react";
import { Wrench } from "lucide-react";
import HightBoax from "../Component/HightBoax";




export default function Home() {
 
  const Object1 = [
    {
      title: "36 Months EMI",
      icon: <Calculator color="#A07AED" size={28} strokeWidth={1.5} />,
    },
    {
      title: "Fastest Home Delivery",
      icon: <Truck color="#DFA82B" size={28} strokeWidth={1.5} />,
    },
    {
      title: "Exchange Facility",
      icon: <RefreshCcw color="#63C687" size={28} strokeWidth={1.5} />,
    },
    {
      title: "Best Price Deals",
      icon: <Wallet color="#FD606B" size={28} strokeWidth={1.5} />,
    },
    {
      title: "After-Sales Service",
      icon: <Wrench color="#F389 " size={28} strokeWidth={1.5} />,
    },
  ];






  return (
    <div>
      {/* part 1 */}

      <div className="container mx-auto w-[90%]   lg:w-full    mt-10 mb-5 ">
        <div className=" grid lg:grid-cols-3 gap-4  grid-cols-1 h-full ">
          <div className="lg:col-span-2 lg:row-span-2 row-span-1 border-none h-\[220px\] lg:h-[60vh] ">
            <img
              src={`${img1}`}
              alt=""
              className="object-cover w-full h-full  rounded-3xl"
            />
          </div>
          <div className="  grid grid-cols-2 lg:grid-cols-1 gap-4">
            <img
              src={`${img2}`}
              alt=""
              className="object-cover w-full h-full rounded-2xl h-\[100px\] lg:h-[28vh]"
            />
            <img
              src={`${img3}`}
              alt=""
              className="object-cover w-full h-full  rounded-2xl h-\[100px\] lg:h-[28vh]"
            />
          </div>
        </div>
      </div>

      {/* part 2 */}
      <div className=" hidden lg:block container mx-auto  lg:w-full lg:h-25  mt-5 rounded-3xl py-2 bg-gray-200 border-2 border-gray-300 ">
        <ul className=" flex items-center  lg:justify-evenly   lg:text-lg gap-5 font-semibold  h-full">
          {Object1.map((item, index) => (
            <li className="flex gap-2" key={index}>
              {item.icon} {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* part 3 */}

      <HightBoax t1={"New"} t2={"Trends"} />

      {/* part 4 */}
     <HightBoax t1={"Featured"} t2={"Products"}/>

      {/* part 5 */}
      <div className="container mx-auto w-[80%] lg:w-full lg:h-72 mt-10 mb-10">
        <img src={img5} alt="Promotional Banner" className="w-full h-full object-cover rounded-3xl" />

      </div>

      {/* part 6 */}

      <HightBoax t1={"New"} t2={"Arrival"}/>
     








    </div>
  );
}
