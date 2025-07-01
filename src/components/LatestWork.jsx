import latestWorkImg from "./../assets/latestWorks.svg";
function LatestWork() {
  return (
    <div className="my-28">
      <h2 className="mb-16 text-center text-3xl font-semibold sm:text-4xl sm:font-bold">
        My latest Work
      </h2>
      <div className="mx-auto flex w-[90%] flex-col flex-wrap items-center justify-between gap-8 px-5 md:flex-row md:items-center md:justify-around md:gap-6">
        <div className="flex h-96 flex-col justify-between">
          <div className="w-80">
            <img src={latestWorkImg} alt="" className="w-full object-contain" />
          </div>

          <span className="text-xl font-semibold">Purple Haze</span>
          <span className="text-xl font-semibold">Jimi Hendrix</span>
        </div>
        <div className="flex h-96 flex-col justify-between">
          <div className="w-80">
            <img src={latestWorkImg} alt="" className="w-full object-contain" />
          </div>

          <span className="text-xl font-semibold">Purple Haze</span>
          <span className="text-xl font-semibold">Jimi Hendrix</span>
        </div>
        <div className="flex h-96 flex-col justify-between">
          <div className="w-80">
            <img src={latestWorkImg} alt="" className="w-full object-contain" />
          </div>

          <span className="text-xl font-semibold">Purple Haze</span>
          <span className="text-xl font-semibold">Jimi Hendrix</span>
        </div>
        <div className="flex h-96 flex-col justify-between">
          <div className="w-80">
            <img src={latestWorkImg} alt="" className="w-full object-contain" />
          </div>

          <span className="text-xl font-semibold">Purple Haze</span>
          <span className="text-xl font-semibold">Jimi Hendrix</span>
        </div>
        <div className="flex h-96 flex-col justify-between">
          <div className="w-80">
            <img src={latestWorkImg} alt="" className="w-full object-contain" />
          </div>

          <span className="text-xl font-semibold">Purple Haze</span>
          <span className="text-xl font-semibold">Jimi Hendrix</span>
        </div>
        <div className="flex h-96 flex-col justify-between">
          <div className="w-80">
            <img src={latestWorkImg} alt="" className="w-full object-contain" />
          </div>

          <span className="text-xl font-semibold">Purple Haze</span>
          <span className="text-xl font-semibold">Jimi Hendrix</span>
        </div>
      </div>
    </div>
  );
}

export default LatestWork;
