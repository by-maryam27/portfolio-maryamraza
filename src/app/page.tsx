import About from "./(routes)/about/page";
import Contact from "./(routes)/contact/page";
import Hireme from "./(routes)/hireme/page";
import Hero from "./components/hero";
import Skills from "./components/skills";


export default function Mainpage() {
  return (
  <div>
<Hero/>
<About/>
<Skills/>
<Contact/>
<Hireme/>
    </div>
  );
};
