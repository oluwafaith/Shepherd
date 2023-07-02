import { AiTwotoneHome } from 'react-icons/ai';
import { BsPlayCircle } from 'react-icons/bs';
import {
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';

import {
  RiBriefcaseLine,
  RiCalendar2Fill,
  RiMessage2Line,
} from 'react-icons/ri';
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
