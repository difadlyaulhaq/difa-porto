// src/components/About/experienceData.js
// Import logo images
import freelanceLogo from "../../assets/about/logos/freelance.png";
import amccLogo from "../../assets/about/logos/amcc.png";
import bangkitLogo from "../../assets/about/logos/Bangkit.png";
import amikomLogo from "../../assets/about/logos/amikom.png";

// GANTI DATA INI DENGAN PENGALAMAN ASLI KAMU!
export const experiences = [
  {
    id: 1,
    type: 'work', // work | education | organization | award
    image: freelanceLogo,
    title: 'Independent Freelancer',
    role: 'Mobile & Web Developer',
    period: '2023 - Present',
    location: 'Remote',
    description: 'Delivering high-quality mobile and web solutions for various clients worldwide. Specializing in cross-platform development with Flutter, React Native, and modern web frameworks like Next.js and Astro.',
    highlights: [
      'Built 15+ mobile applications for clients across different industries including e-commerce, healthcare, and education',
      'Worked with international clients from USA, Singapore, and Europe with 100% satisfaction rate',
      'Specialized in Flutter, React Native, and Next.js with focus on performance optimization',
      'Maintained 5-star rating across all projects with repeat client rate of 80%'
    ],
    skills: ['Flutter', 'React Native', 'Next.js', 'Firebase', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    achievements: [
      'Increased client app downloads by 200% through performance optimization',
      'Reduced development time by 40% using component-based architecture and reusable libraries'
    ]
  },
  {
    id: 2,
    type: 'organization',
    image: amccLogo,
    title: 'Amikom Computer Club',
    role: 'Human Resource Department',
    period: 'June 2024 - Present',
    location: 'Yogyakarta, Indonesia',
    description: 'Managing human resources, recruitment processes, and member development programs for Amikom Computer Club, the university\'s largest tech community with 200+ active members.',
    highlights: [
      'Successfully recruited and onboarded 100+ new members through innovative digital campaigns',
      'Organized 10+ technical workshops covering topics from mobile dev to cloud computing',
      'Improved member retention rate from 60% to 85% through better engagement programs',
      'Developed comprehensive onboarding program reducing learning curve by 50%'
    ],
    skills: ['Leadership', 'Event Management', 'Team Building', 'Public Speaking', 'Communication'],
    achievements: [
      'Awarded "Best HR Team of the Year" for outstanding member satisfaction scores',
      'Created inclusive community culture that increased participation by 70%'
    ]
  },
  {
    id: 3,
    type: 'education',
    image: bangkitLogo,
    title: 'Bangkit Academy 2024',
    role: 'Machine Learning Path',
    period: 'Sept 2024 - Dec 2024',
    location: 'Google, GoTo, Traveloka Partnership',
    description: 'Intensive career readiness program led by Google, GoTo, and Traveloka focusing on Machine Learning, Cloud Computing, and professional development with industry-standard curriculum.',
    highlights: [
      'Graduated with distinction from Google-led Machine Learning program',
      'Built capstone project: AI-powered health diagnosis app with 94% accuracy',
      'Collaborated with cross-functional teams (ML engineers, Android devs, Cloud specialists)',
      'Gained hands-on experience with TensorFlow, Keras, and Google Cloud Platform'
    ],
    skills: ['TensorFlow', 'Python', 'Deep Learning', 'Computer Vision', 'Google Cloud Platform', 'Soft Skills'],
    achievements: [
      'Capstone project achieved 94% accuracy in disease prediction using CNN',
      'Received recommendation letter from Google mentor for outstanding performance'
    ]
  },
  {
    id: 4,
    type: 'award',
    image: amikomLogo, // Placeholder
    title: 'Gemastik XVII 2024',
    role: 'UX Design Category - National Finalist',
    period: 'August 2024',
    location: 'National Competition - Ministry of Education',
    description: 'Competed in Gemastik (Indonesia\'s most prestigious IT competition) organized by Ministry of Education. Reached national finals in UX Design category against 500+ teams from top universities.',
    highlights: [
      'Selected as one of top 10 teams from 500+ participants nationwide',
      'Designed innovative solution for elderly healthcare accessibility with focus on usability',
      'Presented solution to panel of industry experts and ministry officials',
      'Received mentorship from senior UX designers at major tech companies like Tokopedia and Gojek'
    ],
    skills: ['UX Design', 'Figma', 'User Research', 'Prototyping', 'Presentation', 'Design Thinking'],
    achievements: [
      'Competed against teams from UI, ITB, ITS, UGM and other top universities',
      'Design solution praised for innovation, usability, and strong social impact'
    ]
  },
  {
    id: 5,
    type: 'award',
    image: amccLogo, // Placeholder
    title: 'Tech Innovation Hackathon 2024',
    role: 'Full-Stack Mobile Development - 1st Place',
    period: 'March 2024',
    location: 'Yogyakarta',
    description: 'Won first place in 48-hour hackathon by building innovative waste management solution using IoT sensors, mobile app, and real-time data analytics.',
    highlights: [
      'Led team of 4 developers to victory against 30+ competing teams',
      'Built complete IoT-enabled waste tracking system in just 48 hours',
      'Implemented real-time monitoring dashboard with Firebase and Flutter',
      'Secured Rp 15,000,000 prize money and incubation program offer from local government'
    ],
    skills: ['Flutter', 'Firebase', 'IoT', 'Arduino', 'Rapid Prototyping', 'Team Leadership'],
    achievements: [
      'Judges highlighted exceptional technical execution and real-world applicability',
      'Solution adopted by local waste management company for pilot program'
    ]
  },
  {
    id: 6,
    type: 'organization',
    image: amccLogo,
    title: 'Amikom Computer Club',
    role: 'Head of Mobile Programming Division',
    period: 'Dec 2023 - June 2024',
    location: 'Yogyakarta, Indonesia',
    description: 'Led mobile development division with 40+ members. Created comprehensive curriculum, mentored junior developers, and oversaw multiple mobile app projects.',
    highlights: [
      'Mentored 30+ junior developers in Flutter, React Native, and mobile best practices',
      'Launched 5 successful mobile projects with combined 50,000+ downloads',
      'Organized weekly coding sessions, code reviews, and mobile dev workshops',
      'Increased division member skill ratings by 65% based on project assessments'
    ],
    skills: ['Mentorship', 'Flutter', 'React Native', 'Project Management', 'Curriculum Design'],
    achievements: [
      '3 mentees won individual competitions during mentorship period',
      'Division projects featured in university showcase and received funding'
    ]
  },
  {
    id: 7,
    type: 'education',
    image: amikomLogo,
    title: 'Universitas Amikom Yogyakarta',
    role: 'Bachelor of Informatics',
    period: '2022 - Present',
    location: 'Yogyakarta, Indonesia',
    description: 'Pursuing Bachelor\'s degree in Informatics with focus on Software Engineering, Mobile Development, and Machine Learning. Active participant in multiple student organizations and competitions.',
    highlights: [
      'Maintaining cumulative GPA of 3.75/4.00 (Dean\'s List for 4 consecutive semesters)',
      'Active member in 3+ student organizations including tech communities',
      'Completed 12+ major projects including web apps, mobile apps, and ML systems',
      'Participated in 5+ national-level competitions with multiple finalist achievements'
    ],
    skills: ['Algorithms', 'Data Structures', 'Software Engineering', 'Database Systems', 'Web Development', 'Mobile Development'],
    achievements: [
      'Dean\'s List Award for 4 consecutive semesters',
      'Best Final Project Award nominee for innovative mobile solution'
    ]
  },
];

export const typeConfig = {
  work: {
    icon: 'Briefcase',
    label: 'Work Experience',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30'
  },
  education: {
    icon: 'GraduationCap',
    label: 'Education',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30'
  },
  organization: {
    icon: 'Users',
    label: 'Organization',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30'
  },
  award: {
    icon: 'Trophy',
    label: 'Achievement',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30'
  }
};
