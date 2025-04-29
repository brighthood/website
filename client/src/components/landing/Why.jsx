import React from "react";
import feature from "./../../assets/images/feature.jpg";
import Dreams from "./../../assets/images/dream.jpg";
import creativity from "./../../assets/images/creativity.jpg";
import Freedom from "./../../assets/images/freedom.jpg";
import technology from "./../../assets/images/technology.jpg";
import ReasonCard from "../ReasonCard";
const reasons = [
  {
    id: 1,
    title: "የወደፊት ሕይወትህን ቀይር",
    description:
      "ኮድ ማድረግን መማር እርስዎ ያላሰቡትን በሮች ይከፍታል። ይህ ኮርስ ወደ ሙያ፣ ነፃነት እና እድሎች የተሞላ ህይወት የመጀመሪያ እርምጃዎ ነው።",
    image: feature,
  },
  {
    id: 2,
    title: "ህልሞችዎን ይገንቡ",
    description:
      "ስሜትዎን ወደ እውነታ ይለውጡ። ጅምር ጅምር፣ አፕ መፍጠርም ሆነ ፍሪላንግ፣ ኮድ ማድረግ የሚያምኑትን እንዲገነቡ ኃይል ይሰጥዎታል።",
    image: Dreams,
  },
  {
    id: 3,
    title: "ነፃነት እና ተለዋዋጭነት",
    description:
      "ኮድ የማድረግ ችሎታ በርቀት ለመስራት፣ ከየትኛውም ቦታ ገቢ ለማግኘት እና በውሎችዎ ህይወት የመኖር ነፃነት ይሰጥዎታል። ከ9-5-5 ገደቦች የሉም።",
    image: Freedom,
  },
  {
    id: 4,
    title: "ከወደፊቱ ቀድመው ይቆዩ",
    description:
      "ቴክኖሎጂ ወደፊት ነው። አሁን ኮድ ማድረግን በመማር፣ አለም ምንም አይነት ለውጥ ቢመጣ ሁልጊዜ ተፈላጊ በሆኑ ክህሎቶች ላይ ኢንቨስት እያደረጉ ነው።",
    image: technology,
  },
  {
    id: 5,
    title: "ገደብ የለሽ ፈጠራን ይክፈቱ",
    description:
      "ኮድ መስጠት ቴክኒካል ብቻ አይደለም - የፈጠራ ልዕለ ኃያል ነው። ህይወትን የሚነኩ እና ተፅእኖ የሚፈጥሩ ድር ጣቢያዎችን፣ መተግበሪያዎችን እና ልምዶችን ይገንቡ።",
    image: creativity,
  },
  {
    id: 6,
    title: "ገደብ የለሽ ፈጠራን ይክፈቱ",
    description:
      "ኮድ መስጠት ቴክኒካል ብቻ አይደለም - የፈጠራ ልዕለ ኃያል ነው። ህይወትን የሚነኩ እና ተፅእኖ የሚፈጥሩ ድር ጣቢያዎችን፣ መተግበሪያዎችን እና ልምዶችን ይገንቡ።",
    image: creativity,
  },
];

export default function Why() {
  return (
    <div
      className="max-w-6xl mx-auto px-4 py-8 bg-background dark:bg-dark-background rounded-lg "
      id="Why"
    >
      <h2 className="text-2xl  sm:text-4xl font-bold text-center mb-8 text-darkText dark:text-dark-darkText">
        ለምን ይህን ትምህርት ያስፈልግዎታል?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {reasons.map((reason) => (
          <ReasonCard reason={reason} key={reason.id} />
        ))}
      </div>
    </div>
  );
}
