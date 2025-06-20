 import icon1 from '../assets/image/icon.jpeg'; 

export default function reason(){
    return(
        <div className="text-white mt-[300px]" >
            <h1 className="font-[500] text-[48px]">Reasons to join</h1>

            <div className="grid grid-cols-2 gap-[40px] mt-[50px]">
                <div className="flex gap-[20px] items-center  ">
                   
                    <img className="w-[50px] h-[70px]" src={icon1} alt="" />
                    <div className="flex-col  gap-[20px] justify-center">
                         <h2 className="font-[700] text-[18px]" > 15000 sq.m.</h2>
                         <p>A spacious gym for sports – a safe distance <br /> between exercise machines</p>
                    </div>
                </div>
                <div className="flex gap-[20px] items-center  ">
                   
                    <img className="w-[50px] h-[70px]" src={icon1} alt="" />
                    <div className="flex-col  gap-[20px] justify-center">
                         <h2 className="font-[700] text-[18px]" > More than 200 equipment</h2>
                         <p>No queues at the simulators. Premium equipment <br /> from LifeStyle, Hammer Strength, TechnoGym.</p>
                    </div>
                </div>
               
                <div className="flex gap-[20px] items-center  ">
                   
                    <img className="w-[50px] h-[70px]" src={icon1} alt="" />
                    <div className="flex-col  gap-[20px] justify-center">
                         <h2 className="font-[700] text-[18px]" > 4 fitness zones</h2>
                         <p>From cardio to functional and cycle. Separate area <br /> for boxing and mixed martial arts</p>
                    </div>
                </div>
                <div className="flex gap-[20px] items-center  ">
                   
                    <img className="w-[50px] h-[70px]" src={icon1} alt="" />
                    <div className="flex-col  gap-[20px] justify-center">
                         <h2 className="font-[700] text-[18px]" >Round-the-clock operation</h2>
                         <p>The gym is open 24 hours a day, also works on all  <br />holidays and weekends</p>
                    </div>
                </div>
            </div>

        </div>

        
       
    )
       
}