import { useEffect } from "react";
import { Oswald } from "next/font/google";
("next/font/google");
import Navbar from "./navbar";
import Image from "next/image";
import ProfilePic from "../public/assets/pfp.jpg";
import Link from "next/link";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const oswald = Oswald({ subsets: ["latin"] });

const Hero = () => {
  useEffect(() => {
    typewriter();
  }, []);

  //typewriter
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

    var that = this;
    // var delta = 200 - Math.random() * 100;
    // Speed of typing animation
    var delta = 80;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  function typewriter() {
    var elements = document.getElementsByClassName("typewrite");

    for (const element of elements) {
      var toRotate = element.getAttribute("data-type");
      var period = element.getAttribute("data-period");
      if (toRotate) {
        new TxtType(element, JSON.parse(toRotate), period);
      }
    }
  }
  // End typewriter

  return (
    <div className="min-h-screen bg-[#111013] flex flex-col relative overflow-hidden">
      <Navbar />
      {/* Lg and above */}
      <div className="hidden text-white grow z-50 relative 2xl:px-48 px-24 lg:flex justify-between items-center">
        {/* Text */}
        <section className="flex flex-col justify-center">
          <h1
            className={`${oswald.className} 2xl:text-9xl text-7xl tracking-wider font-medium`}
          >
            Hello, I&#39;m
          </h1>
          <h1
            className={`${oswald.className} 2xl:text-9xl text-7xl 2xl:my-8 my-4 tracking-wider font-medium text-[#8264F4]`}
          >
            Nam Truong
          </h1>
          <p className="z-10 my-4">
            <span
              data-period="1500"
              className="typewrite typeBlink text-3xl 2xl:text-5xl"
              data-type='["SWE @ JPMorganChase", "B.S. in Computer Science", "Minor in Finance", "Ardent Explorer and Hiker", "Casual Volleyball Player", "Açaí Enthusiast", "Thanks for reading!"]'
            ></span>
          </p>
          <div
            id="socials"
            className="flex items-center space-x-6 2xl:text-5xl text-4xl text-white"
          >
            <Link
              href="https://github.com/nam-t24"
              target="_blank"
              rel="noreferrer"
              className="socialIcon"
            >
              <GitHubIcon fontSize="inherit" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/namtruongcs/"
              target="_blank"
              rel="noreferrer"
              className="socialIcon"
            >
              <LinkedInIcon fontSize="inherit" />
            </Link>
            <Link
              href="mailto:namtruong831@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="socialIcon"
            >
              <EmailIcon fontSize="inherit" />
            </Link>
          </div>
        </section>
        {/* Profile Image */}
        <div className="2xl:w-96 2xl:h-96 xl:w-72 xl:h-72 w-64 h-64 -translate-y-0 2xl:mr-32 xl:mr-24 mr-0 rounded-full border-2 border-white overflow-hidden">
          <Image
            src={ProfilePic}
            fill={true}
            alt="ProfilePic"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          ></Image>
        </div>
      </div>
      {/* Under Large */}
      <div className="lg:hidden grow flex flex-col justify-center items-center text-white relative z-10 sm:mt-0 mt-[-60px]">
        {/* Profile Image */}
        <div className="md:w-64 md:h-64 w-56 h-56 rounded-full relative border-2 border-white overflow-hidden">
          <Image
            src={ProfilePic}
            fill={true}
            alt="ProfilePic"
            priority={true}
            sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
          ></Image>
        </div>
        <h1 className="sm:text-6xl text-4xl font-semibold mt-8">Nam Truong</h1>
        <p className="z-10 my-4 text-center">
          <span
            data-period="1500"
            className="typewrite typeBlink sm:text-2xl text-lg"
            data-type='["SWE @ JPMorganChase", "B.S. in Computer Science", "Minor in Finance", "Ardent Explorer and Hiker", "Casual Volleyball Player", "Açaí Enthusiast", "Thanks for reading!"]'
          ></span>
        </p>
        <div
          id="socials"
          className="flex items-center space-x-6 text-3xl text-white"
        >
          <Link href="https://github.com/nam-t24" className="socialIcon">
            <GitHubIcon fontSize="inherit" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/namtruongcs/"
            className="socialIcon"
          >
            <LinkedInIcon fontSize="inherit" />
          </Link>
          <Link href="mailto:namtruong831@gmail.com" className="socialIcon">
            <EmailIcon fontSize="inherit" />
          </Link>
        </div>
      </div>
      {/* Underglow */}
      <div className="absolute heroGradient top-0 -translate-x-1/2 left-1/2 w-[250%] h-full z-0"></div>
    </div>
  );
};

export default Hero;
