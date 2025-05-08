import {
  Code,
  GitBranch,
  List,
  Play,
  Sparkles,
  WandSparkles,
} from "lucide-react";


import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const why = [
  {
    "title": "Freedom",
    "icon": "Code",
    "description": "Gain the freedom to build your own apps, websites, and tools — no limits, just your creativity and skills.",
    "image": "/images/feature.jpg"
  },
  {
    "title": "Career Growth",
    "icon": "GitBranch",
    "description": "Stand out in a competitive job market with real-world tech skills and hands-on project experience.",
    "image": "/images/freedom.jpg"
  },
  {
    "title": "Problem Solving",
    "icon": "List",
    "description": "Learn how to think like a developer and solve complex problems with structured logic and code.",
    "image": "/images/Creativity.jpg"
  },
  {
    "title": "Community",
    "icon": "Play",
    "description": "Join a community of learners and mentors who grow together and support each other’s journey.",
    "image": "/images/dream.jpg"
  },
  {
    "title": "Innovation Power",
    "icon": "Sparkles",
    "description": "Empower yourself to turn ideas into reality — whether it's a startup, automation, or a new product.",
    "image": "/images/Technology.jpg"
  },
  {
    "title": "Future-Ready Skills",
    "icon": "WandSparkles",
    "description": "Stay ahead of the curve by learning in-demand technologies shaping the future of work and society.",
    "image": "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
  }
]


const Why = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h1 className="mb-6 text-4xl font-semibold text-pretty lg:text-5xl">
            Why Do You Need This Course?
          </h1>

          <div className="mt-10 grid grid-cols-1  place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {
              why.map((el) => {
                return (
                  <Card key={el.title} className="bg-card p-2">
                    <CardHeader className="pb-1">

                      <img
                        className="h-40 w-full rounded-tl-md object-cover object-center"
                        src={el.image}
                        alt="placeholder"
                      />
                    </CardHeader>
                    <CardContent className="text-left">
                      <h2 className="mb-1 text-lg font-semibold">{el.title}</h2>
                      <p className="leading-snug text-muted-foreground">
                        {el.description}.
                      </p>
                    </CardContent>
                    <CardFooter className="justify-end pr-0 pb-0">
                      <Code className="size-4" strokeWidth={1} />
                    </CardFooter>
                  </Card>
                );
              })
            }


          </div>
        </div>
      </div>
    </section>
  );
};

export { Why };
// /* eslint-disable */



























// import React from "react";
// import feature from "./../../assets/images/feature.jpg";
// import Dreams from "./../../assets/images/dream.jpg";
// import creativity from "./../../assets/images/creativity.jpg";
// import Freedom from "./../../assets/images/freedom.jpg";
// import technology from "./../../assets/images/technology.jpg";
// import ReasonCard from "../ReasonCard";
// const reasons = [
//   {
//     id: 1,
//     title: "የወደፊት ሕይወትህን ቀይር",
//     description:
//       "ኮድ ማድረግን መማር እርስዎ ያላሰቡትን በሮች ይከፍታል። ይህ ኮርስ ወደ ሙያ፣ ነፃነት እና እድሎች የተሞላ ህይወት የመጀመሪያ እርምጃዎ ነው።",
//     image: feature,
//   },
//   {
//     id: 2,
//     title: "ህልሞችዎን ይገንቡ",
//     description:
//       "ስሜትዎን ወደ እውነታ ይለውጡ። ጅምር ጅምር፣ አፕ መፍጠርም ሆነ ፍሪላንግ፣ ኮድ ማድረግ የሚያምኑትን እንዲገነቡ ኃይል ይሰጥዎታል።",
//     image: Dreams,
//   },
//   {
//     id: 3,
//     title: "ነፃነት እና ተለዋዋጭነት",
//     description:
//       "ኮድ የማድረግ ችሎታ በርቀት ለመስራት፣ ከየትኛውም ቦታ ገቢ ለማግኘት እና በውሎችዎ ህይወት የመኖር ነፃነት ይሰጥዎታል። ከ9-5-5 ገደቦች የሉም።",
//     image: Freedom,
//   },
//   {
//     id: 4,
//     title: "ከወደፊቱ ቀድመው ይቆዩ",
//     description:
//       "ቴክኖሎጂ ወደፊት ነው። አሁን ኮድ ማድረግን በመማር፣ አለም ምንም አይነት ለውጥ ቢመጣ ሁልጊዜ ተፈላጊ በሆኑ ክህሎቶች ላይ ኢንቨስት እያደረጉ ነው።",
//     image: technology,
//   },
//   {
//     id: 5,
//     title: "ገደብ የለሽ ፈጠራን ይክፈቱ",
//     description:
//       "ኮድ መስጠት ቴክኒካል ብቻ አይደለም - የፈጠራ ልዕለ ኃያል ነው። ህይወትን የሚነኩ እና ተፅእኖ የሚፈጥሩ ድር ጣቢያዎችን፣ መተግበሪያዎችን እና ልምዶችን ይገንቡ።",
//     image: creativity,
//   },
//   {
//     id: 6,
//     title: "ገደብ የለሽ ፈጠራን ይክፈቱ",
//     description:
//       "ኮድ መስጠት ቴክኒካል ብቻ አይደለም - የፈጠራ ልዕለ ኃያል ነው። ህይወትን የሚነኩ እና ተፅእኖ የሚፈጥሩ ድር ጣቢያዎችን፣ መተግበሪያዎችን እና ልምዶችን ይገንቡ።",
//     image: creativity,
//   },
// ];

// export default function Why() {
//   return (
//     <div
//       className="max-w-5xl mx-auto px-4 py-10 bg-background dark:bg-dark-background rounded-lg "
//       id="Why"
//     >
//       <h2 className=" text-xl  sm:text-3xl font-bold text-center mb-8 text-darkText  dark:text-dark-darkText">
//         Why do you need this Course ?
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//         {reasons.map((reason) => (
//           <ReasonCard reason={reason} key={reason.id} />
//         ))}
//       </div>
//     </div>
//   );
// }
