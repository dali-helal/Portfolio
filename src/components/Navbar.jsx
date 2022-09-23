const Navbar = () => {
  const handleClick=()=>{
    document.querySelector(".mobile-nav").classList.toggle("open")
    document.querySelector(".bars").classList.toggle("clicked");
    document.querySelector(".blur-screen").classList.toggle("change");
   }
  return (
    <section>
      <nav>
        <div className="portfolio-name">
          <h2>Dali <span>Ben Helal</span></h2>
        </div>
        <div className="desktop-nav">

          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>
        <div className="mobile-nav">

          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>
        <div className="bars" onClick={handleClick} >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="blur-screen"></div>
      </nav>
    </section>
  )


}
export default Navbar