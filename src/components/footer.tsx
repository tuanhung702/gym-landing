

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4  mt-[300px] items-center">
      <div className="max-w-7xl  grid grid-cols-3 gap-[50px]">
        {/* Brand section */}
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">GYM24</h2>
          <p className="text-gray-300 leading-relaxed text-base">
            Build strength and confidence at our gym with state-of-the-art
            equipment, personalized training, and a motivating community.
          </p>
        </div>

        {/* Address section */}
        <div className="flex flex-col items-start ml-[150px]">
          <h3 className="text-2xl font-bold mb-4">Address</h3>
          <p className="text-gray-300 text-base">Republic of Belarus</p>
          <p className="text-gray-300 text-base">Minsk city</p>
          <p className="text-gray-300 text-base">Dzerzhinsky Avenue 15</p>
        </div>

        {/* Contact section */}
        <div className="flex flex-col items-start ml-[150px]">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+375447772412" className="text-gray-300 hover:text-white transition-colors duration-300">
              +375(44)-777-24-12
            </a>
          </div>

          <div className="flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13h9a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <a href="mailto:gym24@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300">
              gym24@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}