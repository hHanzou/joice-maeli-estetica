// app/page.js ou onde você deseja usar o carrossel
import AboutMe from "./components/sections/AboutMe";
import { metadata } from "./metadata";
import { HomeCarousel } from "./components/sections/HomeCarousel";

export { metadata };

export default function Home() {
  return (
    <main className="flex flex-col w-[60%] justify-center items-center sm:items-start">
      <HomeCarousel />
      <AboutMe />
    </main>
  );
}
