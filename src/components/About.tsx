
import item1 from '../assets/image/image2.png'; 

export default function AboutUs() {
  return (
    <div className="bg-black text-white px-10 py-20 flex mt-[200px] items-start gap-30">
      {/* Left content */}
      <div className="  space-y-6  w-[600px]">
        <h2 className="text-[64px] font-bold leading-[64px]">About us</h2>
        <p className="text-[18px] leading-[30px]  mt-[50px]">
          Gym24 is a leading fitness center located near Grushevka metro station,
          offering over 1500 sq. m of space dedicated to top-of-the-line workout
          equipment from leading brands such as Hammer Strength, Life Fitness,
          and TechnoGym.
        </p>
        <p className="text-[18px] leading-[30px]">
          With affordable membership options, Gym24 is accessible to everyone
          who wants to reach their fitness goals, whether it's building strength,
          increasing endurance, or losing weight.
        </p>
        <p className="text-[18px] leading-[30px]">
          Certified trainers at Gym24 provide expert guidance and support to develop
          personalized workout plans tailored to each individual's needs and goals.
        </p>
      </div>

      {/* Right image */}
      <div className=" flex flex-col items-center w-[600px] h-[500px]">
        <div className=" rounded-[10px] overflow-hidden">
          <img src={item1} alt="Gym interior" className="rounded-[10px]" />
        </div>
        {/* Indicators */}
        <div className="flex gap-2 mt-4">
          <div className="w-[30px] h-[5px] bg-yellow-400 rounded-full"></div>
          <div className="w-[30px] h-[5px] bg-white/40 rounded-full"></div>
          <div className="w-[30px] h-[5px] bg-white/40 rounded-full"></div>
          <div className="w-[30px] h-[5px] bg-white/40 rounded-full"></div>
        </div>
        {/* Arrows */}
        <div className="flex justify-between w-full px-4 mt-4 text-2xl">
          <button className="text-white hover:text-yellow-400">←</button>
          <button className="text-white hover:text-yellow-400">→</button>
        </div>
      </div>
    </div>
  );
}
