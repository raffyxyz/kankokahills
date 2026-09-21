import { RouteStep, TransportOption } from "./types";

export interface DirectionsContent {
  eyebrow: string;
  title: string;
  description: string;
  departurePoint: string;
  routeSteps: RouteStep[];
  transportOptions: TransportOption[];
  travelAdvisories: string[];
}

export const directionsContent: DirectionsContent = {
  eyebrow: "Getting Here",
  title: "How to Reach Kankoka Hills",
  description:
    "Located in Candijay on the eastern coast of Bohol, Kankoka Hills is accessible by motorcycle or private vehicle from Candijay town proper.",
  departurePoint: "Starting Point: Candijay Town Proper (Municipal Center)",
  routeSteps: [
    {
      stepNumber: 1,
      title: "Arrive in Candijay, Bohol",
      instruction:
        "From Tagbilaran City or Panglao, travel east via the coastal national highway to Candijay town center (approximately 2 to 2.5 hours by bus, van, or private car).",
      note: "Public buses and vans depart regularly from Dao Integrated Bus Terminal in Tagbilaran.",
    },
    {
      stepNumber: 2,
      title: "Depart Candijay Town Proper",
      instruction:
        "From the Candijay municipal plaza or market junction, arrange local transport or navigate toward the barangay route leading inland to Kankoka Hills.",
      note: "Road condition notice: [TODO: road condition].",
    },
    {
      stepNumber: 3,
      title: "Ascend to the Summit Jump-Off",
      instruction:
        "Follow the scenic winding inland road as it ascends the hills toward the viewpoint jump-off area.",
      note: "Parking area available for motorcycles and private vehicles [TODO: parking fee].",
    },
    {
      stepNumber: 4,
      title: "Walk to the Viewpoint Crest",
      instruction:
        "From the vehicle drop-off, take the short walk to the summit observatory deck and panoramic ridge.",
      note: "Estimated summit walk duration: [TODO: hike duration].",
    },
  ],
  transportOptions: [
    {
      mode: "Habal-Habal (Motorcycle Taxi)",
      travelTime: "20–30 mins from town proper",
      description:
        "The most popular and nimble way to climb the hill roads. Local drivers at Candijay town center know the terrain well [TODO: habal-habal fare estimate].",
      iconType: "motorcycle",
      recommended: true,
    },
    {
      mode: "Private Car / SUV / Rental",
      travelTime: "20–30 mins from town proper",
      description:
        "Convenient for families and groups. High-clearance vehicles or SUVs are recommended for rural mountain roads.",
      iconType: "car",
    },
    {
      mode: "Chartered Tour Van",
      travelTime: "Full-day Candijay circuit",
      description:
        "Ideal when combining Kankoka Hills with nearby wonders like Cadapdapan Rice Terraces and Can-umantad Falls.",
      iconType: "van",
    },
  ],
  travelAdvisories: [
    "Offline Maps: Cellular coverage may fluctuate in rural valleys; download Candijay offline maps prior to departure.",
    "Combined Itinerary: Pair your visit with Candijay's other icons (Can-umantad Falls and Cadapdapan Rice Terraces are within the municipality).",
    "Return Transport: If hiring a habal-habal, arrange for your driver to wait or schedule your return pick-up time in advance.",
  ],
};
