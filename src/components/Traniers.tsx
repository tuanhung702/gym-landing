import icon from "../assets/image/icon-social.png";
import trainer1 from "../assets/image/trainer1.png";
import trainer2 from "../assets/image/trainer2.png";
import trainer3 from "../assets/image/trainer3.png";
import trainer4 from "../assets/image/trainer4.png";
import trainer5 from "../assets/image/trainer5.png";
import trainer6 from "../assets/image/trainer6.png";
import trainer7 from "../assets/image/trainer7.png";
import trainer8 from "../assets/image/trainer8.png";

type Trainer = {
  name: string;
  image: string;
};


let trainerData: Trainer[] = [
  { name: "Victoria Shurpik", image: trainer1 },
  { name: "Elizabeth Lavrinenko", image: trainer2 },
  { name: "Evgeny Gurkov", image: trainer3 },
  { name: "Anatoly Prytytsky", image: trainer4 },
  { name: "Maria Masyak", image: trainer5 },
  { name: "Ivan Gladkikh", image: trainer6 },
  { name: "Victoria Shurpik", image: trainer7 },
  { name: "Lyudmila Sabilo", image: trainer8 },
];

export default function Trainers() {
  return (
    <div className="text-white mt-32 flex flex-col items-center px-4 font-[500]">
      <h1 className="font-medium mb-10 text-[48px]">Trainers staff</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trainerData.map((trainer, index) => (
          <div
            key={index}
            className="w-[275px] bg-[#222222] rounded-[10px] flex flex-col overflow-hidden items-center p-4 space-y-4"
          >
            <img
              src={trainer.image}
              alt={`Trainer ${trainer.name}`}
              className="w-full h-auto rounded-md"
            />
            <p className="text-lg font-semibold text-center">{trainer.name}</p>
            <img src={icon} alt="Social Icon" />
          </div>
        ))}
      </div>
    </div>
  );
}