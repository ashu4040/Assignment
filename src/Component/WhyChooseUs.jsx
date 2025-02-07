import { useApi } from "../Constant/Store";

const WhyChooseUs = () => {
  const { data } = useApi();

  return (
    <div className="w-screen h-auto mb-3">
      <div className="WhyChooseUs px-4 sm:px-8 md:px-14 pb-10 mt-10 flex flex-col md:flex-row items-center justify-start gap-5">
        <h2 className="bg-[#BCD1FE] font-medium rounded-lg px-3 py-2 text-4xl sm:text-5xl md:text-6xl text-center font-[china]">
          {data?.Why_Choose_Us?.Title}
        </h2>

        <p className="w-full md:w-[50%] text-base sm:text-lg font-normal">
          {data?.Why_Choose_Us?.Description}
        </p>
      </div>

      <div className="w-screen h-auto flex flex-col lg:flex-row">
        <div className="description px-4 sm:px-8 md:px-14 py-7 w-full lg:w-[50%]">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-medium mb-2 overflow-hidden">
              Expertise and Experience
            </h2>
            <p className="text-sm sm:text-lg ">
              At TechSolutions, we bring years of industry experience and a team
              of highly skilled professionals to the table. Our expertise spans
              across web development, mobile app development, cloud solutions,
              and cybersecurity, ensuring that we deliver top-notch solutions
              tailored to your business needs. With a proven track record of
              successful projects, we have the knowledge and skills to tackle
              even the most complex challenges.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-medium mb-2 overflow-hidden">
              Innovative and Future-Ready Solutions
            </h2>
            <p className="text-sm sm:text-lg ">
              We pride ourselves on staying ahead of the curve by leveraging the
              latest technologies and trends. Whether it’s adopting cutting-edge
              tools or implementing scalable solutions, we ensure your business
              is equipped to thrive in a rapidly evolving digital landscape. Our
              innovative approach guarantees that your systems are not only
              efficient today but also future-proofed for tomorrow.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-medium mb-2 overflow-hidden">
              Customer-Centric Approach
            </h2>
            <p className="text-sm sm:text-lg ">
              Your success is our priority. We take the time to understand your
              unique goals and challenges, working closely with you to deliver
              solutions that align with your vision. Our commitment to
              exceptional customer service ensures a seamless experience from
              start to finish, making us a trusted partner for businesses
              looking to grow and succeed.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-[50%] p-4 sm:p-8 md:p-14 pt-0">
          <img
            src={data?.Why_Choose_Us?.Img}
            className="w-full  lg:w-[70%] h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
