import "../styles/projects.scss"
import image1 from "../images/project1.PNG"
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs,FaGithub,FaEye } from "react-icons/fa"
import {SiRedux } from "react-icons/si"
const Projects = () => {
    return (
        <section className="projects" id="projects" >
            <h1>{"<Section id='Projects'/>"}</h1>
            <div className="container-projects">
                <div className="project">
                    <img src={image1} alt="" />
                    <h3>Watch Store </h3>
                    <p>In this project I tried to build  E-commerce website
                        Watch Store  . I used the these technologies :</p>
                    <div className="technologie">
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
                            <SiRedux className="icons" color="#764ABC" />
                        </div>
                        <div>
                            <FaNodeJs className="icons" color="#4EB045" />
                        </div>
                    </div>
                    <div className="links">
                        <a href="https://github.com/dali-helal/watch-store"><FaGithub className="links-icons" color="#777777" /></a>
                        
                        <a href="https://watch-store-eight.vercel.app"><FaEye className="links-icons" color="#777777"/></a>
                        
                    </div>
                </div>
                
            
            </div>
        </section>
    );
}

export default Projects;
