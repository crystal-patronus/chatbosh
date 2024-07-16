"use client";

import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PageLayout from "@/app/ui/PageLayout";
import { AiOutlineInfoCircle } from "react-icons/ai";

type PricingData = {
  description: string;
  monthly_price: string;
  yearly_price: string;
  features: string[];
  purchase_link_month: string;
  purchase_link_year: string;
  purchase_link: string;
};

const planTitle = ['Stru Pro', 'Stru Platinum', 'Stru Enterprise'];

const PricingPage: React.FC = () => {
  const [pricingType, setPricingType] = useState<"Monthly" | "Annually">("Annually");
  const [data, setData] = useState<PricingData[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.stru.ai/v1/pricing");
        const result = await res.json();
        const DATA = Object.values(result);
        setData(DATA as PricingData[]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleGetStartedClick = (link: string) => {
    router.push(link);
  };

  return (
    <PageLayout>
      <main className="w-full flex flex-col items-center py-20">
        <div className="flex flex-col items-center">
          <h2 className="text-[#EFEFEF] text-center text-5xl sm:text-[80px] font-semibold">
              Build Faster. Pay Less.
          </h2>
          <p className="text-[#EFEFEF] text-lg xs:text-xl large-desktop:text-[32px] text-center font-semibold py-16">
              All Plains include a 14-day no-hassle money back guarantee.
          </p>
        </div>

        <div className="w-full flex items-start bg-[#292929] px-3 sm:px-8 py-6 space-x-5" style={{
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
          borderRadius: '12px'
        }}>
          <div className="hidden sm:block text-white text-xl rounded-full select-none">
            <AiOutlineInfoCircle />
          </div>
          <div>
            <h3 className="text-white font-semibold grow-0">
              Stru is currently in beta.
            </h3>
            <p className="text-white grow">
              While in beta, all plans are free of charge. Sign up for exclusive beta access and help refine our platform.
              A $0.10 card verification is required for account setup, but no further charges will be made until full launch.
              We'll provide 30 days' notice before the official release. As a thank you, beta users will receive a 50% discount on all plans for the first 3 months post-launch.
              Please note that some features may be unstable as we continue development.
            </p>
          </div>
          <div className="min-w-2.5 min-h-2.5 sm:min-w-4 sm:min-h-4 outline-none bg-transparent cursor-pointer">
            <Image
              src="/assets/svg/Cross.svg"
              alt="Cross"
              width={20} height={20}
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-32 w-[340px]">
          <p className="ml-[72%] text-[#F6B24D] font-semibold text-[10px] pb-1">Get 2 Months Free!</p>
        </div>

        <div className="bg-[#323232] rounded-lg p-1 h-[50px] w-[340px] flex gap-1 z-50">
          <div
            onClick={() => setPricingType("Monthly")}
            className={`w-1/2 flex rounded-lg justify-center items-center text-[20px] font-medium transition-colors duration-500 cursor-pointer ${
              pricingType === "Monthly" ? "bg-[#B295FF] text-black" : "bg-transparent text-white"
            }`}
          >
            Monthly
          </div>
          <div
            onClick={() => setPricingType("Annually")}
            className={`w-1/2 flex rounded-lg justify-center items-center text-[20px] font-medium transition-colors duration-500 cursor-pointer ${
              pricingType === "Annually" ? "bg-[#F6B24D] text-black" : "bg-transparent text-white"
            }`}
          >
            Annual
          </div>
        </div>

        <div className="mt-14 w-full flex flex-wrap gap-3 xl:gap-5 justify-center mx-auto">
          {data && data.map((plan, index) => (
              <div
                key={index}
                className={`w-[95%] sm:w-[48%] xl:w-[32%] h-[720px] sm:h-[790px] 2xl:h-[700px] bg-[#292929] opacity-100 rounded-2xl px-7 lg:px-14 py-14 border-[1px] border-solid
                  ${ index === 1 ? "border-[#F6B24D]" : "border-[transparent]" } hover:border-[#6B0485] relative z-50`}
              >
                {index === 1 && (
                  <p className="bg-[#F6B24D] w-auto absolute right-0 top-0 p-1 text-black text-[16px] font-semibold px-4 rounded-[8px] rounded-tr-xl">
                    MOST POPULAR
                  </p>
                )}
                <p className="text-[#B295FF] text-4xl font-semibold">{planTitle[index]}</p>

                <p className="text-white py-5">{plan.description}</p>

                <p className="pb-8">
                  <span className="text-white font-semibold text-2xl">
                    {pricingType === "Monthly" ? `${plan.monthly_price}/mo` : `${plan.yearly_price}/year`}
                  </span>
                </p>

                <p className="text-white pb-4 text-sm font-semibold">WHAT'S INCLUDED</p>

                {plan.features.map((item, featureIndex) => (
                  <p key={featureIndex} className="pb-1 text-sm text-[#D9D9D9]">
                    {item}
                  </p>
                ))}

                <div
                  onClick={() => handleGetStartedClick(pricingType === "Monthly" ? plan.purchase_link_month : plan.purchase_link_year)}
                  className="flex justify-center gap-1 items-center p-3 bg-transparent rounded-xl font-bold text-white max-md:p-2 border-[1px] border-solid border-white text-sm sm:text-lg hover:bg-white hover:text-black cursor-pointer duration-200 transition-all !gap-y-0 w-fit px-8 mx-auto mt-10 text-[20px] absolute bottom-14 left-[50%] translate-x-[-50%] min-w-[200px]"
                >
                  Get Started
                  <FaArrowRight />
                </div>
              </div>
            ))}
        </div>
      </main>
    </PageLayout>
  );
};

export default PricingPage;
