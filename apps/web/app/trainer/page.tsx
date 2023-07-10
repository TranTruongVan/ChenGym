import Image from "next/image";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="page-setup">
      <section className="h-fit w-full bg-primary bg-right bg-no-repeat md:bg-[url('/trainer-bg.jpg')]">
        <div className="container flex items-center justify-center py-24 text-center text-5xl font-bold text-primary-foreground">
          Online personal trainer
        </div>
      </section>

      <section className="container border-b border-primary px-8 py-11 text-center text-xl">
        ChenGym has certified personal trainers that provide you with customised
        workout plans depending on your goals. Our trainers track your progress,
        coach and motivate you daily through our web and smartphone app.
      </section>

      <section className="container flex flex-col items-center pb-12">
        <div className="my-11 text-4xl font-bold">Our trainer</div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                className="top-0 rounded-md object-contain shadow-xl"
                alt="trainer-1"
                src="/trainer-1.jpg"
                fill
              />
            </div>
          </div>
          <div className="col-span-8 flex flex-col gap-4">
            <h2 className="text-3xl font-bold"> Siim Savisaar</h2>
            <p className="text-lg">
              Siim is a university-trained practising physiotherapist, personal
              trainer and a world-class bodybuilder. He’s a strong believer in
              what doesn’t challenge you, won’t change you. Thus, you should
              expect to be challenged if you work with him. Siim has extensive
              experience, from working with people with special needs to
              training elite athletes from freestyle skiing to bodybuilding and
              bikini fitness. His speciality is physical conditioning along with
              strength and hypertrophy programs.
            </p>
            <button className="btn-primary btn w-fit text-primary-foreground">
              Choose this trainer
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                className="top-0 rounded-md object-contain shadow-xl"
                alt="trainer-2"
                src="/trainer-2.jpg"
                fill
              />
            </div>
          </div>
          <div className="col-span-8 flex flex-col gap-4">
            <h2 className="text-3xl font-bold"> Taavi Merisalu</h2>
            <p className="text-lg">
              Taavi graduated from the Institute of Sports Sciences and
              Physiotherapy of the University of Tartu. His specialty is
              weightlifting, folk sports and personal training. He has not
              finished self-improvement - he is constantly updating himself with
              modern research in order to keep his methods as science-based as
              possible. In addition to training others, he also trains himself
              and is a very successful bodybuilder in Estonia. Has achieved
              medal positions in Estonian domestic and foreign competitions
              several times. Taavi's trainees hold more than 20 Estonian records
              in powerlifting. In addition to records, his students have brought
              Estonia 5 medals from the European Championships.
            </p>
            <button className="btn-primary btn w-fit text-primary-foreground">
              Choose this trainer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
