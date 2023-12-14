import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="  flex justify-center ">
      <div className="  flex w-3/5 ">
        <div className="w-2/4 p-4 ">
          <h1 className=" font-bold text-3xl  ">Hey, I am  Bishal.</h1>
          <p className="text-md pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quod quia temporibus odit ea, voluptates ipsum veniam expedita,
            tempora fugit quam explicabo hic sunt, vero officia sequi illum
            eaque.
          </p>
        </div>
        <div className=" w-2/4 flex justify-center">
          <Image
            className=" text-center"
            src="/avatar.png"
            width={200}
            height={200}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
