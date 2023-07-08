import Image from "next/image";
import React from "react";
import Link from "next/link";
import { SignUpBtn } from "../auth/AuthBtn";
import FeatureImage from "./FeatureImage";

type Props = {};

export default function GreetingPage({}: Props) {
  return (
    <div className="flex flex-col w-full">
      <section className="relative flex min-h-screen bg-[url('/header-bg.jpg')] bg-cover bg-center bg-no-repeat md:bg-none">
        <video
          src="/bg-video.mp4"
          className="absolute hidden object-fill w-full h-full md:inline"
          autoPlay
          loop
          muted
        />

        <div className="container absolute left-1/2 top-[40%] z-10 flex -translate-x-1/2 flex-col items-center text-primary-foreground ">
          <h1 className="text-3xl font-bold text-center md:text-6xl drop-shadow-2xl">
            A better way to track your workouts
          </h1>

          <SignUpBtn>
            <button className="w-48 my-8 btn-primary btn md:btn-lg md:my-16 md:w-72">
              Start Now
            </button>
          </SignUpBtn>

          <div className="flex items-center gap-1 text-lg cursor-pointer hover:underline">
            <span className="text-sm md:text-base"> See how it works </span>
            <Image
              alt="arrow-right"
              src="/arrow-right-circle.svg"
              height={16}
              width={16}
              className="invert filter"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-primary bg-contain bg-right bg-no-repeat py-12 md:bg-[url('/trainer-bg.jpg')] md:py-24">
        <div className="container">
          <div className="flex flex-col items-center w-full gap-4 md:w-1/2 md:items-start md:gap-8 text-primary-foreground">
            <h2 className="text-2xl font-bold text-item md:text-4xl">
              Online personal trainer
            </h2>

            <div className="text-sm text-item md:text-lg">
              ChenGym has certified personal trainers that provide you with
              customised workout plans depending on your goals. Our trainers
              track your progress, coach you, and motivate you daily through our
              web and smartphone app.
            </div>

            <Link
              href="/trainer"
              className="w-48 normal-case btn-item btn md:btn-lg md:w-72"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full gap-8 py-8 bg-background md:gap-16 md:py-24">
        <div className="container md:grid md:grid-cols-12 md:gap-8">
          <div className="flex flex-col items-center justify-center w-full gap-4 md:col-span-6 md:items-start md:gap-8">
            <h2 className="text-2xl font-bold text-center md:text-4xl">
              Features
            </h2>

            <div className="text-sm md:text-lg">
              ChenGym is a workout tracking tool. Add workouts, create your own
              customized workout plans or find suitable plan from other users.
              Accomplish your goals with motivation from personal trainer and
              committed training.
            </div>

            <button className="w-48 btn-primary btn text-primary-foreground md:btn-lg md:w-72">
              Take a tour
            </button>
          </div>

          <FeatureImage className="justify-end" lightImg="/features-img.png" darkImg="/features-img-dark.png" />
        </div>

        <div className="container md:grid md:grid-cols-12 md:gap-8">

        <FeatureImage className="justify-start" lightImg="/progress-img.png" darkImg="/progress-img-dark.png" />

          

          <div className="flex flex-col items-center justify-center w-full gap-4 md:col-span-6 md:items-start md:gap-8">
            <h2 className="text-2xl font-bold text-center md:text-4xl">
              See your progress
            </h2>

            <div className="text-sm md:text-lg">
              ChenGym provides different graphs that help you track your
              progress. There are graphs for gym workouts, cardio workouts and
              bodyweight. The graphs are highly customizable: you can select the
              date range, exercise and group the results by month, week or
              single workout.
            </div>

            <button className="w-48 btn-primary btn text-primary-foreground md:btn-lg md:ml-auto md:w-72">
              Take a tour
            </button>
          </div>
        </div>

        <div className="container md:grid md:grid-cols-12 md:gap-8">
          <div className="flex flex-col items-center justify-center w-full gap-4 md:col-span-6 md:items-start md:gap-8">
            <h2 className="text-2xl font-bold text-center md:text-4xl">
              Database with 300+ exercises
            </h2>

            <div className="text-sm md:text-lg">
              ChenGym has a database with over 300 exercises. The exercises come
              with detailed descriptions, tips and step-by-step images. If you
              don't find a exercise from our database, then you can also add
              your own exercises.
            </div>

            <button className="w-48 btn-primary btn text-primary-foreground md:btn-lg md:w-72">
              Check out
            </button>
          </div>

          <FeatureImage className="justify-end" lightImg="/database-img.png" darkImg="/database-img-dark.png" />

        </div>
      </section>
    </div>
  );
}
