import { ArrowRight } from "lucide-react";
interface catagorie {
  title: string,
  description: string,
  videoUrl: string
}

const categories: catagorie[] = [
  {
    title: "Frontend Development",
    description:
      "Learn to build modern, responsive user interfaces using HTML, CSS, JavaScript, and React. By the end, you'll be able to design landing pages, blogs, and portfolios.",
    videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc",
  },
  {
    title: "Backend Development",
    description:
      "Master Node.js, Express, and databases like MongoDB and PostgreSQL to create APIs, authentication systems, and data-driven platforms.",
    videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE",
  },
  {
    title: "Mobile App Development",
    description:
      "Create beautiful mobile apps using Flutter and Firebase. You'll build real-world apps like a to-do list, camera/gallery app, and an e-commerce mobile platform.",
    videoUrl: "https://www.youtube.com/embed/x0uinJvhNxI",
  },
  {
    title: "Full-Stack Projects",
    description:
      "Combine frontend and backend to build powerful full-stack projects like a social media clone, blog platform, or even a mini SaaS product.",
    videoUrl: "https://www.youtube.com/embed/ZxKM3DCV2kE",
  },
];

const WhatYouBuild = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="lg:max-w-sm">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            What You'll Build With Us
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
            doloremque mollitia fugiat omnis! Porro facilis quo animi
            consequatur. Explicabo.
          </p>
          <a
            href="#"
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
          >
            Book a demo{" "}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">


          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">

            {
              categories.map((el) => (
                <>
                  <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                    <iframe
                      src={el.videoUrl}
                      title={el.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                  <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                    <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                      {el.title}
                    </h3>
                    <p className="text-muted-foreground lg:text-lg">
                      {el.description}
                    </p>
                  </div>
                </>
              ))
            }

          </div>

        </div>
      </div>
    </section>
  );
};

export { WhatYouBuild };
