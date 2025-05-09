import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const courses = [
  {
    title: "Backend Development",
    description: [
      "Master Node.js, Express, and MongoDB",
      "Build RESTful APIs",
      "Implement authentication & authorization",
      "Optimize backend performance"
    ],
    price: 1200,
    badge: "50% OFF"
  },
  {
    title: "Frontend Development",
    description: [
      "Master React, Node.js, and MongoDB",
      "Implement authentication & APIs",
      "Develop real-world applications",
      "Receive expert mentorship"
    ],
    price: 1000,
    badge: "50% OFF"
  },
  {
    title: "Mobile App Development",
    description: [
      "Build apps with React Native & Expo",
      "Deploy to iOS & Android platforms",
      "Learn UI/UX design principles",
      "Complete a capstone project"
    ],
    price: 1000,
    badge: "50% OFF"
  },
  {
    title: "Fullstack Development",
    description: [
      "Gain expertise in React, Node.js, and MongoDB",
      "Work with authentication & APIs",
      "Create production-ready applications",
      "Benefit from mentorship support"
    ],
    price: 1500,
    badge: "50% OFF"
  }
];

const Courses = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-6">
          <h2 className="text-4xl font-semibold text-center text-pretty lg:text-5xl">
            Courses
          </h2>

          <div className="flex w-full flex-col items-stretch gap-6 md:flex-row md:flex-wrap">
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex w-full flex-col rounded-lg border p-6 text-left md:w-[48%] lg:w-[23%]"
              >
                <Badge className="mb-4 w-fit">{course.badge}</Badge>
                <h3 className="mb-2 text-2xl font-semibold">{course.title}</h3>
                <span className="text-3xl font-medium">${course.price}</span>
                <p className="invisible text-muted-foreground">Per month</p>
                <Separator className="my-6" />
                <div className="flex flex-col justify-between gap-20 h-full">
                  <ul className="space-y-4 text-muted-foreground">
                    {course.description.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="size-4" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-auto">Get Started</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Courses };
