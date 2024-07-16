'use client';

import React, { useState, FormEvent } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { addToWaitlist } from '@/common/helper';
import { useRouter } from 'next/navigation';

export default function SendForm({ type = 2 }: { type?: number }) {
    const [email, setEmail] = useState<string>('');
    const router = useRouter();

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission

        if (email.length === 0) return;

        await addToWaitlist(email);
        router.push('/schedule'); // Use router.push to navigate
    };

    if (type == 1) {
        return (
            <form
                className="max-w-[700px] w-full flex flex-col xl:flex-row items-center lg:items-start mx-auto lg:mx-0 space-y-4 xl:space-y-0"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col w-full items-center lg:items-start xl:items-center">
                    <input
                        className="w-full bg-transparent text-[#FAFAFA] text-base xs:text-xl px-8 py-4 border border-primaryPurple placeholder:text-opacity-40 rounded-full outline-none"
                        type="email"
                        placeholder="Your Corporate Email"
                        onChange={handleInput}
                    />
                    <span className="text-[#FAFAFA] text-opacity-40 text-[10px] font-light px-0 lg:pl-5 xl:px-0">We never share your email</span>
                </div>
                <button
                    type="submit"
                    className="flex-shrink-0 flex items-center bg-primaryPurple hover:bg-white text-[#FAFAFA] hover:text-primaryPurple text-base xs:text-xl px-12 py-4 cursor-pointer gap-2 rounded-full transition duration-200"
                >
                    <span className="font-medium">Start crushing tasks</span>
                    <FaArrowRight className="text-base" />
                </button>
            </form>
        )
    }

    return (
        <form
            className="max-w-[700px] w-full flex flex-col md:flex-row items-center md:items-start max-md:space-y-3"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col w-full items-center">
                <input
                    className="w-full bg-transparent text-[#FAFAFA] text-base xs:text-xl px-8 py-4 border border-primaryPurple placeholder:text-opacity-40 rounded-full outline-none"
                    type="email"
                    placeholder="Your Corporate Email"
                    onChange={handleInput}
                />
                <span className="text-[#FAFAFA] text-opacity-40 text-[10px] font-light">We never share your email</span>
            </div>
            <button
                type="submit"
                className="flex-shrink-0 flex items-center bg-primaryPurple hover:bg-white text-[#FAFAFA] hover:text-primaryPurple text-base xs:text-xl px-12 py-4 cursor-pointer gap-2 rounded-full transition duration-200"
            >
                <span className="font-medium">Start crushing tasks</span>
                <FaArrowRight className="text-base" />
            </button>
        </form>
    );
}
