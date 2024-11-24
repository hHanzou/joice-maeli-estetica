// app/page.js ou onde você deseja usar o carrossel
import AboutMe from "./components/sections/AboutMe";
import { TextoBeneficios } from "./components/sections/TextoBeneficios";
import { metadata } from "./metadata";

export { metadata };

export default function Home() {
  return (
    <div className="flex flex-col gap-28 justify-center items-center sm:items-start">
      <div className="flex justify-center items-center w-full py-9">
        <AboutMe />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center w-full pb-6 mb-10">
        <TextoBeneficios />
      </div>
      {/* <div className="flex flex-col gap-4 bg-p items-center justify-center w-full pb-6 mb-10">
        <HomeCarousel />
      </div> */}
    </div>
  );
}
