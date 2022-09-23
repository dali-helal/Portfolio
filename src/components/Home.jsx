import Image1 from "../images/home-background.png"
import Image2 from "../images/message.png"
import Image3 from "../images/mobile.png"
import Image4 from "../images/Frame25.png"  
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter ,FaAngleUp } from "react-icons/fa"
import "../styles/home.scss"
import Navbar from "./Navbar"
import { useEffect } from "react";
const Home=()=>{
  useEffect(()=>{
    function toggleVisibility(){
      if(window.scrollY == 0){
        document.querySelector('.scroll').classList.add('hidden')
      }
      else{
        document.querySelector('.scroll').classList.remove('hidden')
      }
    }

    document.addEventListener("scroll" , toggleVisibility);

    return ()=>{ document.removeEventListener("scroll" , toggleVisibility) }
  } , []);
    return(
      <section className="home" id="home">
           <Navbar />
      <img className="background-img" src={Image1} alt="" />
      <img className="mobile-img" src={Image3} alt="" />
      <div className="conatainer">
        <div>
        <h2>Dali Ben Helal</h2>
        <h4>Full Stack web Developer</h4>
        <a href="#projects">
          <button>Portfolio <img src={Image2} alt="" /></button>
        </a>
        </div>
         <div className="folow-desktop">
          <h3>Follow me on :</h3>
          <div className="folow-icons">
          <a href="https://www.facebook.com/dali.hlal.9/">
                 <FaFacebook className="home-icon"/>
                 </a>
                <a href="https://github.com/dali-helal">
                <FaGithub className="home-icon"/>
                </a>
           
                <a href="https://www.linkedin.com/in/mohamed-ali-helal-a00586236/">
                <FaLinkedin  className="home-icon"/>
                </a>
            </div>
         </div>
      </div>
      <div className="folow-mobile">
          <h3>Follow me on :</h3>
          <div className="folow-icons">
                 <a href="https://www.facebook.com/dali.hlal.9/">
                 <FaFacebook className="home-icon"/>
                 </a>
                <a href="https://github.com/dali-helal">
                <FaGithub className="home-icon"/>
                </a>
           
                <a href="https://www.linkedin.com/in/mohamed-ali-helal-a00586236/">
                <FaLinkedin  className="home-icon"/>
                </a>
               
            </div>
         </div>
      <img className="mobile2-img" src={Image4} alt="" />
      <a href="#home">
        <div className="scroll">
          <FaAngleUp color="white" />
        </div>
      </a>
      </section>
    )
  
    
  }
  export default Home