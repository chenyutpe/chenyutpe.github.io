export type AwardType = 'BEST_PAPER' | 'HONORABLE_MENTION' | 'NONE';

// The shared properties all items have
interface BaseWorkItem {
  id: string;
  title: string;
  authors: string;
  description: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  awardType?: AwardType;
  videoUrl?: string;
  externalUrl?: { label: string; url: string };
  tags?: string[];
}

export interface PublicationItem extends BaseWorkItem {
  type: 'publication';
  venue: string;
  date: string; // e.g., "2026-04"
  doi?: string;
  pdfUrl?: string;
}

export interface ProjectItem extends BaseWorkItem {
  type: 'project';
  venue?: string;
  startDate: string; // e.g., "2025-09"
  endDate: string;   // e.g., "2026-03" or "Present"
}

export type WorkItem = PublicationItem | ProjectItem;

export const featuredWorks: WorkItem[] = [
  {
    id: "publication_10",
    type: 'publication',
    date: "2026-04-13",
    title: "Reacquainting with Everyday Urban Nature: Exploring Natural Soundscape Restoration with Personal Audio AR",
    venue: "CHI '26  Paper",
    awardType: 'BEST_PAPER',
    authors: "Yu Chen, Yu-Cheng Chang*, Yu Lun Hsu*, Mike Y. Chen.",
    description: "",
    mediaUrl: "/works/publication_10.mp4",
    mediaType: 'video',
    doi: "10.1145/3772318.3791961",
    videoUrl: "https://youtube.com/...",
  },
  {
    id: "project_1",
    type: 'project',
    startDate: "2025-08",
    endDate: "2026-03",
    title: "Birdsong of the Island",
    venue: "IU-Taiwan Music Project: Resonant Island",
    authors: "Yu Chen",
    description: "An interactive web application that transforms live concerts into immersive, participatory soundscapes. The work has been featured across several venues at Indiana University.",
    mediaUrl: "/works/project_01.mp4",
    mediaType: 'video',
    externalUrl: { label: "Concert Recordings", url: "https://easc.indiana.edu/programs/taiwan-studies-initiative/fall-2025-collaborations-concert.html" }
  }
];

