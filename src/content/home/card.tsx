'use client';

import React, { useState, FormEvent } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { submitProgressReport, submitStructuralReport } from '@/common/helper';
import { useRouter } from 'next/navigation';
import { Fade } from "react-awesome-reveal";
import { VideoComponent } from '@/app/ui/VideoComponent';

export type CardProps = {
    title: string;
    description: string;
    videoUrl: string;
    emailForm?: {
        type: string;
        description: string;
        to: string;
    } | null;
}

export default function Card({ title, description, videoUrl, emailForm = null }: CardProps) {
    const [email, setEmail] = useState<string>('');
    const router = useRouter();

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission

        if (email.length === 0) return;

        if (emailForm?.type == 'calc') {
            await submitStructuralReport(email);
        } else {
            await submitProgressReport(email);
        }

        // router.push('/schedule'); // Use router.push to navigate
    };

    return (
        <Fade triggerOnce>
            <section className="flex flex-col items-center">
                <h2 className="text-[#EFEFEF] text-center text-5xl sm:text-7xl font-semibold">
                    {title.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </h2>
                <p className="text-[#EFEFEF] text-lg large-desktop:text-2xl text-center font-medium py-16">
                    {description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
                <div className="max-w-[1000px] pb-3 xs:pb-8 sm:pb-16">
                    {/* <video autoPlay muted className="w-full lg:h-[680px] border border-solid border-neutral-50 rounded-xl object-fill">
                        <source src={videoUrl} />
                    </video> */}
                    <VideoComponent src={videoUrl} />
                </div>
                {emailForm && (
                    <form
                        className="flex flex-col space-y-12"
                        onSubmit={handleSubmit}
                    >
                        <p className="text-[#EFEFEF] text-2xl text-center font-medium">{emailForm?.description}</p>
                        <div className="max-w-[620px] w-full flex flex-col md:flex-row items-center md:items-start md:space-x-3 max-md:space-y-3">
                            <div className="flex flex-col w-full items-center space-y-1">
                                <input
                                    className="bg-transparent w-full text-[#FAFAFA] text-base px-8 py-4 border border-[##D9D9D9] placeholder:text-opacity-40 rounded-full outline-none"
                                    type="email"
                                    placeholder="Your Corporate Email"
                                    onChange={handleInput}
                                />
                                <span className="text-[#FAFAFA] text-opacity-40 text-[10px] font-light">We never share your email</span>
                            </div>
                            <button
                                type="submit"
                                className="flex-shrink-0 flex items-center hover:bg-white text-[#F2F2F2] hover:!text-black text-base font-semibold border border-[#F7F6FA] px-12 py-4 gap-2 rounded-full cursor-pointer transition duration-200"
                            >
                                <span className="font-medium">{emailForm.to}</span>
                                <FaArrowRight className="text-base" />
                            </button>
                        </div>
                    </form>
                )}
            </section>
        </Fade>
    )
}
