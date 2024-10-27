// app/page.js ou onde você deseja usar o carrossel
import AboutMe from "./components/sections/AboutMe";
import HomeCarousel from "./components/sections/HomeCarousel";
import { metadata } from "./metadata";

export { metadata };

export default function Home() {
  return (
    <main className="flex flex-col gap-28 w-[60%] justify-center items-center sm:items-start">
      <div>
        <HomeCarousel />
      </div>
      <AboutMe />
    </main>
  );
}
