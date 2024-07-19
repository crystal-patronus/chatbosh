'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { addToWaitlist } from '@/common/helper';
import { useRouter } from 'next/navigation';

const Spinner = () => {
    return (
        <div role="status">
            <svg
                aria-hidden="true"
                className="w-[20px] h-[20px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                />
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default function SendForm({ type = 2 }: { type?: number }) {
    const [isAddedToWaitlist, setIsAddedToWaitlist] = useState<boolean>(false);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [buttonText, setButtonText] = useState<string>('Start crushing tasks');
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

        setIsSending(true);
        const result = await addToWaitlist(email);
        setIsSending(false);
        if (result) {
            setButtonText('Added to Waitlist!');
            setTimeout(() => {
                setButtonText('Request a demo');
                setIsAddedToWaitlist(true);
            }, 700);
        }
        else {
            setButtonText('Bad request!');
            setTimeout(() => {
                setButtonText('Start crushing tasks');
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
                    disabled={isSending}
                    className="flex-shrink-0 flex items-center disabled:opacity-55 disabled:cursor-not-allowed bg-primaryPurple enabled:hover:bg-white text-[#FAFAFA] enabled:hover:text-primaryPurple text-base px-8 py-4 gap-2 rounded-full transition duration-200"
                >
                    {isSending ?? <Spinner />}
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
                className="flex-shrink-0 flex items-center disabled:opacity-55 disabled:cursor-not-allowed bg-primaryPurple enabled:hover:bg-white text-[#FAFAFA] enabled:hover:text-primaryPurple text-base px-8 py-4 gap-2 rounded-full transition duration-200"
            >
                {isSending ?? <Spinner />}
                <span className="font-medium">{buttonText}</span>
                <FaArrowRight className="text-base" />
            </button>
        </form>
    );
}
