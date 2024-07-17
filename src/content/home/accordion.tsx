"use client";

import React, { useState, useRef, useEffect } from 'react';

type AccordionType = {
    question: string;
    answer: string;
}

const accordionItems: AccordionType[] = [
    {
        question: "What if it's not right for me? ",
        answer: "We have a 14-day money back guarantee, no questions asked. We want you to be happy using our product, send us an email and we’ll take care of the refund."
    },
    {
        question: "What is Stru and how can it benefit my design process? ",
        answer: "Stru is a tool designed to expedite tasks for civil engineers. It assists in project management, drawings, calculations, and modeling in design. Stru speeds up the extraction of information from documents and drawings, visualizes data, and exports to engineering formats. It bridges the gap between different software and automates tedious tasks."
    },
    {
        question: "Can Stru perform preliminary structural analysis? ",
        answer: "Yes, Stru can perform preliminary structural analysis, allowing you to quickly evaluate the viability of your designs and make informed decisions early in the project. You can export your work to Revit, SAP2000, Plaxis, and Risa-3D for further analysis if needed."
    },
    {
        question: "Is Stru cloud-based or does it require installation? ",
        answer: "Stru is a fully cloud-based platform, meaning it can be accessed from anywhere with an internet connection without the need for local installation. This facilitates collaboration and ensures your work is always backed up and accessible."
    },
    {
        question: "What happens to my data and documents when I upload them? ",
        answer: "When you upload data and documents to Stru, they are securely stored on the cloud. Stru employs robust security measures to protect your information and complies with data protection regulations. Your data is not used to train any models, and you can delete it at any time."
    },
    {
        question: "How does Stru integrate with existing software?",
        answer: "Stru integrates seamlessly with various existing software tools, including AutoCAD and BIM applications such as Revit. We also integrate with Excel, Word, and MathCAD. This integration allows for smooth data transfer and interoperability, enhancing your workflow efficiency."
    },
    {
        question: "Does this use BIM? Can I export to Revit?",
        answer: "Yes, Stru supports Building Information Modeling (BIM) and allows you to export your structural models and data to Revit, facilitating a cohesive design and documentation process. Our flagship feature is drawing details on AutoCAD and generating sheets!"
    }
];

type AccordionItemProps = {
    isActived: boolean;
    fontWeightBold: string;
    item: AccordionType;
    index: number;
    onItemClick: () => void;
}

const AccordionItem = ({
    isActived,
    fontWeightBold,
    item,
    index,
    onItemClick,
  }: AccordionItemProps) => {
    const content = useRef<HTMLDivElement | null>(null);

    return (
        <div className="w-full border-b border-[#D2D2D2] border-opacity-40" key={item.question}>
            <dt>
                <button
                    aria-controls={`faq${index + 1}_desc`}
                    data-qa="faq__question-button"
                    className={`faq__question-button w-full flex justify-between bg-transparent hover:opacity-80 border-none text-[#EFEFEF] text-[1rem] leading-[1.6rem] text-start font-medium py-6 ${fontWeightBold}`}
                    onClick={onItemClick}
                >
                    {item.question}
                </button>
            </dt>
            <dd>
                <p
                    id={`faq${index + 1}_desc`}
                    data-qa="faq__desc"
                    ref={content}
                    className="faq__desc text-[#959595] text-[1rem] leading-[1.6rem]"
                    style={{
                        height: isActived ? `${content.current?.scrollHeight}px` : '',
                        marginBottom: isActived ? `1rem` : '',
                    }}
                >
                    {item.answer}
                </p>
            </dd>
        </div>
    )
}

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(1);

    const renderedQuestionsAnswers = accordionItems.map((item, index) => {
        const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";

        return (
          <AccordionItem
            isActived={index === activeIndex}
            fontWeightBold={fontWeightBold}
            item={item}
            index={index}
            onItemClick={() => {
              setActiveIndex(activeIndex === index ? -1 : index);
            }}
            key={index}
          />
        );
    });

    return (
        <section className="w-full flex flex-col items-center mx-auto">
            <h2 className="text-[#EFEFEF] text-center text-5xl sm:text-7xl font-semibold">
                Frequently Asked Questions
            </h2>
            <p className="text-[#EFEFEF] text-lg xs:text-xl large-desktop:text-2xl text-center font-medium pt-16 pb-24">
                If you have any other questions - please get in touch!
            </p>
            <div className="max-w-[1000px] w-full flex flex-col">
                {renderedQuestionsAnswers}
            </div>
        </section>
    )
}