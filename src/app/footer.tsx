"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dm_sans } from "@/content/font";

type ChildProps = {
  title: string;
  to: string;
  target?: string;
}

type FooterCategoryProps = {
  catagory: string;
  items: ChildProps[]
}

const categories: FooterCategoryProps[] = [
  {
    catagory: 'Product',
    items: [
      {
        title: 'Changelog',
        to: '/'
      },
      {
        title: 'Stru API',
        to: '/'
      }
    ]
  },
  {
    catagory: 'Legal',
    items: [
      {
        title: 'Terms',
        to: '/terms'
      },
      {
        title: 'Privacy',
        to: '/privacy'
      },
      {
        title: 'Cookies',
        to: '/cookies'
      }
    ]
  },
  {
    catagory: 'About',
    items: [
      {
        title: 'Contact Us',
        to: 'mailto:stru@stru.ai',
        target: '_blank'
      },
      {
        title: 'Careers',
        to: '/'
      }
    ]
  }
]

const CategoryItems = ({ childs }: { childs: ChildProps[] }) => {
  return (
    <div className="flex flex-col space-y-3 xs:space-y-2 sm:space-y-4">
      {childs.map((child: ChildProps, index: number) => (
        <Link
          className="text-[#A6A6A6] text-sm xs:text-xs sm:text-base"
          href={child.to}
          target={`${child.target ?? '_self'}`}
          key={index}
        >
          {child.title}
        </Link>
      ))}
    </div>
  )
}

const Footer = () => {
  return (
    <div className="w-full flex flex-col xs:flex-row xs:justify-between py-28 max-xs:space-y-5">
      <div className="flex flex-col justify-between space-y-4 sm:space-y-0">
        <Link href="/" className={`flex items-center space-x-3 sm:space-x-4 md:space-x-8 cursor-pointer ${dm_sans.className}`}>
          <Image
            loading="lazy"
            alt="Stru.AI"
            src="assets/svg/StruLogo.svg"
            width={50}
            height={50}
            className="w-[40px] sm:w-[50px]"
          />
          <div className="text-xl sm:text-2xl font-semibold text-[#FAFAFA]">Stru</div>
        </Link>
        <div className="xs:max-sm:space-y-0.5 space-y-2.5">
          <p className="text-[#959595] text-xs sm:text-sm">© 2024 Stru Inc. All Rights Reserved.</p>
          <div className="flex space-x-1">
            <Link
              href="mailto:stru@stru.ai"
              className="xs:max-sm:w-[30px] w-[40px] flex flex-col justify-center items-center p-2 border border-[#787878] rounded-full"
            >
              <img
                className="object-contain"
                src="/assets/svg/EmailIcon.svg"
                alt="Email"
              />
            </Link>
            <Link
              href="https://x.com/StruAi"
              className="xs:max-sm:w-[30px] w-[40px] flex flex-col justify-center items-center p-2 border border-[#787878] rounded-full">
              <img
                className="object-contain"
                src="/assets/svg/XIcon.svg"
                alt="X"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/stru-ai/"
              className="xs:max-sm:w-[30px] w-[40px] flex flex-col justify-center items-center p-2 border border-[#787878] rounded-full">
              <img
                className="object-contain"
                src="/assets/svg/LinkedinIcon.svg"
                alt="Linkedin"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-xs:w-full flex max-xs:justify-between space-x-5 sm:space-x-12">
        {categories.map((item, index) => (
          <div className="flex flex-col space-y-3 xs:space-y-2 sm:space-y-5" key={index}>
            <h2 className="text-[#FDFDFD] text-sm xs:text-xs sm:text-base">{item.catagory}</h2>
            <CategoryItems childs={item.items} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Footer;
