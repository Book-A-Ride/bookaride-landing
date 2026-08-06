export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
  lead?: boolean;
}

// Add new teammates by appending an object to this array —
// the grid and card sizing update automatically.
export const team: TeamMember[] = [
  {
    name: "Houkonnou Emmanuel",
    role: "Founder & CEO",
    initials: "HE",
    bio: "Started Book A Ride after one too many treks between campus and town. Leads product and strategy.",
    lead: true,
  },
  // {
  //   name: "Temitope Okon",
  //   role: "Head of Operations",
  //   initials: "TO",
  //   bio: "Keeps drivers verified, routes running and every ride on schedule.",
  // },
  // {
  //   name: "Chidera Nwosu",
  //   role: "Lead Engineer",
  //   initials: "CN",
  //   bio: "Builds the booking system students rely on every day.",
  // },
  // {
  //   name: "Bolaji Fashola",
  //   role: "Growth Lead",
  //   initials: "BF",
  //   bio: "Grows the driver network and gets the word out on campus.",
  // },
];