export const allPublications: PublicationItem[] = [
  {
    id: "publication_10",
    type: 'publication',
    date: "2026-04-13",
    title: "Reacquainting with Everyday Urban Nature: Exploring Natural Soundscape Restoration with Personal Audio AR",
    venue: "CHI '26  Paper",
    awardType: 'BEST_PAPER',
    authors: "Yu Chen, Yu-Cheng Chang*, Yu Lun Hsu*, Mike Y. Chen.",
    description: "TBD",
    mediaUrl: "/works/publication_10.mp4",
    mediaType: 'video',
    doi: "10.1145/3772318.3791961",
    videoUrl: "https://youtube.com/...",
  },
  {
    id: "publication_09",
    type: 'publication',
    date: "2025-09-27",
    title: "GenTune: Toward Traceable Prompts to Improve Controllability of Image Refinement in Environment Design",
    venue: "UIST '25 Paper",
    authors: "Wen-Fan Wang, Ting-Ying Lee, Chien-Ting Lu, Che-Wei Hsu, Nil Ponsa Campanyà, Yu Chen, Mike Y. Chen, Bing-Yu Chen.",
    description: "TBD",
    mediaUrl: "/works/publication_09.mp4",
    mediaType: 'video',
    doi: "10.1145/3746059.3747774"
  },
  {
    id: "publication_08",
    type: 'publication',
    date: "2025-04-25",
    title: "HeadTurner: Enhancing Viewing Range and Comfort of using Virtual and Mixed-Reality Headsets while Lying Down via Assisted Shoulder and Head Actuation",
    venue: "CHI '25 Paper",
    authors: "En-Huei Wu, Po-Yun Cheng, Che-Wei Hsu, Cheng Hsin Han, Pei Chen Lee, Chia-An Fan, Yu Chia Kuo, Kai-Jing Hu, Yu Chen, Mike Y. Chen.",
    description: "TBD",
    mediaUrl: "/works/publication_08.mp4",
    mediaType: 'video',
    doi: "10.1145/3706598.3714214"
  },
  {
    id: "publication_07",
    type: 'publication',
    date: "2024-10-11",
    title: "SpinShot: Optimizing Both Physical and Perceived Force Feedback of Flywheel-Based, Directional Impact Handheld Devices",
    venue: "UIST '24 Paper",
    authors: "Chia-An Fan, En-Huei Wu, Chia-Yu Cheng, Yu-Cheng Chang, Alvaro Lopez, Yu Chen, Chia-Chen Chi, Yi-Sheng Chan, Ching-Yi Tsai, Mike Y. Chen.",
    description: "TBD",
    mediaUrl: "/works/publication_07.mp4",
    mediaType: 'video',
    doi: "10.1145/3654777.3676433"
  },
  {
    id: "publication_06",
    type: 'publication',
    date: "2024-09-24",
    title: "Experience from Designing Augmented Reality Browsing Interfaces for Real-world Walking Scenarios",
    venue: "MobileHCI '24 Paper",
    authors: "Yu-Cheng Chang, Yen-Pu Wang, Chiao-Ju Chang, Wei Tian Mireille Tan, Yu Lun Hsu, Yu Chen, Mike Y. Chen.",
    description: "TBD",
    mediaUrl: "/works/publication_06.png",
    mediaType: 'image',
    doi: "10.1145/3676500"
  },
  {
    id: "publication_05",
    type: 'publication',
    date: "2024-07-01",
    title: "Exploring Augmented Reality Interface Designs for Virtual Meetings in Real-world Walking Contexts",
    venue: "DIS '24 Paper",
    awardType: 'HONORABLE_MENTION',
    authors: "Chiao-Ju Chang, Yu Lun Hsu, Wei Tian Mireille Tan, Yu-Cheng Chang, Pin Chun Lu, Yu Chen, Yi-Han Wang, Mike Y. Chen.",
    description: "TBD",
    mediaUrl: "/works/publication_05.png",
    mediaType: 'image',
    doi: "10.1145/3643834.3661538"
  },  
  {
    id: "publication_04",
    type: 'publication',
    date: "2024-05-11",
    title: "Paired-EMS: Enhancing Electrical Muscle Stimulation (EMS)-based Force Feedback Experience by Stimulating Both Muscles in Antagonistic Pairs",
    venue: "CHI '24 Paper",
    authors: "Chia-Yu Cheng, Yu Chen, Sitaresmi Wahyu Handani, Avijit Balabantaray, Mike Y. Chen.",
    description: "TBD",
    mediaUrl: "/works/publication_04.mp4",
    mediaType: 'video',
    doi: "10.1145/3613904.3642841"
  },
  {
    id: "publication_03",
    type: 'publication',
    date: "2024-05-11",
    title: "RoomDreaming: Generative-AI Approach to Facilitating Iterative, Preliminary Interior Design Exploration",
    venue: "CHI '24 Paper",
    authors: "Shun-Yu Wang, Wei-Chung Su, Serena Chen, Ching-Yi Tsai, Marta Misztal, Katherine M. Cheng, Alwena Lin, Yu Chen, Mike Y. Chen.",
    description: "TBD",
    mediaUrl: "/works/publication_03.png",
    mediaType: 'image',
    doi: "10.1145/3613904.3642901"
  },
  {
    id: "publication_02",
    type: 'publication',
    date: "2023-04-19",
    title: "Spelland: Situated Language Learning with a Mixed-Reality Spelling Game through Everyday Objects",
    venue: "CHI EA '23 (Student Game Competition)",
    authors: "Chia Hsu, Yu Chen, Yu-Jung Liu, Yu-Cheng Chang, Min-Jui Lee.",
    description: "TBD",
    mediaUrl: "/works/publication_02.mp4",
    mediaType: 'video',
    doi: "10.1145/3544549.3583830"
  },
  {
    id: "publication_01",
    type: 'publication',
    date: "2023-04-19",
    title: "TurnAhead: Designing 3-DoF Rotational Haptic Cues to Improve First-person Viewing (FPV) Experiences",
    venue: "CHI '23 Paper",
    awardType: 'HONORABLE_MENTION',
    authors: "Bo-Cheng Ke, Min-Han Li, Yu Chen, Chia-Yu Cheng, Chiao-Ju Chang, Yun-Fang Li, Shun-Yu Wang, Chiao Fang, Mike Y. Chen.",
    description: "TBD",
    mediaUrl: "/works/publication_01.mp4",
    mediaType: 'video',
    doi: "10.1145/3544548.3581443"
  },
];