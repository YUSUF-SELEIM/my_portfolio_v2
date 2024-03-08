import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import messageApp from "/public/images/messageApp.png";
import shoppingCart from "/public/images/shoppingCart.png";
import resumeBuilder from "/public/images/resumeBuilder.png";
import dental from "/public/images/dental.png";


import { TypewriterEffectSmooth } from "./ui/type-writer-effect";

export default function Projects() {
  return (
    <div className="md:pt-24 pt-5 px-5 h-full " id="projects" >
      <TypewriterEffectSmooth
        words={[{ text: "Projects" }]}
        className="text-3xl pb-0 my-4 px-4"
      ></TypewriterEffectSmooth>
      <div className="md:h-[150vh] h-[200vh] grid md:grid-cols-2 grid-cols-1 px-6">
        <CardContainer className="inter-var h-2 w-[30rem]">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Mini Messaging Board
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              <span className="font-bold">Built With: </span>
              ExpressJs, MongoDB, NextJS, NextUI, Aceternity, TypeScript,
              TailwindCSS, API, Vercel
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={messageApp}
                height="700"
                width="1000"
                className="md:h-60 h-32 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-2">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <a href="https://mini-message-board-gwwi.vercel.app/"> Try now →</a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var h-2 w-[30rem]">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Garments Shopping Cart
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              <span className="font-bold">Built With: </span>
              ReactJs, Tailwind, DasiyUI, React Router, TanStack Query , Axios,
              FakeStore API
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={shoppingCart}
                height="700"
                width="1000"
                className="md:h-60 h-32 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-2">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <a href="https://comfy-pasca-2a0446.netlify.app/"> Try now →</a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var h-2 w-[30rem]">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Resume Builder
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              <span className="font-bold">Built With: </span>
              ReactJs, TailwindCSS, Flowbite-React
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={resumeBuilder}
                height="700"
                width="1000"
                className="md:h-60 h-32 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-2">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <a href="https://main--jazzy-pudding-22099f.netlify.app/#"> Try now →</a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var h-2 w-[30rem]">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Dental Clinic Management Website
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              <span className="font-bold">Built With: </span>
              HTML, Tailwind CSS, Flowbite, JavaScript, PHP, MySQL
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={dental}
                height="700"
                width="1000"
                className="md:h-60 h-32 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-2">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <a href="https://www.youtube.com/watch?v=L_kMThC4OmY"> Try now →</a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
