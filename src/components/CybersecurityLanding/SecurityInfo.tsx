import React from 'react';
import SecuritySolutionsFlow from '../SecuritySolutions/SecuritySolutionsFlow';

const SecurityInfo: React.FC = () => {
  return (
    <article className='mt-16 w-full'>
      <div className='lg:flex space-y-8 lg:space-y-0 gap-16 flex-wrap lg:flex-nowrap'>
        <div className='text-sm leading-6 text-black flex-1 space-y-6'>
          <h2 className='text-3xl font-bold '>Against Evolving Threats</h2>
          <p className='font-light'>
            Get a clear picture of your organization&apos;s security posture and
            how prepared you are against evolving cyber threats before malicious
            entities, and apply customized recommendations to improve your
            security program.
          </p>
          <button className='justify-center self-start px-5 py-3 font-semibold text-white bg-red-600 rounded-md'>
            Identify Cyber Risks Today
          </button>
        </div>
        <div className='flex-1 lg:ml-48 flex justify-center lg:block'>
          <SecuritySolutionsFlow />
        </div>
      </div>
    </article>
  );
};

export default SecurityInfo;
