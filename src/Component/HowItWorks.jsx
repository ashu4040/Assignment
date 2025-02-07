import { useApi } from "../Constant/Store";

const HowItWorks = () => {
  const { data } = useApi();

  return (
    <div className="w-screen h-auto pt-12">
      <div className="text-center mb-12">
        <h2 className="bg-[#BCD1FE] font-medium rounded-lg px-3 py-2 text-4xl sm:text-5xl md:text-6xl text-center font-[china] inline-block">
          {data?.How_It_Works?.Title}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="w-full md:w-[40%]">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 overflow-hidden p-1">
              {data?.Step_1?.Title}
            </h3>
            <p className="text-lg  p-1">{data?.Step_1?.Description}</p>
          </div>
          <div className="w-full md:w-[50%]">
            <img
              src={data?.Step_1?.Img}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 mb-12">
          <div className="w-full md:w-[40%]">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 overflow-hidden p-1">
              {data?.Step_2?.Title}
            </h3>
            <p className="text-lg p-1">{data?.Step_2?.Description}</p>
          </div>
          <div className="w-full md:w-[50%]">
            <img
              src={data?.Step_2?.Img}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="w-full md:w-[40%]">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 overflow-hidden p-1">
              {data?.Step_3?.Title}
            </h3>
            <p className="text-lg  p-1">{data?.Step_3?.Description}</p>
          </div>
          <div className="w-full md:w-[50%]">
            <img
              src={data?.Step_3?.Img}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 mb-12">
          <div className="w-full md:w-[40%]">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 overflow-hidden p-1">
              {data?.Step_4?.Title}
            </h3>
            <p className="text-lg  p-1">{data?.Step_4?.Description}</p>
          </div>
          <div className="w-full md:w-[50%]">
            <img
              src={data?.Step_4?.Img}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
