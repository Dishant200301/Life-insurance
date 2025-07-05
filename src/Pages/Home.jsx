import Carousel from "../Components/Carousel";
import Features from "../Components/Features";
import About from "../Components/About";
import Service from "../Components/Service";
import FAQs from "../Components/FAQs";
import Blog from "../Components/Blog";
import Team from "../Components/Team";
import Testimonial from "../Components/Testimonial";

export default function Home() {
  return (
    <>
      <Carousel />
      <Features />
      <About />
      <Service />
      <FAQs />
      <Blog />
      <Team />
      <Testimonial />
    </>
  );
}
