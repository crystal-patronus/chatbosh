'use client';

import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import PageLayout from '@/app/ui/PageLayout';

const Schedule = () => {
    useEffect(()=>{
        (async function () {
            const cal = await getCalApi({});
            cal("ui", {
                "theme":"dark",
                "styles":{
                    "branding":{
                        "brandColor":"#000000"
                    }
                },
                "hideEventTypeDetails":false,
                "layout":"month_view"
            });
        })();
    }, []);

    return (
        <PageLayout>
            <main className="max-w[1350px] w-full flex flex-col items-center py-20">
                <div className="flex flex-col items-center">
                    <h2 className="text-[#EFEFEF] text-center text-5xl sm:text-[72px] font-semibold">
                        Schedule a free demo
                    </h2>
                    <p className="text-[#EFEFEF] text-lg xs:text-xl large-desktop:text-2xl text-center pt-8 pb-16">
                        Full visibility and walkthrough of the software.
                    </p>
                </div>
                <section className="w-full flex flex-col lg:flex-row bg-[#292929] px-8 sm:px-16 xl:px-20 max-lg:pt-12 max-lg:pb-8 lg:py-12 xl:py-16 max-lg:space-y-12 lg:gap-8" style={{
                    boxShadow: '0px 4px 8px rgba(22, 22, 24, 0.25)',
                    borderRadius: '16px'
                }}>
                    <div className="w-full lg:w-[40%] flex flex-col space-y-8">
                        <h2 className="lg:max-w-[85%]  text-[#EFEFEF] text-2xl border-b border-[#D2D2D2] border-opacity-40 pb-3">What to expect</h2>
                        <div className="text-white font-light space-y-7">
                            <p>
                                Beta Access to Stru AI 
                            </p>
                            <p>
                                Talk to the founder who listens to your challenges in your day-to-day.
                            </p>
                            <p>
                                Give 1-to-1 feedback and provide insights to shape the future of Stru.AI
                            </p>
                            <p>
                                Be a part of the engineering community that’s looking to supercharge the industry
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-[60%]">
                        <Cal
                            calLink="bhosh/30min"
                            className="w-full custom-scrollbar"
                            config={{layout: 'month_view'}}
                        />
                    </div>
                </section>
            </main>
        </PageLayout>
    )
}

export default Schedule
