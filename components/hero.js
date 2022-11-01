import { useEffect } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import ProfilePic from "../public/assets/pfp.jpg"

const Hero = () =>{
    useEffect(()=>{
        typewriter()
    }, [])

    //typewriter
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span className="wrap">'+this.txt+'</span>';

        var that = this;
        // var delta = 200 - Math.random() * 100;
        // Speed of typing animation
        var delta = 80;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    function typewriter() {
        var elements = document.getElementsByClassName('typewrite');

        for(const element of elements){
            var toRotate = element.getAttribute('data-type');
            var period = element.getAttribute('data-period');
            if (toRotate) {
              new TxtType(element, JSON.parse(toRotate), period);
            }
        }
    }
    // End typewriter
    
    return(
        <div className="min-h-screen bg-[#111013] flex flex-col relative overflow-hidden">
            <Navbar/>
            {/* Lg and above */}
            <div className="hidden text-white grow z-50 relative px-24 lg:flex">
                {/* Profile Image */}
                <div className="2xl:w-96 2xl:h-96 xl:w-72 xl:h-72 w-64 h-64 absolute top-1/2 2xl:right-1/4 xl:right-[15%] right-[5%] -translate-y-1/2 rounded-full border-2 border-white overflow-hidden">
                    <Image src={ProfilePic} fill={true} alt="ProfilePic" priority={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    ></Image>
                </div>
                {/* Text */}
                <section className="flex flex-col justify-center">
                    <h1 className="2xl:text-9xl text-7xl 2xl:font-semibold font-bold">Nam Truong</h1>
                    <p className='z-10 my-4'>
                        <span
                            data-period="1500"
                            className="typewrite typeBlink text-3xl 2xl:text-4xl"
                            data-type='["Student at the University of Texas at Dallas", "B.S. in Computer Science", "Incoming SWE Intern @ J.P. Morgan","Ardent Explorer and Hiker","Casual Volleyball Player", "Açaí Enthusiast", "Thanks for reading!"]'
                        ></span>
                    </p>
                    <div id="socials" className = "socials text-4xl text-white">
                        <a
                            href="https://github.com/nam-t24"
                            target="_blank"
                            rel="noreferrer"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="nam-t24"
                            className = "socialIcon"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/namtruongcs/"
                            target="_blank"
                            rel="noreferrer"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="namtruongcs"
                            className = "socialIcon mx-6"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a 
                            href="mailto:namtruong831@gmail.com"
                            rel="noopener noreferrer"
                            target="_blank"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="namtruong831@gmail.com"
                            className = "socialIcon"
                        >
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </section>
            </div>
            {/* Under Large */}
            <div className="lg:hidden grow flex flex-col justify-center items-center text-white relative z-50 ">
                {/* Profile Image */}
                <div className="md:w-64 md:h-64 w-56 h-56 rounded-full relative border-2 border-white overflow-hidden">
                    <Image src={ProfilePic} fill={true} alt="ProfilePic" priority={true} sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    ></Image>
                </div>
                <h1 className="sm:text-6xl text-4xl font-semibold mt-8">
                    Nam Truong
                </h1>
                <p className='z-10 my-4 text-center'>
                    <span
                        data-period="1500"
                        className="typewrite typeBlink sm:text-2xl text-lg"
                        data-type='["Student at the University of Texas at Dallas", "B.S. in Computer Science", "Incoming SWE Intern @ J.P. Morgan","Ardent Explorer and Hiker","Casual Volleyball Player", "Açaí Enthusiast", "Thanks for reading!"]'
                    ></span>
                </p>
                 <div id="socials" className = "socials text-3xl text-white">
                    <a
                        href="https://github.com/nam-t24"
                        target="_blank"
                        rel="noreferrer"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="nam-t24"
                        className = "socialIcon"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/namtruongcs/"
                        target="_blank"
                        rel="noreferrer"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="namtruongcs"
                        className = "socialIcon mx-6"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a 
                        href="mailto:namtruong831@gmail.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="namtruong831@gmail.com"
                        className = "socialIcon"
                    >
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>

            </div>
            {/* Underglow */}
            <div className="absolute heroGradient top-0 -translate-x-1/2 left-1/2 w-[250%] h-full z-0"></div>


        </div>
    );

}

export default Hero;