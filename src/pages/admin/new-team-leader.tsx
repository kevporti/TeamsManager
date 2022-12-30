import { type NextPage } from 'next';
import Sidebar from '../../components/sidebar';

const NewTeamLeader: NextPage = () => {
  return (
    <div className='flex h-screen w-full items-center bg-cool-gray-900'>
      <Sidebar />
      <div>Hello from new-team-leader view!</div>
    </div>
  );
};

export default NewTeamLeader;
