'use client';
import { motion } from 'framer-motion';
import React from 'react';
import SecuritySolutionsFlow from '../SecuritySolutions/SecuritySolutionsFlow';

const SecurityInfo: React.FC = () => {
  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <article className='mt-16 w-full'>
      <div className='lg:flex space-y-8 lg:space-y-0 gap-16 flex-wrap lg:flex-nowrap'>
        <motion.div
          className='text-sm leading-6 text-black flex-1 space-y-6'
          initial='hidden'
          animate='visible'
          variants={leftVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className='text-3xl font-bold'>Against Evolving Threats</h2>
          <p className='font-light'>
            Get a clear picture of your organization&apos;s security posture and
            how prepared you are against evolving cyber threats before malicious
            entities, and apply customized recommendations to improve your
            security program.
          </p>
          <button className='justify-center self-start px-5 py-3 font-semibold text-white bg-red-600 rounded-md'>
            Identify Cyber Risks Today
          </button>
        </motion.div>
        <motion.div
          className='flex-1 lg:ml-48 flex justify-center lg:block'
          initial='hidden'
          animate='visible'
          variants={rightVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SecuritySolutionsFlow />
        </motion.div>
      </div>
    </article>
  );
};

export default SecurityInfo;
