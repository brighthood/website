import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface FaqItem {
  id: string;
  question: string;
  answer: string;

}

interface FaqProps {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const faqItems = [
  {
    id: "faq-1",
    question: "How do I get started with your service?",
    answer:
      "Simply sign up for a free account, choose your plan, and follow the onboarding steps to start using our platform immediately.",
  },
  {
    id: "faq-2",
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial for all our premium features. No credit card is required to get started.",
  },
  {
    id: "faq-3",
    question: "Can I cancel my subscription at any time?",
    answer:
      "Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees.",
  },
  {
    id: "faq-4",
    question: "Is my data secure?",
    answer:
      "Yes, we use industry-standard encryption and security practices to ensure your data is safe and protected at all times.",
  },
  {
    id: "faq-5",
    question: "Do you offer team or enterprise plans?",
    answer:
      "Yes, we offer team plans and custom enterprise solutions. Please contact our sales team for more details.",
  },
  {
    id: "faq-6",
    question: "How can I contact technical support?",
    answer:
      "You can reach our support team via live chat, email at support@example.com, or through our support center 24/7.",
  },
  {
    id: "faq-7",
    question: "Can I integrate your service with other tools?",
    answer:
      "Yes, we support integrations with popular tools like Slack, Zapier, Notion, and more. Visit our integrations page for details.",
  },
];



const Faq = ({
  heading = "Frequently asked questions",
  description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
  supportHeading = "Need more support?",
  supportDescription = "Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "https://www.shadcnblocks.com",
}: FaqProps) => {
  return (
    <section className="py-16">
      <div className="container space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground lg:text-lg">Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8">
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-2.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-3.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">
            Need more support?
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto" asChild>
              <a href={supportButtonUrl} target="_blank">
                Contact Support
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq };
