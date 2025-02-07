import React, { useEffect, useState } from "react";

const Services = () => {
  const [data, setData] = useState(""); // Changed state name and initialized with null

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://script.googleusercontent.com/macros/echo?user_content_key=PPFfUA-pEbnMIvnWn6-_dNh0xxlwixrsbDCiG0kuBtf_e1zHASfW6PRyjaZE0-b_QMhK4OnKEVvXLHBFRLxHFa4p_IK8qFNFm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnK3a6ffQ0WZQTSV9tYlXQrkBXtdxBtrA5zRLqCGQCLDX3Fpz3FiupYRsvf6gd_3HPpzwDVuA5vmK3aj4Vzza9cL29WBguNVO8Nz9Jw9Md8uu&lib=MzE5-sfm5hFPrnMdKGQXaFGthwKWac3M9"
      );
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-screen h-auto">
      <div className="Services px-4 sm:px-8 md:px-14 py-10 mt-10 flex flex-col md:flex-row items-center justify-start gap-5">
        <h2 className="bg-[#BCD1FE] font-medium rounded-lg px-3 py-2 text-4xl sm:text-5xl md:text-6xl text-center font-[china] ">
          {data?.Services?.Title}
        </h2>

        <p className="w-full md:w-[50%] text-base sm:text-lg font-medium">
          {data?.Services?.Description}
        </p>
      </div>

      <div className="con h-auto w-full px-4 sm:px-8 md:px-14 py-12 flex justify-center flex-wrap gap-6">
        <div className="elem h-auto w-full sm:w-[45%] md:w-[40%] lg:w-[40%] border-2 rounded-lg flex-shrink-0 p-5 md:mt-10">
          <h2 className="text-3xl sm:text-4xl overflow-hidden font-medium ">
            Web Development
          </h2>
          <p className="mt-3 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
            quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis minus eaque quo quam sit aperiam dicta hic sint. Cum,
            odit!
          </p>
          <button className="bg-black text-white rounded-lg font-medium px-5 py-3 mt-4">
            Click here
          </button>
        </div>

        {/* Card 2 */}
        <div className="elem h-auto w-full sm:w-[45%] md:w-[40%] lg:w-[40%] border-2 rounded-lg flex-shrink-0 p-5 mt-10">
          <h2 className="text-3xl sm:text-4xl overflow-hidden font-medium ">
            Mobile Development
          </h2>
          <p className="mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
            quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis minus eaque quo quam sit aperiam dicta hic sint. Cum,
            odit!
          </p>
          <button className="bg-black text-white rounded-lg font-medium px-5 py-3 mt-4">
            Click here
          </button>
        </div>

        {/* Card 3 */}
        <div className="elem h-auto w-full sm:w-[45%] md:w-[40%] lg:w-[40%] border-2 rounded-lg flex-shrink-0 p-5 mt-10">
          <h2 className="text-3xl sm:text-4xl overflow-hidden font-medium ">
            Cloud Services
          </h2>
          <p className="mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
            quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis minus eaque quo quam sit aperiam dicta hic sint. Cum,
            odit!
          </p>
          <button className="bg-black text-white rounded-lg font-medium px-5 py-3 mt-4">
            Click here
          </button>
        </div>

        {/* Card 4 */}
        <div className="elem h-auto w-full sm:w-[45%] md:w-[40%] lg:w-[40%] border-2 rounded-lg flex-shrink-0 p-5 mt-10">
          <h2 className="text-3xl sm:text-4xl overflow-hidden font-medium ">
            Cybersecurity
          </h2>
          <p className="mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
            quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis minus eaque quo quam sit aperiam dicta hic sint. Cum,
            odit!
          </p>
          <button className="bg-black text-white rounded-lg font-medium px-5 py-3 mt-4">
            Click here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
