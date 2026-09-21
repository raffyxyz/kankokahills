import { FaqItem } from "./types";

export interface FaqContent {
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
}

export const faqContent: FaqContent = {
  eyebrow: "Frequently Asked Questions",
  title: "Everything You Need to Know",
  description:
    "Find answers to common questions about planning your visit to Kankoka Hills in Candijay, Bohol.",
  items: [
    {
      question: "Where exactly is Kankoka Hills located?",
      answer:
        "Kankoka Hills is situated in the municipality of Candijay on the eastern coast of Bohol, Philippines. It overlooks the valleys, coconut groves, and undulating landscape of Candijay, approximately 2 to 2.5 hours by road from Tagbilaran City.",
    },
    {
      question: "Is there an entrance fee to visit?",
      answer:
        "Fees are maintained by the local barangay / municipality: [TODO: entrance fee]. Please bring Philippine Peso cash in small bills, as digital payment terminals are not available on the mountaintop.",
    },
    {
      question: "What are the visiting hours?",
      answer:
        "Visiting hours are currently noted as [TODO: operating hours]. Most travelers visit either during sunrise (5:30 AM – 7:30 AM) or golden hour leading into sunset (4:30 PM – 6:00 PM) for the best views and cooler temperatures.",
    },
    {
      question: "How difficult is the walk to the summit?",
      answer:
        "The ascent is generally considered easy to moderate. From the vehicle jump-off point, it takes a short walk ([TODO: hike duration]) along an inclined trail or steps to reach the main viewpoint deck and ridge.",
    },
    {
      question: "Can I fly a drone at Kankoka Hills?",
      answer:
        "Drone policy: [TODO: drone & camping rules]. Generally, recreational drone flying is popular due to the dramatic rolling terrain, provided you fly responsibly, respect visitor privacy, and exercise caution in gusty hilltop winds.",
    },
    {
      question: "Is overnight camping allowed at the hills?",
      answer:
        "Camping policy: [TODO: drone & camping rules]. Visitors wishing to camp overnight must verify permission and safety guidelines with the Candijay Municipal Tourism Office before making arrangements.",
    },
    {
      question: "What other attractions can I visit in Candijay?",
      answer:
        "Candijay is one of Bohol's most scenic eco-tourism destinations. You can easily combine Kankoka Hills with Can-umantad Falls (Bohol's tallest waterfall), Cadapdapan Rice Terraces, and the expansive Cogtong Bay Mangrove Forest in a single memorable day trip.",
    },
    {
      question:
        "What is the best way to get there if I don't have a private car?",
      answer:
        "Take a public bus or van from Tagbilaran City (Dao Terminal) to Candijay town proper. From the Candijay public market or junction, hire a local habal-habal (motorcycle taxi) to take you up to Kankoka Hills. Be sure to negotiate a round-trip fare or arrange for your driver to wait.",
    },
  ],
};
