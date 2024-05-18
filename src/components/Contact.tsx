import { TypewriterEffectSmooth } from "./ui/type-writer-effect";
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import LoveButton from "./LoveButton";
import { Vortex } from "./ui/vortex";

export default function Contact() {
  return (
<div className="h-screen md:pt-24 pt-5 bg-black" id="contact"> 
    <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex flex-col"
      >
          <TypewriterEffectSmooth
            words={[{ text: "Contact" }]}
            className="text-3xl pb-0 my-4 mt-10 px-4"
          />
          <div className="px-6 py-8 ">
            <h1 className="md:text-7xl text-3xl font-extrabold text-white">WANT TO GET IN TOUCH?</h1>
            <p className="md:text-5xl text-xs font-light text-gray-400">
              <a href="mailto:YUSUFABDElFATTAH207@GMAIL.COM" className="hover:text-blue-500">
                YUSUFABDElFATTAH207@GMAIL.COM
              </a>
            </p>
          </div>
          <div className="w-full flex justify-end py-8">
            <div className="flex flex-col space-y-6">
              <ContactLink
                icon={<FaGithub />}
                text="Github"
                href="https://github.com/YUSUF-SELEIM"
              />
              <ContactLink
                icon={<FaLinkedin />}
                text="LinkedIn"
                href="https://www.linkedin.com/in/yusuf-abdelfattah-shawky/"
              />
              <ContactLink
                icon={<FaFileDownload />}
                text="Download CV"
                href="https://www.overleaf.com/read/ggjzkxhgfgsf#f0cabe"
              />
              <div className="block md:hidden mx-auto px-2">
                <LoveButton />
              </div>
            </div>
          </div>
        </Vortex>
    </div>
  );
}

const ContactLink = ({ icon, text, href }: { icon: React.ReactNode, text: string, href: string }) => (
  <div className="flex items-center space-x-3 text-white">
    {icon}
    <a href={href} className="md:text-2xl hover:text-blue-500" target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </div>
);
