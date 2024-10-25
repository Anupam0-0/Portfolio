import React from "react";
import Link from "next/link";
import {MovingBorderBtn} from "@/components/ui/MovingBorder";
import Title from "./Title";

const HeroSection = () => {
    return (
        <div className="min-h-[82vh] items-center justify-between flex lg:flex-row lg:gap-0 flex-col-reverse gap-10">
            <div className="space-y-10 text-center lg:text-left">
            <h1 className="text-3xl lg:text-7xl font-bold ">
                Nice to see you here! 🐱
                <br/> {" "}
                <span className="underline underline-offset-8 decoration-green-500">
                {"I'm Anupam."}
                </span>
            </h1>
            
            <p className="md:w-96 text-lg text-gray-300">
                {
                    "I'm a React and Next.js developer. I love to build web applications and websites. I'm a self-taught developer and I'm always looking for new opportunities to learn and grow."
                }
            </p>

            
            <Link href={"mailto:ucse23011@stu.xim.edu.in"} className="inline-block group">
                <Title text="Contact Me ✉️" />
            </Link>
            </div>

            <div className="relative">
                <div className="size-72 mt-2  space-y-3 -rotate-[30deg]">
                <div className="flex gap-3 translate-x-8">
                    <div className="size-32 rounded-2xl bg-green-500"></div>
                    <div className="size-32 rounded-full bg-indigo-500"></div>
                </div>     
                <div className="flex gap-3 -translate-x-0">
                    <div className="size-32 rounded-2xl bg-indigo-500"></div>
                    <div className="size-32 rounded-full bg-green-500"></div>
                </div>

                <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
                </div>

                <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
                <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
                    <p>💼 Available for Work</p>
                </MovingBorderBtn>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
