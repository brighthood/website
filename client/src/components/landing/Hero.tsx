import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import video from "./../../assets/coding.mp4"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-28">
      <div className="overflow-hidden border-b border-muted">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <div className="z-10 items-center text-center">
              <h1 className="mb-8 text-4xl font-semibold text-pretty lg:text-7xl bg-gradient-to-b from-background to-foreground bg-clip-text text-transparent">
                Grow with Bright Hood
              </h1>
              <p className="mx-auto max-w-screen-md text-muted-foreground lg:text-lg">
                Start your tech journey with confidence. Our mission is to make world-class tech education accessible, practical, and empowering for everyone. Learn the skills that power the future — from web and mobile development to full-stack projects — with hands-on guidance, real projects, and a supportive community behind you
              </p>
              <div className="mt-12 flex w-full flex-col  justify-center gap-2 sm:flex-row">
                <Link to="/auth/sign-up">
                  <Button size="lg" >

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
