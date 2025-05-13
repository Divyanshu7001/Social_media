import { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";

const Loader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hourglassDimension, setHourglassDimension] = useState({
    height: "60%",
    width: "80%",
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 300 && windowWidth < 540) {
      setHourglassDimension({
        height: "80%",
        width: "80%",
      });
    } else {
      setHourglassDimension({
        height: "60%",
        width: "80%",
      });
    }
  }, [windowWidth]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-md">
      <div className="xss:w-44 xss:h-36 md:w-52 md:h-40 lg:w-60 lg:h-52 flex flex-col space-y-3 items-center">
        <Hourglass
          visible={true}
          height={hourglassDimension.height}
          width={hourglassDimension.width}
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#0000ff", "#00c3ff"]}
        />
        <h1 className="text-[#0000ff] text-center w-full xss:text-2xl text-3xl font-serif font-semibold">
          Loading Data
        </h1>
      </div>
    </div>
  );
};

export default Loader;
