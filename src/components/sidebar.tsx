import { type NextComponentType } from 'next';
import { useState } from 'react';

const Sidebar: NextComponentType = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const Menus = [
    { title: 'Dashboard', src: 'dashboard' },
    { title: 'New User', src: 'person_add' },
    { title: 'Teams', src: 'group' },
    { title: 'Objects', src: 'devices' },
    { title: 'Profile', src: 'account_circle', penultimate: true },
    { title: 'Log Out', src: 'logout', last: true },
  ];

  return (
    <div className={`${sidebarOpen ? 'w-72' : 'w-20'} relative h-full bg-cool-gray-700 p-5 pt-8 duration-300`}>
      {/* Open/Close button */}
      <i
        className={`${
          !sidebarOpen && 'rotate-180'
        } material-symbols-outlined absolute -right-3 top-9 w-7 cursor-pointer rounded-full border-2 border-cool-gray-700 bg-cool-gray-900 text-cool-gray-700`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        chevron_left
      </i>

      {/* Name of the company */}
      <div className='flex flex-col items-center'>
        <div className=' text-4xl font-bold text-gray-300'>
          <div className='text-[#FEA702]'>T</div> M
        </div>
        <div className={`${!sidebarOpen && 'scale-0'} origin-left text-2xl font-medium duration-200`}>
          <span className='pr-1 text-[#FEA702]'>Teams</span>
          <span className='text-gray-300'>Manager</span>
        </div>
        <hr className={`${!sidebarOpen && 'scale-0'} border-1 mt-4 w-full origin-left border-gray-300 duration-200`} />
      </div>

      {/* Menu list */}
      <ul className='pt-6 text-gray-300'>
        {Menus.map((menu, id) => (
          <li
            key={id}
            className={`${menu.penultimate ? (sidebarOpen ? 'fixed bottom-16 w-60' : 'fixed bottom-16 w-auto') : ''} ${
              menu.last ? (sidebarOpen ? 'fixed bottom-5 w-60' : 'fixed bottom-5 w-auto') : ''
            } text-md my-1 flex cursor-pointer items-center gap-x-4 rounded-md p-2 hover:bg-cool-gray-400`}
          >
            <i className='material-symbols-outlined'>{menu.src}</i>
            <span className={`${!sidebarOpen && 'hidden'} origin-left duration-200`}>{menu.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
