import React from "react";

const About = () => (
  <section id="about" className="relative overflow-hidden bg-black text-white-100">
    <div className="about-layout mb-20 pt-5 flex flex-col md:flex-row items-center justify-center min-h-[60vh] gap-10 md:gap-20 px-5 md:px-20 py-16">
      {/* LEFT: About Content */}
      <div className="max-w-xl flex-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-lg md:text-xl text-white-50 leading-relaxed">
            I’m Sai Manideep, a 20-year-old Computer Science student and full-stack developer with a growing passion for AI and how it's reshaping the future. I'm driven by the challenge of building digital experiences that are not just functional, but feel intuitive and purposeful. I spend my free time reading self-development books to stay sharp, and I work out to stay grounded. I also enjoy contemplating the wonders of the universe because space has a way of putting everything in perspective. For me, progress is about consistency over hype—showing up, staying curious, and improving quietly, every single day.

        </p>
      </div>
      {/* RIGHT: 3D Visual or Image Placeholder */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/images/profile2.jpg"
          alt="About Me"
          className="w-100 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default About;