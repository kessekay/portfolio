import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import {
  TbArrowUpRight,
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTumblr,
  TbLine,
  TbLineDashed,
  TbMessageForward,
} from "react-icons/tb";

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <div className="h-screen bg-gray-100 max-lg:h-auto">
        <Container>
          <div className="">
            {/* Header */}
            <div className="sticky top-0 bg-slate-100 flex items-center justify-between py-4">
              <Link href="#top" className="flex items-center gap-2">
                <TbBrandTumblr className="border-2 border-gray-500 text-yellow-600 rounded-full h-[35px] w-[35px] p-[6px]" />
                <span className="font-medium">Portfolio</span>
              </Link>
              <nav className="flex gap-4 font-medium text-[14px]">
                <Link
                  href="#about"
                  className="hover:text-yellow-500 transition-all duration-500 ease-out"
                >
                  About
                </Link>
                <Link
                  href="#portfolio"
                  className="hover:text-yellow-500 transition-all duration-500 ease-out"
                >
                  Portfolio
                </Link>
                <Link
                  href="#services"
                  className="hover:text-yellow-500 transition-all duration-500 ease-out"
                >
                  Services
                </Link>
                <Link
                  href="#testimonials"
                  className="hover:text-yellow-500 transition-all duration-500 ease-out"
                >
                  Testimonials
                </Link>
              </nav>
            </div>

            <div className="grid grid-cols-2 h-[80%] max-lg:grid-cols-1 max-lg:h-auto">
              <div className="flex flex-col gap-32 h-full pr-4 max-lg:h-auto">
                <div className="grid gap-12 pt-28">
                  <div className="text-7xl font-semibold">
                    <h1>We have Design Experience</h1>
                  </div>
                  <div className="flex gap-2 items-start">
                    <TbLineDashed className="text-violet-600 text-2xl" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      <br />
                      magna aliqua. quam lacus suspendisse faucibus.
                    </p>
                  </div>
                  <div className="flex">
                    <button className="flex items-center gap-2 p-3 bg-violet-600 rounded-2xl text-white">
                      Lets Chat
                      <TbMessageForward />
                    </button>
                    <button className="flex items-center gap-2 p-3 bg-transparent rounded-2xl">
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

      {/* Portfolio Section */}
      <div className="h-screen bg-yellow-500">
        <Container>
          <div className="py-32">
            <div>Latest Projects</div>
            <div>
              <div>
                <div></div>
                <div></div>
              </div>
              
            </div>
          </div>
        </Container>
      </div>
      <div className="h-screen bg-gray-100">
        <Container>
          <div></div>
        </Container>
      </div>
      <div className="h-screen bg-yellow-500">
        <Container>
          <div></div>
        </Container>
      </div>
    </main>
  );
}
