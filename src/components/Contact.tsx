import { TypewriterEffectSmooth } from "./ui/type-writer-effect";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFileDownload } from 'react-icons/fa';


export default function Contact() {
    return (
        <div className="h-screen md:pt-24 pt-5 " id="contact">
            <TypewriterEffectSmooth
                words={[{ text: "Contact" }]}
                className="text-3xl pb-0 my-4 px-4"
            ></TypewriterEffectSmooth>
            <div className="px-6 py-8 flex flex-col">
                <h1 className="md:text-7xl text-3xl font-extrabold text-white">WANT TO GET IN TOUCH?</h1>
                <p className="md:text-5xl text-xl font-light text-gray-400"><a href="mailto:YUSUFABDElFATTAH207@GMAIL.COM">YUSUFABDElFATTAH207@GMAIL.COM</a></p>
            </div>

            <div className="w-full flex px-6 py-8 justify-end">
                <div className="flex flex-col space-y-3">
                    <p className="text-2xl"><div className="flex space-x-2 items-center">
                        <FaGithub />
                        <a className="hover:text-blue-500"
                            href="https://github.com/YUSUF-SELEIM">Github</a>
                    </div>
                    </p>
                    <p className="text-2xl">
                    <div className="flex space-x-2 items-center">
                        <FaLinkedin />
                        <a className="hover:text-blue-500"
                            href="https://www.linkedin.com/in/yusuf-abdelfattah-shawky/">LinkedIn</a>
                    </div>
                    </p>
                    <p className="text-2xl">
                    <div className="flex space-x-2 items-center">
                        <FaFileDownload />
                        <a
                        href="https://flowcv.com/resume/vkvq6n0r9o"
                        className="hover:text-blue-500"
                        target="_blank"
                    >
                        Download CV
                    </a>
                    </div>
                    </p>
                   
                </div>
            </div>
        </div>
    )
}