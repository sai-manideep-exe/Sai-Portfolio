import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div >
      <h2 className="flex flex-row justify-start pt-8 text-5xl  ml-20 font-bold pl-5">Projects</h2>
    <div id="projects" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <a href="https://github.com/sai-manideep-exe/Vocanix" target="_blank"> 
            <div className="w-full">
              <img src="/images/vocanix.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Vocanix
              </h2>
              <p className="text-white-50 md:text-xl">
                A Full Stack AI Interview Application with feedbacks using Gemini AI
              </p>
            </div>
            </a>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project mb-2" ref={libraryRef}>
              <a href="https://github.com/sai-manideep-exe/interactive-stock-trends-analyzer" target="_blank">
              <div className="image-wrapper  bg-black">
                
                <img
                  src="/images/stockanalyzerLogo.png"
                  alt="Library Management Platform"
                />
          
              </div>
              <h2>Interactive Stock Trends Analyzer</h2>
                            <p className="text-white-50 pt-2 md:text-xl">
                Paste 3 links of stock articles and ask queries based on those articles
              </p>
              </a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <a href="https://github.com/sai-manideep-exe/Aurisync" target="_blank">
              <div className="image-wrapper bg-black">
                <img src="/images/aurisync.png" alt="YC Directory App" />
              </div>
              <h2>Aurisync</h2>
                            <p className="text-white-50 pt-2 md:text-xl">
                A Full Stack Chatting Application with real-time messaging and video calling
              </p>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AppShowcase;
