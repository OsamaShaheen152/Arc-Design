import HeroImg from "../assets/hero.svg";
function Hero() {
  return (
    <div className="mx-auto mt-6 flex w-[90%] flex-col items-center justify-between gap-8 border-b-2 py-4 md:flex-row md:items-center md:justify-around">
      <h1 className="text-center text-xl font-bold lg:w-[550px] lg:text-3xl">
        Creative and detail-oriented architect engineer with expertise in
        designing innovative, sustainable structures. Proficient in CAD
        software, structural analysis, and project management.
      </h1>
      <div className="w-[350px] md:w-[450px]">
        <img
          loading="lazy"
          src={HeroImg}
          alt=""
          className="w-[100%] object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
