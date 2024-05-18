import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import membersOnly from "/public/images/membersOnly.png";
import messageApp from "/public/images/messageApp.png";
import shoppingCart from "/public/images/shoppingCart.png";
import resumeBuilder from "/public/images/resumeBuilder.png";
import githubPortfolio from "/public/images/myGithubProfile.png";
import dental from "/public/images/dental.png";
import { TypewriterEffectSmooth } from "./ui/type-writer-effect";

// Reusable ProjectCard Component
const ProjectCard = ({ title, technologies, imageSrc, link }: { title: string, technologies: string, imageSrc: any, link: string }) => (
  <CardContainer className="inter-var h-2 w-[30rem]">
    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
      <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
        {title}
      </CardItem>
      <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
        <span className="font-bold">Built With: </span>
        {technologies}
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src={imageSrc}
          height="700"
          width="1000"
          className="md:h-60 h-32 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt={`${title} thumbnail`}
        />
      </CardItem>
      <div className="flex justify-center items-center mt-2">
        <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
          <a href={link}>Try now →</a>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
);

export default function Projects() {
  const projects = [
    {
      title: "MembersOnly",
      technologies: "NextJS, NextUI, Aceternity, TypeScript, TailwindCSS, Socket.IO , ExpressJs, MongoDB",
      imageSrc: membersOnly,
      link: "https://members-only-eosin.vercel.app/",
    },
    {
      title: "Mini Messaging Board",
      technologies: "ExpressJs, MongoDB, NextJS, NextUI, Aceternity, TypeScript, TailwindCSS, API, Vercel",
      imageSrc: messageApp,
      link: "https://mini-message-board-gwwi.vercel.app/",
    },
    {
      title: "Garments Shopping Cart",
      technologies: "ReactJs, Tailwind, DasiyUI, React Router, TanStack Query, Axios, FakeStore API",
      imageSrc: shoppingCart,
      link: "https://comfy-pasca-2a0446.netlify.app/",
    },
    {
      title: "Resume Builder",
      technologies: "ReactJs, TailwindCSS, Flowbite-React",
      imageSrc: resumeBuilder,
      link: "https://main--jazzy-pudding-22099f.netlify.app/",
    },
    {
      title: "Dental Clinic Management Website",
      technologies: "HTML, Tailwind CSS, Flowbite, JavaScript, PHP, MySQL",
      imageSrc: dental,
      link: "https://www.youtube.com/watch?v=L_kMThC4OmY",
    },
    {
      title: "My Github Profile",
      technologies: "🐝",
      imageSrc: githubPortfolio,
      link: "https://github.com/YUSUF-SELEIM",
    },
  ];

  return (
    <div className="md:pt-24 pt-5 px-5 h-full bg-black" id="projects">
      <TypewriterEffectSmooth
        words={[{ text: "Projects" }]}
        className="text-3xl pb-0 mt-4 px-4"
      />
      <div className="md:h-[220vh] h-[300vh] grid md:grid-cols-2 grid-cols-1 px-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            technologies={project.technologies}
            imageSrc={project.imageSrc}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
