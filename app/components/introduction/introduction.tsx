import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="  flex justify-center ">
      <div className="  flex w-3/5 ">
        <div className="w-2/4 flex flex-col gap-2">
          <h1 className=" text-xl font-bold text-gray-500">Hy there!</h1>
          <p className=" text-3xl text-blue-900 font-extrabold">
        Bishal Thapa
          </p>
          <p className="text-md">
          I&apos;m a Frontend Developer based in Kathmandu,Nepal. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio labore impedit temporibus iure, reiciendis fugiat quas officia. Omnis, nobis expedita.
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
