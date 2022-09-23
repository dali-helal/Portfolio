import "../styles/contact.scss"
import Image from "../images/contact.png"
import { useRef } from "react"
import emailjs from '@emailjs/browser';
import { FaTimes, FaCheck } from "react-icons/fa"
const Contact = () => {
    const handleMessage = () => {
        document.querySelector('.user-message').classList.toggle('displayMessage')
        setTimeout(()=>{
            document.querySelector('.user-message').classList.toggle('displayNone')
        },6000)
    }
    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mopfcbr', 'template_xs37mfi', form.current, 'ySoKDTrULbatQraxc')
          .then((result) => {
              console.log(result.text);
              handleMessage()
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <section className="contact" id="contact" >
            <h1>{"<Section id='Contact'/>"}</h1>
            <div className="user-message">
                <div className="check">
                    <FaCheck color="white" />
                </div>
                <p>  Email has been sent successfully</p>
            </div>
            <div className="container-contact">
                <form ref={form} onSubmit={sendEmail} autoComplete="off"> 
                    <input
                        placeholder="Enter email"
                        type="email"
                        name="user-email"
                        required
                    
                    />
                    <input
                        placeholder="Enter subject"
                        type="text" 
                        name="subject"
                        required
                    />
                   <textarea
                        placeholder="Enter message"
                        name="message"
                        required
                        rows={6}
                    />
                <button type="submit">Send Message</button>
                </form>
                <div className="contact-img" >
                <img src={Image}  alt="" />
            </div>
            </div>
            
        </section>
    );
}

export default Contact;
