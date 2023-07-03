import { AiTwotoneHome } from 'react-icons/ai';
import { BsPlayCircle } from 'react-icons/bs';
import {
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';
import { FiActivity, FiStar, FiMessageCircle } from 'react-icons/fi';
import {
  RiBriefcaseLine,
  RiCalendar2Fill,
  RiMessage2Line,
} from 'react-icons/ri';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdFace } from 'react-icons/md';

export const SidebarDataB = [
  {
    id: 1,
    url: '/',
    text: 'Ask Shepherd',
    icon: <AiTwotoneHome />,
  },
  {
    id: 2,
    url: '/tutor',
    text: 'Find a tutor',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/messages',
    text: 'Messages',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/library',
    text: 'Library',
    icon: <FaCalendarAlt />,
  },
];
export const SidebarData = [
  {
    id: 1,
    url: '/',
    text: 'Home',
    icon: <AiTwotoneHome />,
  },
  {
    id: 2,
    url: '/tutor',
    text: 'Find a tutor',
    icon: <RiBriefcaseLine />,
  },
  {
    id: 3,
    url: '/messages',
    text: 'Messages',
    icon: <RiMessage2Line />,
  },
  {
    id: 4,
    url: '/library',
    text: 'Library',
    icon: <BsPlayCircle />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
];

export const DropdownData = [
  {
    id: 1,
    text: 'This week',
    icon: <RiCalendar2Fill />,
  },

  {
    id: 2,
    text: 'This week',
    icon: <RiCalendar2Fill />,
  },
  {
    id: 3,
    text: 'This week',
    icon: <RiCalendar2Fill />,
  },
];




export const Activities = [
  {
    title: 'Activity 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'June 28, 2023',
    icon: FiActivity,
  },
  {
    title: 'Activity 2',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'June 29, 2023',
    icon: FiStar,
  },
  {
    title: 'Activity 3',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    date: 'June 30, 2023',
    icon: FiMessageCircle,
  },

];


export const EventData = [
  {
    id: 1,
    icon: <BsArrowRightShort />,
    img: <MdFace />,
    text: 'Chemistry lesson with Leslie Peters',
    start: '3:30',
    end: '4: 30',
    duration: 1,
    color: 'orange',
  },
  {
    id: 1,
    icon: <BsArrowRightShort />,
    img: <MdFace />,
    text: 'Chemistry lesson with Leslie Peters',
    start: '3:30',
    end: '4: 30',
    duration: 1,
    color: 'orange',
  },
];

export const Card = [
  { percent: 40, text: 'Got it right', color: 'green', id: 1 },
  { percent: 40, text: "Don't remember", color: 'orange', id: 2 },
  { percent: 20, text: 'Got it wrong', color: 'red', id: 3 },
];