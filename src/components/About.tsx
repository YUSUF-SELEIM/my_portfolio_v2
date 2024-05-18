import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "./ui/type-writer-effect";
import { WavyBackground } from "./ui/wavy-background";


const testimonials = [
  {
    quote:
      "Prisma",
  },
  {
    quote:
      "NextJS",
  },
  {
    quote:
      "PassportJS",
  },
  {
    quote:
      "Web Sockets",
  },
  {
    quote:
      "TypeScript",
  },
  {
    quote:
      "ReactJS",
  },
  {
    quote:
      "NextJS",
  },
  {
    quote:
      "TailwindCSS",
  },
  {
    quote:
      "AceTrinity",
  },
  {
    quote:
      "NodeJS",
  },
  {
    quote:
      "ExpressJS",
  },
  {
    quote:
      "MongoDB",
  },
  {
    quote:
      "WebPack",
  },
  {
    quote:
      "Vite",
  },
  {
    quote:
      "Git",
  },
  {
    quote:
      "JavaScript",
  },
  {
    quote:
      "Vercel",
  },
];
export default function About() {
  return (
    <div className="md:h-screen md:pt-24 pt-5 flex flex-col space-y-5 bg-black" id="about">
      <div>
        <TypewriterEffectSmooth
          words={[{ text: "About" }]}
          className="text-3xl pb-0 my-4 px-4"
        ></TypewriterEffectSmooth>
        <div className="flex md:flex-row flex-col justify-center py-6">
          <p className="text-2xl px-4 font-light text-neutral-400">
            Hi, I&apos;m Yusuf, a passionate self-motivated web developer with a strong experience in building websites. <br />
            I&apos;m proficient with React, NextJS, Express.js, and MongoDB. <br />
            I&apos;ve used my creativity and problem-solving skills to design and implement websites for clients. <br /></p>
          <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              className=""
              items={testimonials}
              direction="right"
              speed="slow"
              pauseOnHover={false}
            />
          </div>
        </div>
      </div>
    <div className="hidden md:block">
        <WavyBackground className="max-w-xl mx-auto ">
        </WavyBackground>
    </div>
    </div>
  )
}