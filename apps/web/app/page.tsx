import { Header } from "@web/components";
import React from "react";
import Image from "next/image";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-screen">
        <video
          src="/bg-video.mp4"
          className="absolute h-full w-full object-fill"
          autoPlay
          loop
          muted
        />

        <div className="container absolute left-1/2 top-[40%] z-10 flex -translate-x-1/2 flex-col items-center">
          <h1 className="text-center text-3xl font-bold text-white-1 md:text-6xl">
            A better way to track your workouts
          </h1>

          <button className="btn-primary btn my-8 w-48 text-white-1 md:btn-lg md:my-16 md:w-72">
            Start Now
          </button>

          <p className="flex cursor-pointer items-center gap-1 text-lg hover:underline">
            <span className="text-sm md:text-base"> See how it works </span>
            <Image
              alt="arrow-right"
              src="/arrow-right.svg"
              height={16}
              width={16}
              className="invert filter"
            />
          </p>
        </div>
      </section>

      <section className="w-full bg-primary bg-contain bg-right bg-no-repeat py-24 md:bg-[url('/trainer-bg.jpg')]">
        <div className="container">
          <div className="flex w-full flex-col items-center gap-8 md:w-1/2 md:items-start">
            <h2 className="text-2xl font-bold text-black-1 md:text-4xl">
              Online personal trainer
            </h2>

            <p className="text-sm text-black-1 md:text-lg">
              ChenGym has certified personal trainers that provide you with
              customised workout plans depending on your goals. Our trainers
              track your progress, coach you, and motivate you daily through our
              web and smartphone app.
            </p>

            <button className="btn-black-1 btn w-72 text-white-1 md:btn-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col gap-16 bg-black-2 py-24">
        <div className="container grid grid-cols-12 gap-8">
          <div className="col-span-12 flex flex-col items-center justify-center gap-8 md:col-span-6 md:items-start">
            <h2 className="text-2xl font-bold md:text-4xl">Features</h2>

            <p className="text-sm md:text-lg">
              ChenGym is a workout tracking tool. Add workouts, create your own
              customized workout plans or find suitable plan from other users.
              Accomplish your goals with motivation from personal trainer and
              committed training.
            </p>

            <button className="btn-primary btn-lg btn w-72 text-white-1 md:btn-lg">
              Take a tour
            </button>
          </div>

          <div className="col-span-6 hidden items-center justify-end md:flex">
            <div className="relative aspect-[2/1] h-3/4 max-w-full">
              <Image alt="feature" src="/features-img.png" fill />
            </div>
          </div>
        </div>

        <div className="container grid grid-cols-12 gap-8">
          <div className="col-span-6 hidden items-center justify-start md:flex">
            <div className="relative aspect-[2/1] h-3/4 max-w-full">
              <Image alt="feature" src="/progress-img.png" fill />
            </div>
          </div>

          <div className="col-span-12 flex flex-col items-center justify-center gap-8 md:col-span-6 md:items-start">
            <h2 className="text-2xl font-bold md:text-4xl">
              See your progress
            </h2>

            <p className="text-sm md:text-lg">
              ChenGym provides different graphs that help you track your
              progress. There are graphs for gym workouts, cardio workouts and
              bodyweight. The graphs are highly customizable: you can select the
              date range, exercise and group the results by month, week or
              single workout.
            </p>

            <button className="btn-primary btn-lg btn w-72 text-white-1 md:btn-lg">
              Take a tour
            </button>
          </div>
        </div>

        <div className="container grid grid-cols-12 gap-8">
          <div className="col-span-12 flex flex-col items-center justify-center gap-8 md:col-span-6 md:items-start">
            <h2 className="text-2xl font-bold md:text-4xl">
              Database with 300+ exercises
            </h2>

            <p className="text-sm md:text-lg">
              ChenGym has a database with over 300 exercises. The exercises come
              with detailed descriptions, tips and step-by-step images. If you
              don't find a exercise from our database, then you can also add
              your own exercises.
            </p>

            <button className="btn-primary btn-lg btn w-72 text-white-1 md:btn-lg">
              Check out
            </button>
          </div>

          <div className="col-span-6 hidden items-center justify-end md:flex">
            <div className="relative aspect-[2/1] h-3/4 max-w-full">
              <Image alt="feature" src="/database-img.png" fill />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
