import { FaBriefcase, FaGraduationCap, FaBuilding } from 'react-icons/fa';

const timelineItems = [
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2023 May - Present </span>,
    position: 'right',
    icon: <FaBriefcase />,
    title: 'BMS Infosolutions Private Limited',
    subTitle: 'Software Engineer',
    description: 'React JS, Redux Toolkit, React-Router, TailWindCSS, GraphQL, NextJS, MySQL'
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'>2021 Apr - 2023 Apr</span>,
    position: 'left',
    icon: <FaGraduationCap />,
    title: 'Border Security Force',
    subTitle: 'GD Constable',
    description: 'Served as a General Duty Constable in the Border Security Force (BSF), responsible for maintaining border security, performing patrol duties, and ensuring national safety. Developed strong discipline, teamwork, and crisis management skills during the tenure.',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2018 - 2020 </span>,
    position: 'right',
    icon: <FaGraduationCap />,
    title: 'Madanaplle Institute Of Technology And Science College, JNTUA',
    subTitle: 'Master Of Computer Applications',
    description: 'Post Graduation CGPA: 8.03 (80%)',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2015 - 2018 </span>,
    position: 'left',
    icon: <FaBuilding />,
    title: 'SG Govt Degree College, SV University',
    subTitle: 'Bachelor Of Science',
    description: 'B.Sc (M.S.Cs) Total CGPA: 8.31 (83%)',
  },
];


export default timelineItems
