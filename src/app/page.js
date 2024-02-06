import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import {
  BiLogoPostgresql,
  BiLogoWordpress,
  BiMenu,
  BiMessage,
  BiMessageAlt,
  BiPhone,
} from "react-icons/bi";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { SiApache, SiNginx, SiPostman } from "react-icons/si";
import {
  TbArrowUpRight,
  TbBrandAws,
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLaravel,
  TbBrandLinkedin,
  TbBrandMysql,
  TbBrandTumblr,
  TbLine,
  TbLineDashed,
  TbMessageForward,
} from "react-icons/tb";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="h-auto bg-gray-100 xl:h-screen" id="about">
        <Container>
          <div className="">
            {/* Header */}
            <div className="fixed right-0 left-0 bg-slate-100">
              <Container>
                <div className="flex items-center justify-between py-4">
                  <Link href="#top" className="flex items-center gap-2">
                    <TbBrandTumblr className="border-2 border-gray-500 text-yellow-600 rounded-full h-[35px] w-[35px] p-[6px]" />
                    <span className="font-medium">Portfolio</span>
                  </Link>
                  <nav className="flex gap-4 font-medium text-[14px] max-lg:hidden">
                    <Link
                      href="#about"
                      className="hover:text-yellow-500 transition-all duration-500 ease-out"
                    >
                      About
                    </Link>
                    <Link
                      href="#experience"
                      className="hover:text-yellow-500 transition-all duration-500 ease-out"
                    >
                      Experience
                    </Link>
                    <Link
                      href="#portfolio"
                      className="hover:text-yellow-500 transition-all duration-500 ease-out"
                    >
                      Portfolio
                    </Link>
                    <Link
                      href="#contact"
                      className="hover:text-yellow-500 transition-all duration-500 ease-out"
                    >
                      Contact
                    </Link>
                  </nav>
                  <div className=" text-2xl lg:hidden">
                    <BiMenu className="" />
                  </div>
                </div>
              </Container>
            </div>

            <div className="grid grid-cols-1 h-auto pt-40 lg:grid-cols-2 xl:">
              <div className="flex flex-col gap-32 h-full pr-4 max-lg:h-auto">
                <div className="grid gap-12">
                  <div className="text-5xl font-bold md:text-6xl xl:text-7xl ">
                    <h1>We have Design Experience</h1>
                  </div>
                  <div className="flex gap-2 items-start">
                    <TbLineDashed className="text-violet-600 text-2xl" />
                    <p className="font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      <br />
                      magna aliqua. quam lacus suspendisse faucibus.
                    </p>
                  </div>
                  <div className="flex">
                    <button className="flex items-center gap-2 px-4 py-3 bg-violet-600 rounded-2xl font-medium text-white">
                      Lets Chat
                      <TbMessageForward />
                    </button>
                    <button className="flex items-center gap-2 px-4 yp-3 bg-transparent rounded-2xl font-medium">
                      Portfolio
                      <TbArrowUpRight />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span>My Socials</span>
                  <span className="flex gap-2">
                    <TbBrandInstagram className="h-[35px] w-[35px] p-[6px] rounded-full bg-gray-200" />
                    <TbBrandGithub className="h-[35px] w-[35px] p-[6px] rounded-full bg-gray-200" />
                    <TbBrandLinkedin className="h-[35px] w-[35px] p-[6px] rounded-full bg-gray-200" />
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center object-cover max-lg:h-auto">
                <Image src="/pic1.webp" alt="" height={800} width={800} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Skills Section */}
      <div className="h-screen bg-yellow-500 max-lg:h-auto" id="experience">
        <Container>
          <div className="py-32">
            <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
              <div>
                <h2 className="text-5xl font-semibold mb-8 xl:text-6xl">
                  Skills &<br /> Experience
                </h2>
                <div className="flex gap-4 mb-16">
                  <TbLineDashed />
                  <p>
                    Semper feugiat nibh sed pulvinar. Pharetra massa
                    <br /> massa ultricies mi quis. Eget mi proin sed libero
                    enim
                    <br /> sed faucibus turpis ultricies mi quis.
                  </p>
                </div>
                <div className="">
                  <h3 className="text-2xl font-semibold mb-6">Skills</h3>
                  <div className="grid grid-cols-4 gap-10 mb-8 max-md:grid-cols-2">
                    <div>
                      <TbBrandLaravel className="text-4xl h-[50px] w-[50px] text-white rounded-full p-3 bg-black mb-2" />
                      <p className="font-medium">Laravel</p>
                    </div>
                    <div>
                      <TbBrandMysql className="text-4xl h-[50px] w-[50px] text-white rounded-full p-3 bg-black mb-2" />
                      <p className="font-medium">Mysql</p>
                    </div>
                    <div>
                      <BiLogoPostgresql className="text-4xl h-[50px] w-[50px] text-white rounded-full p-3 bg-black mb-2" />
                      <p className="font-medium">POSTGRESQL</p>
                    </div>
                    <div>
                      <TbBrandAws className="text-4xl h-[50px] w-[50px] text-white rounded-full p-3 bg-black mb-2" />
                      <p className="font-medium">Cloud(AWS)</p>
                    </div>
                    <div>
                      <SiApache className="text-4xl h-[50px] w-[50px] text-white rounded-full p-3 bg-black mb-2" />
                      <p className="font-medium">Apache2</p>
                    </div>
                    <div>
                      <SiNginx className="text-4xl h-[50px] w-[50px] text-white rounded-full p-3 bg-black mb-2" />
                      <p className="font-medium">Nginx</p>
                    </div>
                    <div>
                      <SiPostman className="text-4xl h-[50px] w-[50px] text-white rounded-full p-3 bg-black mb-2" />
                      <p className="font-medium">Postman</p>
                    </div>
                    <div>
                      <BiLogoWordpress className="text-4xl h-[50px] w-[50px] text-white rounded-full p-3 bg-black mb-2" />
                      <p className="font-medium">Wordpress</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="pb-8">
                  <h2 className="text-2xl font-semibold ">Experience</h2>
                </div>
                <div className="flex items-start gap-8 py-4 border-t-2  border-black">
                  <p className="text-sm font-medium">2023 - Present</p>
                  <div>
                    <p className="text-base font-semibold mb-2">
                      USSD Developer
                    </p>
                    <p className="text-xs font-medium">Google</p>
                  </div>
                </div>
                <div className="flex items-start gap-8 py-4 border-t-2 border-black">
                  <p className="text-sm font-medium">2023 - Present</p>
                  <div>
                    <p className="text-base font-semibold mb-2">
                      USSD Developer
                    </p>
                    <p className="text-xs font-medium">Google</p>
                  </div>
                </div>
                <div className="flex items-start gap-8 py-4 border-t-2 border-black">
                  <p className="text-sm font-medium">2023 - Present</p>
                  <div>
                    <p className="text-base font-semibold mb-2">
                      USSD Developer
                    </p>
                    <p className="text-xs font-medium">Google</p>
                  </div>
                </div>
                <div className="flex items-start gap-8 py-4 border-t-2 border-black">
                  <p className="text-sm font-medium">2023 - Present</p>
                  <div>
                    <p className="text-base font-semibold mb-2">
                      USSD Developer
                    </p>
                    <p className="text-xs font-medium">Google</p>
                  </div>
                </div>
                <div className="pt-8">
                  <h2 className="text-2xl font-semibold ">Certifications</h2>
                </div>
                <div className="flex items-start gap-8 py-4 border-t-2 border-black">
                  <p className="text-sm font-medium">2023</p>
                  <div>
                    <p className="text-base font-semibold mb-2">
                      Google Data Analytics
                    </p>
                    <p className="text-xs font-medium">Google</p>
                  </div>
                </div>
                <div className="flex items-start gap-8 py-4 border-t-2 border-black">
                  <p className="text-sm font-medium">2022</p>
                  <div>
                    <p className="text-base font-semibold mb-2">
                      AWS Cloud Practitioner
                    </p>
                    <p className="text-xs font-medium">Amazon Course</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Portfolio Section */}
      <div className="h-screen bg-gray-100 max-lg:h-auto" id="portfolio">
        <Container>
          <div className="py-32">
            <h2 className="text-5xl font-semibold mb-8 xl:text-6xl">Latest Projects</h2>
            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
              <div className="">
                <div className="flex items-center justify-between py-4 border-t border-black">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      USSD Development
                    </h3>
                    <p className="">In ornare quam viverra orci.</p>
                  </div>
                  <Link href="/">
                    <TbArrowUpRight className="h-[35px] w-[35px] bg-violet-600 text-white text-xs p-1 rounded-full" />
                  </Link>
                </div>
                <div className="w-full h-full bg-slate-200 flex items-center justify-center object-cover max-lg:h-auto">
                  <Image src="/ussd.png" alt="" width={300} height={300} />
                </div>
              </div>
              <div className="">
                <div className="flex items-center justify-between py-4 border-t border-black">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Backend Development
                    </h3>
                    <p className="">In ornare quam viverra orci.</p>
                  </div>
                  <Link href="/">
                    <TbArrowUpRight className="h-[35px] w-[35px] bg-violet-600 text-white text-xs p-1 rounded-full" />
                  </Link>
                </div>
                <div className="w-full h-full bg-violet-200 flex items-center justify-center object-cover max-lg:h-auto">
                  <Image src="/backend.png" alt="" width={500} height={500} />
                </div>
              </div>
              <div className="">
                <div className="flex items-center justify-between py-4 border-t border-black">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Cloud Services
                    </h3>
                    <p className="">In ornare quam viverra orci.</p>
                  </div>
                  <Link href="/">
                    <TbArrowUpRight className="h-[35px] w-[35px] bg-violet-600 text-white text-xs p-1 rounded-full" />
                  </Link>
                </div>
                <div className="w-full h-full bg-gray-200 flex items-center justify-center object-cover max-lg:h-auto">
                  <Image src="/cloud.png" alt="" width={300} height={350} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Contact Section */}
      <div className="h-auto bg-yellow-500 xl:h-screen" id="contact">
        <Container>
          <div className="flex flex-col justify-between h-screen pt-32">
            <div className="grid grid-cols-2 gap-4 h-[80%] max-lg:grid-cols-1">
              <div>
                <h2 className="text-6xl font-semibold mb-12">
                  Lets Discuss
                  <br />
                  Your Project
                </h2>
                <div>
                  <div className="flex items-start gap-8 py-8 border-t-2 border-black">
                    <div className="">
                      <FaEnvelope className="h-[45px] w-[45px] p-3 bg-white rounded-full text-xs" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Email</p>
                      <p className="text-base font-semibold mb-2">
                        quaysontitus@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-8 py-8 border-t-2 border-black">
                    <div className="">
                      <FaPhone className="h-[45px] w-[45px] p-3 bg-white rounded-full text-xs" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Phone</p>
                      <p className="text-base font-semibold mb-2">
                        +233 543 611 072
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full border rounded-full border-black"></div>
            </div>
            <div className="flex justify-between text-xs font-medium pb-12 pt-4 border-t-2 border-black">
              <span>© 2024 All Right Reserved</span>
              <span>Design by ...........</span>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
