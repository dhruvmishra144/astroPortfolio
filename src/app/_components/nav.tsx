//icons
import { HiHome, HiUser, HiViewColumns, HiEnvelope, HiMiniDocumentText } from 'react-icons/hi2';

//next link
import TransitionLink from './transition-link';
import { Fragment } from 'react';

//nav data
export const navData = [
  {
    name: 'home',
    path: '/',
    icon: <HiHome />
  },
  {
    name: 'about',
    path: '/about',
    icon: <HiUser />
  },
  {
    name: 'cv',
    path: '/cv',
    icon: <HiMiniDocumentText />
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];
const Nav = () => {
    return (
        <div className='flex gap-5'>
            {navData.map((link, index) => {
                return <TransitionLink href={`${link.path}`} label={`${link.name}`} icon={`${link.icon}`}></TransitionLink>
            })}
        </div>
    );
}

export default Nav; 