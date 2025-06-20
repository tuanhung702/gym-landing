import Home from "./components/Home";
import Reason from "./components/Reason";
import Membership from "./components/Membership";
import AboutUs from "./components/About";
import Traniers from "./components/Traniers";
import Footer from "./components/footer";
export default function App() {
  return (
    <div className="bg-black pl-[200px]">
      <Home />
      <Reason />
      <Membership/>
      <AboutUs/>
      <Traniers/>
       <Footer/>
    </div>
  );
}