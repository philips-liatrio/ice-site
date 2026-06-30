// ============================================================================
//  COACHES — teams and bios, captured from icebaseball.org/coaches.
//  To edit: change the text between the quotes. To add a team, copy a block.
//  - photo:   filename in src/assets/coaches/ (or null for a branded placeholder)
//  - focal:   CSS object-position for the banner crop, e.g. "center 25%"
//             (lower the % to show more of the top — useful when a face is high)
// ============================================================================

export interface Team {
  ageGroup: string; // e.g. "17/18" — shown as a chip
  name: string; // team name, e.g. "Team Ice Select Olmeda"
  coaches: string; // coach names line, e.g. "Eddie Olmeda & Travis Hobbensiefken"
  bio?: string; // combined bio (omit for pending teams)
  location?: "Knoxville" | "Chattanooga";
  pending?: boolean;
  photo?: string | null;
  photoAlt?: string;
  focal?: string; // object-position for the banner image (default "center 30%")
}

export const teams: Team[] = [
  {
    ageGroup: "17/18",
    name: "Team Ice Select Olmeda",
    coaches: "Eddie Olmeda & Travis Hobbensiefken",
    location: "Knoxville",
    photo: "IMG_2539.jpeg",
    photoAlt: "Eddie Olmeda in his Johnson University uniform",
    focal: "center 30%",
    bio: "Eddie Olmeda, from Blythewood, SC, originally played at Lancaster. There, he achieved first team all-conference, along with runner-up conference player of the year. He coached a legion team in SC last summer, and he is currently playing at Johnson University. Travis is from Chino, CA, where he played at Mt. San Antonio College. He also has experience playing within the Perfect Game Collegiate Baseball League.",
  },
  {
    ageGroup: "17/18",
    name: "Ice White Swigert",
    coaches: "Matthew Swigert & Jaxon Adams",
    location: "Knoxville",
    photo: "IMG_8541.jpg",
    photoAlt: "Ice White Swigert coach celebrating on the basepaths",
    focal: "center 45%",
    bio: "Matthew played at Oak Ridge High School, where he then went on to play at King University. He brings great knowledge and experience as an outstanding athlete throughout his career. Matthew is committed to sharing his knowledge of the game to our athletes while providing them with opportunities to take their game to the next level. His assistant, Jaxon Adams, grew up playing with Matthew as well at Oak Ridge.",
  },
  {
    ageGroup: "17/18",
    name: "Ice Chatt",
    coaches: "",
    location: "Chattanooga",
    pending: true,
  },
  {
    ageGroup: "16",
    name: "Team Ice Cusey",
    coaches: "Nolan Cusey & David Grimes",
    location: "Knoxville",
    photo: "IMG_0449.png",
    photoAlt: "Team Ice Cusey coach in the field",
    focal: "center 40%",
    bio: "Nolan Cusey, originally from Dana Point, California, began collegiately at Irvine Valley College. He went on to further and complete his collegiate career at Johnson University. Nolan will help manage Ice Baseball as we are expanding our reach into Chattanooga, Cleveland, and Athens areas moving forward.",
  },
  {
    ageGroup: "16",
    name: "Ice White Wessel",
    coaches: "Cole Wessel & Chris Peters",
    location: "Knoxville",
    photo: "IMG_0422.png",
    photoAlt: "Ice White Wessel coach in a Knoxville Central uniform",
    focal: "center 50%",
    bio: "Cole Wessel and Chris Peters both attended Knoxville Central High School. Cole furthered his collegiate career while he currently plays at Milligan University, and Chris is currently playing at Roane State Community College.",
  },
  {
    ageGroup: "15",
    name: "Team Ice Vest",
    coaches: "Luke Vest & Blake Courson",
    location: "Knoxville",
    photo: "IMG_8166.png",
    photoAlt: "Luke Vest at bat in a Johnson University Royals uniform",
    focal: "center 48%",
    bio: "Luke Vest is our owner of Ice Baseball. He played at Johnson, where he went on to become an assistant coach. He is now coaching at Hardin Valley Academy. Luke is committed to preparing athletes to develop and compete moving forward.",
  },
  {
    ageGroup: "15/16",
    name: "Ice Chatt",
    coaches: "",
    location: "Chattanooga",
    pending: true,
  },
  {
    ageGroup: "14",
    name: "Team Ice Pointer",
    coaches: "Jacob Pointer & Brandon Casteel",
    location: "Knoxville",
    photo: "IMG_8364_Original.jpg",
    photoAlt: "Team Ice Pointer coach pitching in a collegiate game",
    focal: "center 35%",
    bio: "Jacob played at Knoxville Central High School, and Brandon played at William Blount High School. Jacob went on to play at Roane State Community College, and Brandon went on to play at Bryan College where he plays currently.",
  },
  {
    ageGroup: "13/14",
    name: "Ice White Sparks",
    coaches: "Jax Sparks, Cameron Dillon, & Ty Sowards",
    location: "Knoxville",
    photo: "IMG_5621.jpeg",
    photoAlt: "Jax Sparks in a Tennessee Tech uniform",
    focal: "center 22%",
    bio: "Jax, Cameron, and Ty played high school baseball together at Hardin Valley Academy. Jax is committed to Tennessee Tech University, while Cameron and Ty are both committed to Pellissippi State Community College.",
  },
  {
    ageGroup: "13/14",
    name: "Ice Chatt",
    coaches: "",
    location: "Chattanooga",
    pending: true,
  },
  {
    ageGroup: "13",
    name: "Team Ice Lyons",
    coaches: "Tre Lyons & Noah Lyons",
    location: "Knoxville",
    photo: "IMG_9301.jpg",
    photoAlt: "Ice Lyons coach fielding in a Knoxville Central uniform",
    focal: "center 35%",
    bio: "Tre and Noah are brothers, and both played at Knoxville Central High School. Tre is currently playing at Johnson University, and Noah is committed to play for Milligan University.",
  },
  {
    ageGroup: "12",
    name: "Ice",
    coaches: "",
    location: "Knoxville",
    pending: true,
  },
  {
    ageGroup: "11/12",
    name: "Ice Chatt",
    coaches: "",
    location: "Chattanooga",
    pending: true,
  },
  {
    ageGroup: "11",
    name: "Ice White Tremblay",
    coaches: "Jacob Tremblay & Matthew Hebar",
    location: "Knoxville",
    photo: "IMG_0972.jpeg",
    photoAlt: "Ice White Tremblay coach pitching in a South Doyle uniform",
    focal: "center top",
    bio: "Jacob Tremblay and his assistant, Matthew Hebar, played at South Doyle High School. Jacob went on to play at Johnson University, and Matthew went on to play at Alice Lloyd College.",
  },
  {
    ageGroup: "9/10",
    name: "Ice White Lewis",
    coaches: "Andrew Lewis, Aidan Murphy, & Boone Fields",
    location: "Knoxville",
    photo: "IMG_0128.jpeg",
    photoAlt: "Ice White Lewis coach fielding in a Hardin Valley Hawks uniform",
    focal: "center 30%",
    bio: "Andrew Lewis, Boone Fields, and Aidan Murphy all attended Hardin Valley Academy, where Andrew and Aidan made the decision to continue their academic and athletic careers at Pellissippi State Community College.",
  },
];
