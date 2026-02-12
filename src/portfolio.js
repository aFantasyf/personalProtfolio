const header = {
  // all the properties are optional - can be left empty or deleted
  title: 'Welcome to my Portfolio!'
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aayan Farooqui',
  role: 'Full-Stack Engineer',
  picture: 'ion.jpg',

  description:
    'I’m a graduate of George Brown College and currently pursuing further studies at McMaster University, where I’m deepening my knowledge of web development. Driven by curiosity, I’m always exploring new tools and approaches to build better digital experiences.',
  resume: 'https://docs.google.com/document/d/1YCPbLpOfA2GQozv4tJCgIQRpzRKh4PuI3lg5cYrnwYo/edit?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/aayan-farooqui-891871302/',
    github: 'https://github.com/aFantasyf',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Flight Manager',
    description:
      'Developed a full-featured Flight Manager application using Java and Docker. The system supports secure user sign-in and sign-out, and allows users to book, edit, and delete flights with ease. Designed to be modular and containerized for consistent deployment across environments.',
    stack: ['Java, Docker'],
    sourceCode: 'https://github.com/MashaPotatoe/Comp3095_Assignment1',
    image: 'plane.jpg',
  },
  {
    name: 'LEMMA',
    description:
      'A creative social media platform designed to feel more personal and interactive. Users are able to sign up, log in, and follow others. Expressing their creativity through posting "pages" with images, ribbons, and stickers to customize their space. The application was focused on making the experience engaging and visually expressive, turning everyday posting into something more playful.',
    stack: ['Javascript', 'React Native', 'SupaBase'],
    sourceCode: 'https://github.com/edwinchung03/T02_Capstone',
    livePreview: 'https://github.com/aFantasyf/LivePreview',
    image: 'diaryicon.png',
  },
  {
    name: 'Chat App',
    description:
      'Developed a real-time chat application that enables users to communicate seamlessly with one another. Leveraged MongoDB to efficiently store user profiles and message history, ensuring data persistence and quick retrieval. Focused on creating a clean, responsive experience for end users.',
    stack: ['Javascript', 'CSS', 'Mongoose', 'HTML', 'MongoDB'],
    sourceCode: 'https://github.com/aFantasyf/JavaScript-Chat-App',
    image: 'back.jpg'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Material UI',
  'Git',
  'CI/CD',
  'Mongo DB',
  'Mongoose',
  'ABAP',
  'ASP.NET',
  'Swift',
  'NodeJs',
  'Java',
  'React Native',
  'Docker'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'aayanf3942@gmail.com',
}

export { header, about, projects, skills, contact }
