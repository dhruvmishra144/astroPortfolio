//icons
import { HiHome, HiUser, HiViewColumns, HiEnvelope } from 'react-icons/hi2';

//next link
import Link from 'next/link';

//next router
import { useRouter } from 'next/router';

//nav data
export const navData = [
  {
    name: 'home',
    path: '/',
    icon: <HiHome />
  },
  {
    name: 'work',
    path: '/work',
    icon: <HiViewColumns />
  },
  {
    name: 'about',
    path: '/about',
    icon: <HiUser />
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];
const Nav = () => {
    return (
        <div className="flex">
            {navData.map((link, index) => {
                return <Link className={``} href={''}></Link>
            })}
            
        </div>
    );
}

export default Nav; 