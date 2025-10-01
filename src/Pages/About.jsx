import React from "react";

const About = () => {
  return (
    <div className=" px-4 xl:px-20 flex flex-col-reverse lg:flex-row lg:text-center items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="lg:text-4xl lg:w-2/3 lg:p-10  ">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
          About Us
        </h1>
        <p className="text-left mt-10 md:text-5xl xl:p-20 2xl:p-30 ">
          At Plant Tree, we believe that planting a tree is more than just
          adding greenery—it’s planting hope for a better tomorrow. <br />{" "}
          <br /> Our goal is to make it easy for everyone to bring nature closer
          to their lives, whether it’s through fruit trees, shade trees, or
          decorative plants for your home and garden. Every tree we provide is
          carefully nurtured to ensure healthy growth and long-lasting beauty.{" "}
          <br /> <br /> <br />
          When you choose Plant Tree, you’re not just buying a tree—you’re
          joining a movement for a greener, healthier, and more sustainable
          planet. <br />
          <br />
          🌱 Let’s grow together, one tree at a time.
        </p>
      </div>
      <div>
        <img className="rounded-2xl" src="./p.png" alt="" />
      </div>
    </div>
  );
};

export default About;
