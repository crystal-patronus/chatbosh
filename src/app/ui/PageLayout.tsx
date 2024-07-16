import React from 'react';
import Image from 'next/image';
import { inter } from '@/content/font';
import Header from '../header';
import Footer from '../footer';

const PageLayout = ({ children, type = 2 }: { children: React.ReactNode, type?:number }) => {
    return (
        <div className="flex flex-col items-center bg-stone-900 relative min-h-screen px-4 xs:px-6 md:px-12 pt-16">
            <div className="absolute top-[70px] left-0 w-full">
                <Image
                    loading="lazy"
                    alt="Stru.AI-grid"
                    src="/svg/grid.svg"
                    width={10} height={10}
                    className="w-full object-cover"
                    quality={100}
                    style={{ height: `${type == 1? 'auto' : 'calc(100vh - 100px)'}` }}
                />
            </div>
            <div className="absolute sm:w-[600px] xl:w-[1048px] sm:h-[600px] xl:h-[1048px] left-1/2 -translate-y-[50%] xl:-translate-y-[80%] -translate-x-[50%]" style={{
                    background: 'rgba(164, 135, 238, 0.4)',
                    filter: 'blur(300px)'

            }} />
            <div className={`z-50 max-w-[1520px] w-full ${inter.className}`}>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default PageLayout;