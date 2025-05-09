import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import video from "./../../assets/coding.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-28">
      <div className="overflow-hidden border-b border-muted">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <div className="z-10 items-center text-center">
              <h1 className="mb-8 text-4xl font-semibold text-pretty lg:text-7xl bg-gradient-to-b from-background to-foreground bg-clip-text text-transparent">
                Empower Your Future with Tech
              </h1>
              <p className="mx-auto max-w-screen-md text-muted-foreground lg:text-lg">
                At Bright Hood, we believe tech education should be a right — not a privilege. That’s why we’re building a movement to equip underserved communities with the tools, training, and confidence to thrive in the digital age. Learn practical, job-ready skills through real projects, mentorship, and a supportive network that believes in your potential.
              </p>
              <div className="mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row">
                <Link to="/auth/sign-up">
                  <Button size="lg">
                    Get started now
                    <ChevronRight className="ml-2 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-24 max-h-[500px] w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
            <video
              src={video}
              controls
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
