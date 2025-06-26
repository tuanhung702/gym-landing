 import icon1 from '../assets/image/icon.jpeg'; 
 
type Reason = {
  icon: string;
  title: string;
  description: string;
};

const reasonData: Reason[] = [
  {
    icon: icon1,
    title: "15000 sq.m.",
    description:
      "A spacious gym for sports – a safe distance between exercise machines",
  },
  {
    icon: icon1,
    title: "More than 200 equipment",
    description:
      "No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym.",
  },
  {
    icon: icon1,
    title: "4 fitness zones",
    description:
      "From cardio to functional and cycle. Separate area for boxing and mixed martial arts",
  },
  {
    icon: icon1,
    title: "Round-the-clock operation",
    description:
      "The gym is open 24 hours a day, also works on all holidays and weekends",
  },
];

function ReasonItem({ reason }: { reason: Reason }) {
  return (
    <div className="flex gap-[20px] items-center">
      <img className="w-[50px] h-[70px]" src={reason.icon} alt="" />
      <div className="flex-col gap-[20px] justify-center">
        <h2 className="font-[700] text-[18px]">{reason.title}</h2>
        <p>{reason.description}</p>
      </div>
    </div>
  );
}

export default function Reasons() {
  return (
    <div className="text-white mt-[300px]">
      <h1 className="font-[500] text-[48px]">Reasons to join</h1>

      <div className="grid grid-cols-2 gap-[40px] mt-[50px]">
        {reasonData.map((reason) => (
          <ReasonItem  reason={reason} />
        ))}
      </div>
    </div>
  );
}
