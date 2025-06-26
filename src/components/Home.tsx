 import image1 from '../assets/image/image1.jpg'; 
 export default function Home()
 {
    return(
        <div className='relative'>
            {/* header */}
            
            <div className="flex gap-[400px] items-center text-white pt-[50px] relative z-10" >
                 <div className="font-[Bruno Ace SC] text-[24px]  leading-none  w-[200px]"> 
                    <span> GYM</span>
                    <span className="text-[#FAFF00] " >24</span>
                  </div>
                 <div className=" flex gap-[100px]">
                    <span>Advantages</span>
                    <span>Membership</span>
                    <span>About</span>
                    <span>Trainers</span>
                 </div>
            </div>
            {/* content */}
            <div className=" flex  text-white mt-[200px] relative z-10 ">
                <div>
                    <h1 className="text-[64px] ">Free trial session <br /> with a trainer</h1>
                    <button className="bg-[#FAFF00] text-black w-[177px] h-[52px] rounded-[30px] mt-[50px]  ">
                        details
                    </button>
                </div>
               
            </div>
             <div>
                    <img className="w-[700px] h-[800px] absolute  right-[180px] top-[0px] rounded-b-[30%]" src={image1}  alt="" />
   
                </div>
        </div>
       

    )
 }