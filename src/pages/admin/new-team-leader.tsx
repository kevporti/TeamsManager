import { useState } from 'react';
import { type NextPage } from 'next';
import Sidebar from '../../components/sidebar';
import TeamLeaderForm from '../../components/TeamLeaderForm';
import OfficeForm from '../../components/OfficeForm';

const NewTeamLeader: NextPage = () => {
  const [formStep, setFormStep] = useState<1 | 0>(0);

  return (
    <div className='flex h-screen w-full items-center bg-cool-gray-900'>
      <Sidebar />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
      />
      <div className='flex w-full justify-center'>
        <div className='relative flex max-w-xl flex-grow flex-col gap-2 rounded-md p-12 text-gray-300 sm:gap-8 sm:bg-cool-gray-700 sm:p-8'>
          <section className={`${formStep == 0 ? 'block' : 'hidden'} flex flex-col gap-2 sm:gap-8`}>
            <OfficeForm setFormStep={setFormStep} />
          </section>
          <section className={`${formStep == 1 ? 'block' : 'hidden'} flex flex-col gap-2 sm:gap-8`}>
            <TeamLeaderForm setFormStep={setFormStep} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default NewTeamLeader;
