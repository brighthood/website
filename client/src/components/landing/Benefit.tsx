import {
  BatteryCharging,
  GitGraph,
  Layers3,
  RadioReceiver,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature43Props {
  heading?: string;
  reasons?: Reason[];
}

const Benefit = ({
  heading = "What You Will Benefit from Us",
  reasons = [
    {
      title: "Hands-On Learning",
      description:
        "Master skills by building real-world projects, not just watching tutorials. Apply your knowledge in practical scenarios.",
      icon: <LayoutDashboard className="size-6" />,
    },
    {
      title: "Industry-Relevant Curriculum",
      description:
        "Stay ahead with content that's designed around the latest tools, frameworks, and employer demands.",
      icon: <GitGraph className="size-6" />,
    },
    {
      title: "Personalized Mentorship",
      description:
        "Get guidance from experienced developers and mentors who will help you grow faster and avoid common pitfalls.",
      icon: <RadioReceiver className="size-6" />,
    },
    {
      title: "Cutting-Edge Tools",
      description:
        "Learn with modern tech stacks and workflows including Git, Docker, CI/CD, and cloud platforms.",
      icon: <Layers3 className="size-6" />,
    },
    {
      title: "Job-Ready Portfolio",
      description:
        "Graduate with a polished portfolio of projects that showcase your skills to recruiters and hiring managers.",
      icon: <Sparkles className="size-6" />,
    },
    {
      title: "Career Support",
      description:
        "Access resume reviews, interview prep, and networking opportunities to help you land your dream role.",
      icon: <BatteryCharging className="size-6" />,
    },
  ],
}: Feature43Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            {heading}
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                {reason.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Benefit };
