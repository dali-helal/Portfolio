import Image1 from "../images/skills.png"
import "../styles/skills.scss"
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs } from "react-icons/fa"
import { SiMongodb, SiRedux } from "react-icons/si"
const Skills = () => {
  return (
    <section className="skills" id="skills" >

      <h1>{"<Section id='Skills'/>"}</h1>
      <div className="container">
        <div className="container-img-skills">
          <img src={Image1} alt="" />
        </div>
        <div className="container-skills">
          <h3>Get to know me</h3>
          <p>My name is Dali Ben Helal and I’m a Frontend Developer from tunisia .
            I really love making responsive websites .
            Below are the technologies I’m most familiar
            with but I’m always open to learning new technologies.
          </p>
          <div className="container-icons" >
            <div>
              <FaHtml5 className="icons" color="#F0652A" />
            </div>
            <div>
              <FaCss3Alt className="icons" color="#1C88C7" />
            </div>
            <div>
              <FaJs className="icons" color="#F0DB4F" />
            </div>
            <div>
              <FaReact className="icons" color="#00CCFF" />
            </div>
            <div>
              <FaGitAlt className="icons" color="#F05033" />
            </div>
            <div>
              <FaNodeJs className="icons" color="#4EB045" />
            </div>
            <div>
              <SiMongodb className="icons" color="#409C39" />
            </div>
            <div>
              <SiRedux className="icons" color="#764ABC" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Skills;
