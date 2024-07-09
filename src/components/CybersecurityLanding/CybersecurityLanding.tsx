import React from 'react';
import Header from './Header';
import RiskAssessmentTabs from './RiskAssessmentTabs';
import SecurityInfo from './SecurityInfo';

const CybersecurityLanding: React.FC = () => {
  return (
    <main className='flex flex-col items-center justify-center h-screen max-w-[1268px] px-6 container mx-auto'>
      <Header />
      <section className='flex flex-col mt-16 w-full'>
        <RiskAssessmentTabs />
        <SecurityInfo />
      </section>
    </main>
  );
};

export default CybersecurityLanding;
