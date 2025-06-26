// Membership.tsx


type MembershipPlan = {
  name: string;
  price: string;
  features: string[];
};

// membershipData.ts
export const membershipData = [
  {
    name: "Pass ‘Trial’",
    price: "$ 0",
    features: [
      "Access to the gym from 8:00 to 14:00",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    name: "Pass ‘Easy Start’",
    price: "$ 119",
    features: [
      "Visit without restrictions 24/7",
      "Individual training program",
      "Access to the VTRAINER application",
      "Trainer support",
    ],
  },
  {
    name: "Pass ‘Free Time’",
    price: "$ 49",
    features: [
      "The entrance time to the gym is from 14:00 to 16:00",
      "Without suspension of gym membership",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    name: "Pass ‘1 Month 24/7’",
    price: "$ 85",
    features: [
      "Visit without restrictions 24/7",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    name: "Pass ‘In Shape (AM)’",
    price: "$ 165",
    features: [
      "Training in mini-groups until 14:00",
      "Without suspension of gym membership",
      "Classes with a trainer in a mini-group 3 times a week",
      "Trainer support",
    ],
  },
  {
    name: "Pass ‘In Shape (PM)’",
    price: "$ 195",
    features: [
      "Training in mini-groups until 17:00",
      "Without suspension of gym membership",
      "Classes with a trainer in a mini-group 3 times a week",
      "Trainer support",
    ],
  },
];


function MembershipCard({ plan }: { plan: MembershipPlan }) {
  return (
    <div
      className="w-[275px] h-[397px] bg-[#222222] rounded-[10px] 
                 flex flex-col overflow-hidden group cursor-pointer 
                 border-4 border-transparent hover:border-[#FAFF00] transition-all duration-300" >
      {/* Header */}
      <div
        className="flex flex-col items-center justify-center h-[101px] space-y-1 
                   transition-colors duration-300 group-hover:bg-[#FAFF00]"
      >
        <h3 className="text-[18px] font-bold leading-[23px] text-white group-hover:text-black">
          {plan.name}
        </h3>
        <p className="text-[24px] font-medium leading-[30px] text-white group-hover:text-black">
          {plan.price}
        </p>
      </div>

      {/* Separator */}
      <div className="border-t border-black transition-colors duration-300 group-hover:border-[#FAFF00]" />

      {/* Features */}
      <div className="flex flex-col px-[23px] py-4 space-y-4 flex-1">
        {plan.features.map((feature) => (
          <div className="flex items-start gap-2">
              <span className="min-w-[16px] min-h-[16px] w-4 h-4 bg-white rounded-full mt-1" />
            <p className="text-[14px] font-light leading-[18px] text-white">{feature}</p>
          </div>
        ))}
      </div>

      {/* Buy Button */}
      <div className="flex justify-center py-2 mb-[20px]">
        <button className="w-[107px] h-[30px] bg-[#FAFF00] rounded-[30px] text-[14px] font-light leading-[18px] text-black">
          Buy
        </button>
      </div>
    </div>
  );
}

export default function Membership() {
  return (
    <div className="text-white mt-[250px] flex flex-col items-center mr-[200px]">
      <h1 className="font-[500] text-[48px]">GYM MEMBERSHIP</h1>
      <div className="grid grid-cols-3 gap-[100px] mt-[100px]">
        {membershipData.map((plan) => (
          <MembershipCard plan={plan} />
        ))}
      </div>
    </div>
  );
}
