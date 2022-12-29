import { type NextPage } from 'next';
import TicketForm from '@components/TicketForm';

const Home: NextPage = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-cool-gray-900'>
      <TicketForm />
    </div>
  );
};

export default Home;
