'use client';

import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import SendForm from './sendform';

export default function Overview() {
    const stars = [1, 2, 3, 4, 5];

    return (
        <section className="w-full flex flex-col xl:flex-row items-center gap-6">
            <div className="w-full xl:w-[55%] flex flex-col">
                <div className="w-full flex flex-col">
                    <h2 className="text-[#FAFAFA] text-5xl xs:text-6xl font-semibold !leading-tight">
                        Crush Civil Engineering Design Tasks in 
                        <span className="pl-4" style={{
                            fontStyle: 'normal',
                            fontWeight: 600,
                            backgroundImage: 'linear-gradient(91.36deg, #835BEF 66.16%, #A387EE 88.7%)',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            Minutes
                        </span>
                        <div className="w-[90%] h-[1px] bg-white my-9" />
                    </h2>
                </div>
                <p className="text-[#959595] text-lg xs:text-xl leading-9">
                    Save time, Interactive, Superhuman speed.<br></br>
                    Design structures with calculations, generate drawing details. <br></br>
                    Write reports and talk to documents. Instantly.<br></br>
                </p>
                <div className="pt-12 pb-10">
                    <SendForm type={1} />
                </div>
                <div className="flex flex-row items-center space-x-5 max-xl:mx-auto">
                    <div className="flex -space-x-2">
                        <Image
                            src="/assets/images/Engineer1.png"
                            width={50} height={50}
                            alt="Engineer"
                        />
                        <Image
                            src="/assets/images/Engineer2.png"
                            width={50} height={50}
                            alt="Engineer"
                        />
                        <Image
                            src="/assets/images/Engineer3.png"
                            width={50} height={50}
                            alt="Engineer"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex space-x-1">
                            {stars.map((index) => (
                            <Image
                                src="/assets/svg/Star.svg"
                                width={16} height={16}
                                alt="Star"
                                key={index}
                            />
                            ))}
                        </div>
                        <span className="text-[#EFEFEF] font-medium">Join 200+ engineers</span>
                    </div>
                </div>
            </div>
            <Fade triggerOnce>
                <div className="xl:flex-shrink-0 w-full">
                    <video autoPlay muted className="w-full xl:w-[600px] large-desktop:w-[700px] xl:h-[500px] border border-solid border-neutral-50 mx-auto lg:mx-0 rounded-xl object-fill">
                        <source src="assets/video/StruVideo1-Main.mp4" />
                    </video>
                </div>
            </Fade>
        </section>
    )
}