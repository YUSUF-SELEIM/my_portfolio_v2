"use client";
import { SparklesCore } from "./ui/sparkles";
import { TypewriterEffectSmooth } from "./ui/type-writer-effect";

export function Main() {
  const title = [
    {
      text: "Frontend",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="h-[90vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md" id="me">
      <div className="w-full h-full relative">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1000}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className=" inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div
        className="absolute mb-24 flex items-center justify-center space-x-6 cursor-pointer"
      >
        <h1
          className="md:text-8xl text-4xl font-bold cursor-pointer text-white"
        >
          Yusuf Abdelfattah
        </h1>
        <TypewriterEffectSmooth
          words={title}
          className="absolute md:mt-60 mt-32"
        ></TypewriterEffectSmooth>
      </div>
      <div className="absolute  top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute  top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
    </div>
  );
}
