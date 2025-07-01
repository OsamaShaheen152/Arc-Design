import mainWorkImg from "../assets/mainWorks.svg";
function MainWork() {
  return (
    <div className="mx-auto my-8 flex w-[90%] flex-col flex-wrap items-center justify-evenly gap-10 px-5 py-6 sm:flex-row sm:items-center sm:justify-evenly md:gap-4">
      <div className="flex h-[300px] w-60 flex-col items-center justify-evenly">
        <img src={mainWorkImg} alt="" />
        <h3 className="text-xl font-semibold">Product design</h3>
        <p className="ml-4">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
      </div>
      <div className="flex h-[300px] w-60 flex-col items-center justify-evenly">
        <img src={mainWorkImg} alt="" />
        <h3 className="text-xl font-semibold">Product design</h3>
        <p className="ml-4">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
      </div>
      <div className="flex h-[300px] w-60 flex-col items-center justify-evenly">
        <img src={mainWorkImg} alt="" />
        <h3 className="text-xl font-semibold">Product design</h3>
        <p className="ml-4">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
      </div>
    </div>
  );
}

export default MainWork;
