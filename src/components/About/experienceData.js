// src/components/About/experienceData.js

import alfajrImg from "../../assets/about/experience/alfajr_work.png"; 
//bangkit
import bangkitImg from "../../assets/about/experience/bangkit_cert.png"; 
import bangkitImg2 from "../../assets/about/experience/Bangkit-meet.png";
//amcc
import amccImg from "../../assets/about/experience/amcc_activity1.jpg";
import amccImg2 from "../../assets/about/experience/amcc_activity2.jpg"; 
import amccImg3 from "../../assets/about/experience/amcc_activity3.jpg";
import amccImg4 from "../../assets/about/experience/amcc_activity4.jpg";
//competition
import competitionImg from "../../assets/about/experience/winning_moment.jpg";
import competitionImg2 from "../../assets/about/experience/winning_moment4.webp";
import competitionImg3 from "../../assets/about/experience/winning_moment3.webp";
import competitionImg4 from '../../assets/about/experience/winning_moment2.png';
import competitionImg5 from '../../assets/about/experience/winning_moment5.png';
//amikom
import campusImg from "../../assets/about/experience/campus_life.png";



// Import logos
import freelanceLogo from "../../assets/about/logos/freelance.png";
import amccLogo from "../../assets/about/logos/amcc.png";
import bangkitLogo from "../../assets/about/logos/Bangkit.png";
import amikomLogo from "../../assets/about/logos/amikom.png";
import alfajrLogo from "../../assets/about/logos/Alfajr-umroh.png";

export const experiences = [
  {
    id: 1,
    type: 'work',
    image: alfajrImg,
    logo: alfajrLogo,
    title: 'Software Developer (Freelance)',
    role: 'Alfajr Umroh',
    period: 'Nov 2025 - Dec 2025',
    location: 'Remote',
    description: 'Took on the challenge of building a "Zero-Leak" e-learning ecosystem for corporate training. The goal was to create a platform as secure as it is seamless.',
    highlights: [
      'Engineered a "Hybrid Guard" system using Next.js 15 and Capacitor to prevent data leaks.',
      'Developed proactive screen protection: anti-screenshot, anti-recording, and smart blur technology.',
      'Implemented logic to enforce 90% video watch-time before lesson completion.',
      'Built a full-featured Admin Dashboard for tracking employee progress and exporting data.'
    ],
    skills: ['Next.js 15', 'TypeScript', 'Firebase', 'System Security', 'Capacitor'],
    achievements: [
      'Successfully delivered a high-security platform protecting sensitive internal company data.',
      'Mastered the integration of web-to-mobile wrappers with native security modules.'
    ]
  },
  {
    id: 2,
    type: 'education',
    image: [bangkitImg, bangkitImg2],
    logo: bangkitLogo,
    title: 'Bangkit Academy By Google, GoTo, Traveloka',
    role: 'Machine Learning Cohort (Distinction Graduate)',
    period: 'Sept 2024 - Dec 2024',
    location: 'Remote',
    description: 'Selected as a top student for this intensive career accelerator. I spent 900+ hours diving deep into the math and code behind Artificial Intelligence.',
    highlights: [
      'Graduated with Distinction (Top Tier Performance).',
      'Specialized in Deep Learning, NLP, and Computer Vision using TensorFlow.',
      'Built "WISE" as a Capstone Project: An AI app that identifies wounds via camera and suggests first aid.',
      'Optimized heavy ML models to run smoothly on mobile devices using TFLite.'
    ],
    skills: ['Machine Learning', 'TensorFlow', 'Computer Vision', 'Python', 'Soft Skills'],
    achievements: [
      'Earned the TensorFlow Developer Professional Certificate from DeepLearning.AI.',
      'Combined mobile dev skills with AI to create practical, life-saving technology.'
    ]
  },
  {
    id: 3,
    type: 'organization',
    image: [amccImg,amccImg2,amccImg3,amccImg4],
    logo: amccLogo,
    title: 'Amikom Computer Club (AMCC)',
    role: 'Coordinator & Mentor',
    period: 'Nov 2023 - Nov 2025',
    location: 'Yogyakarta',
    description: 'Where I learned that code is better when shared. I transitioned from a mentor to a leader, managing people and technical divisions in one of the largest tech communities on campus.',
    highlights: [
      'Led the Mobile Programming Division, mentoring 180+ students in Flutter development.',
      'Later served in Human Resources, managing recruitment and talent development for the organization.',
      'Designed curriculums and taught classes to 600+ newcomers interested in tech.',
      'Fostered a culture of innovation and collaborative learning.'
    ],
    skills: ['Leadership', 'Public Speaking', 'Mentoring', 'Event Management', 'Flutter'],
    achievements: [
      'Helped hundreds of students write their first lines of mobile code.',
      'Successfully managed the "people" side of a tech organization.'
    ]
  },
  {
    id: 4,
    type: 'award',
    image: [competitionImg, competitionImg2, competitionImg3,competitionImg4,competitionImg5],
    logo: amikomLogo, // Placeholder
    title: 'Competitive Achievements',
    role: 'National Winner & Finalist',
    period: '2024 - 2025',
    location: 'Indonesia',
    description: 'I love testing my skills against the best. Participating in hackathons and competitions pushes me to innovate under pressure.',
    highlights: [
      '🏆 1st Place (Juara Utama): AI Ignition Informatics 2024.',
      '🥈 Joint Winner (Juara Harapan): "Budaya Go" - Ministry of Culture RI 2025.',
      '🥉 Finalist: App Development Competition MAGE 11 at ITS 2025.',
      '🏅 3rd Runner Up: National IT Competition at Amikom Purwokerto 2025.'
    ],
    skills: ['Innovation', 'Pitching', 'Rapid Prototyping', 'Teamwork'],
    achievements: [
      'Consistently recognized at the national level for innovation in AI Development and Software Engineering.'
    ]
  },
  {
    id: 5,
    type: 'education',
    image: campusImg,
    logo: amikomLogo,
    title: 'Universitas Amikom Yogyakarta',
    role: 'Bachelor of Informatics',
    period: '2022 - Present',
    location: 'Yogyakarta',
    description: 'Currently pursuing my degree with a focus on Software Engineering. I strive to apply every theory I learn in class directly to real-world projects.',
    highlights: [
      'Current GPA: 3.71 / 4.00.',
      'Thesis Topic: Applying Transformer Models for Named Entity Recognition (NER) in literature.',
      'Active participant in bridging the gap between academic research and practical industry application.'
    ],
    skills: ['Data Structures', 'Algorithms', 'Academic Research', 'Critical Thinking'],
    achievements: [
      'Maintained academic excellence while working as a freelancer and organization leader.'
    ]
  }
];

export const typeConfig = {
  work: {
    icon: 'Briefcase',
    label: 'Professional Work',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30'
  },
  education: {
    icon: 'GraduationCap',
    label: 'Education & Training',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30'
  },
  organization: {
    icon: 'Users',
    label: 'Leadership & Community',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30'
  },
  award: {
    icon: 'Trophy',
    label: 'Awards & Honors',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30'
  }
};