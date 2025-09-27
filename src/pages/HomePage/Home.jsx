import HeroSection from "./HeroSection";
import Carousel from "./MovingCarousel/Carousel";
import StatRow from "./StatRow";
import Grid from "./Grid/Grid";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <StatRow />
      <Carousel />
      <Grid />
      <Footer />
    </div>
  );
}
