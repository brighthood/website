import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Courses = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-6">
          <h2 className="text-4xl font-semibold text-center text-pretty lg:text-5xl">
            Courses
          </h2>
          {/* <div className="flex flex-col justify-between gap-10 md:flex-row">
            <p className="max-w-screen-md text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              odio, expedita neque ipsum pariatur suscipit!
            </p>

          </div> */}
          <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
            <div className="flex w-full flex-col rounded-lg border p-6 text-left">
              <Badge className="mb-8 block w-fit">FREE</Badge>
              <span className="text-4xl font-medium">$0</span>
              <p className="invisible text-muted-foreground">Per month</p>
              <Separator className="my-6" />
              <div className="flex flex-col justify-between gap-20">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Unlimited Integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Windows, Linux, Mac support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>24/7 Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Free updates</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
            <div className="flex w-full flex-col rounded-lg border p-6 text-left">
              <Badge className="mb-8 block w-fit">FREE</Badge>
              <span className="text-4xl font-medium">$0</span>
              <p className="invisible text-muted-foreground">Per month</p>
              <Separator className="my-6" />
              <div className="flex flex-col justify-between gap-20">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Unlimited Integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Windows, Linux, Mac support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>24/7 Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Free updates</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
            <div className="flex w-full flex-col rounded-lg border p-6 text-left">
              <Badge className="mb-8 block w-fit">FREE</Badge>
              <span className="text-4xl font-medium">$0</span>
              <p className="invisible text-muted-foreground">Per month</p>
              <Separator className="my-6" />
              <div className="flex flex-col justify-between gap-20">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Unlimited Integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Windows, Linux, Mac support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>24/7 Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Free updates</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
            <div className="flex w-full flex-col rounded-lg border p-6 text-left">
              <Badge className="mb-8 block w-fit">FREE</Badge>
              <span className="text-4xl font-medium">$0</span>
              <p className="invisible text-muted-foreground">Per month</p>
              <Separator className="my-6" />
              <div className="flex flex-col justify-between gap-20">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Unlimited Integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Windows, Linux, Mac support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>24/7 Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Free updates</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export { Courses };
