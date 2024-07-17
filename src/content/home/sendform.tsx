'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { addToWaitlist } from '@/common/helper';
import { useRouter } from 'next/navigation';

export default function SendForm({ type = 2 }: { type?: number }) {
    const [isAddedToWaitlist, setIsAddedToWaitlist] = useState<boolean>(false);
    const [buttonText, setButtonText] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const router = useRouter();

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    };

    const handleRequestDemo = () => {
        router.push('/demo'); // Use router.push to navigate
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission

        if (email.length === 0) return;

        const result = await addToWaitlist(email);
        if (result) {
            setButtonText('Added to Waitlist!');
            setTimeout(() => {
                setButtonText('Request a demo');
                setIsAddedToWaitlist(true);
            }, 700);
        }
    };

    useEffect(() => {
        setButtonText('Start crushing tasks');
    }, [])

    if (type == 1) {
        return (
            <form
                className="max-w-[620px] w-full flex flex-col xl:flex-row items-center xl:items-start mx-auto xl:mx-0 space-x-3 space-y-4 xl:space-y-0"
                onSubmit={isAddedToWaitlist ? handleRequestDemo : handleSubmit}
            >
                <div className="flex flex-col w-full items-center xl:items-center space-y-1">
                    <input
                        className="w-full bg-transparent text-[#FAFAFA] text-base px-8 py-4 border border-primaryPurple placeholder:text-opacity-40 rounded-full outline-none"
                        type="email"
                        placeholder="Your Corporate Email"
                        onChange={handleInput}
                    />
                    <span className="text-[#FAFAFA] text-opacity-40 text-[10px] font-light px-0 xl:pl-5 xl:px-0">We never share your email</span>
                </div>
                <button
                    type="submit"
                    className="flex-shrink-0 flex items-center bg-primaryPurple hover:bg-white text-[#FAFAFA] hover:text-primaryPurple text-base px-8 py-4 cursor-pointer gap-2 rounded-full transition duration-200"
                >
                    <span className="font-medium">{buttonText}</span>
                    <FaArrowRight className="text-base" />
                </button>
            </form>
        )
    }

    return (
        <form
            className="max-w-[620px] w-full flex flex-col md:flex-row items-center md:items-start space-x-3 max-md:space-y-3"
                onSubmit={isAddedToWaitlist ? handleRequestDemo : handleSubmit}
        >
            <div className="flex flex-col w-full items-center space-y-1">
                <input
                    className="w-full bg-transparent text-[#FAFAFA] text-base px-8 py-4 border border-primaryPurple placeholder:text-opacity-40 rounded-full outline-none"
                    type="email"
                    placeholder="Your Corporate Email"
                    onChange={handleInput}
                />
                <span className="text-[#FAFAFA] text-opacity-40 text-[10px] font-light">We never share your email</span>
            </div>
            <button
                type="submit"
                className="flex-shrink-0 flex items-center bg-primaryPurple hover:bg-white text-[#FAFAFA] hover:text-primaryPurple text-base px-8 py-4 cursor-pointer gap-2 rounded-full transition duration-200"
            >
                <span className="font-medium">{buttonText}</span>
                <FaArrowRight className="text-base" />
            </button>
        </form>
    );
}
