import React from "react";
import Overview from "../content/home/Overview";
import Card, { CardProps } from "../content/home/Card";
import ImageSlider from "@/content/imageCarousal/Imageslider";
import SendForm from "../content/home/Sendform";
import PageLayout from "./ui/PageLayout";
import Accordion from "@/content/home/Accordion";

const cardList: CardProps[] = [
  {
    title: 'Breeze through structural design',
    description: 'Powerful model visualization and run structural calculations.\nExport calcs to Excel and MathCad while create drawings on AutoCAD',
    videoUrl: 'assets/video/StruVideo2-BreezeDesign.mp4',
    emailForm: {
      to: 'Email me the calcs',
      type: 'calc',
      description: 'Get a sample retaining wall structural calculation report'
    }
  },
  {
    title: 'Create details on AutoCAD\nTunnel Engineering',
    description: '“I have had to manually draw gasket geometry, or reach out to manufacturers catalog for info...”\nSegmental tunnel, cross passages - create the details you need - with the AutoCAD file',
    videoUrl: 'assets/video/StruVideo3-TunnelDetail.mp4',
  },
  {
    title: 'Project Management done right',
    description: 'Free up time from doing tedious work.\nSay exactly what you need done, progress reports, custom and personalized to you.',
    videoUrl: 'assets/video/StruVideo4-ProjectManagement.mp4',
    emailForm: {
      type: 'report',
      to: 'Email me the report',
      description: 'Get a sample project progress report'
    }
  },
  {
    title: 'RFIs, drawings and\ndocument intelligence',
    description: 'Ask natural questions that sift through mountains of data.\nCreate reports, send emails cross check information and more.',
    videoUrl: 'assets/video/StruVideo5-Document.mp4',
  },
  {
    title: 'Reply specific emails automatically',
    description: 'A coworker needs information?\nHave them email it to you and an automated intelligent reply with the exact information if found.',
    videoUrl: 'assets/video/StruVideo6-Email.mp4',
  }
]

const Home: React.FC = () => {
  return (
    <PageLayout type={1}>
      <main className="w-full py-20 xs:py-32">
        <Overview />
        <section className="mt-20">
          <p className="text-[#A6A6A6] font-medium text-center">
            With inputs from leading design and construction teams
          </p>
          <ImageSlider />
        </section>
        <div className="flex flex-col items-center space-y-28 mt-16 xs:mt-24 sm:mt-36">
          {cardList.map((card, index) => (
            <Card {...card} key={index} />
          ))}
        </div>
        <div className="flex flex-col items-center mt-8">
          <SendForm />
        </div>
        <div className="flex flex-col items-center my-28">
          <Accordion />
        </div>
        <div className="flex flex-col items-center mt-8">
          <SendForm />
        </div>
      </main>
    </PageLayout>
  );
};

export default Home;
