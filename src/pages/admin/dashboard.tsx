import Sidebar from '../../components/sidebar';
import { type NextPage } from 'next';

const Dashboard: NextPage = () => {
  return (
    <div className='flex h-screen w-full items-center bg-cool-gray-900'>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
      />
      <Sidebar />
      dashboard
    </div>
  );
};

export default Dashboard;
