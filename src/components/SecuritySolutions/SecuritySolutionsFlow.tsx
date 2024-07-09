'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import SecuritySolutionBlock from './SecuritySolutionBlock';

const solutionsData = [
  { text: 'SMB Solution', color: 'blue', lineLength: '57px' },
  { text: 'Enterprise Security ', color: 'orange', lineLength: '30px' },
  { text: 'Turkey Security Solution ', color: 'orange', lineLength: '13px' },
  { text: 'Managed Cloud Security', color: 'blue', lineLength: '15px' },
  { text: ' Managed Security Solution', color: 'blue', lineLength: '9px' },
  { text: 'Bug Bounty Program', color: 'orange', lineLength: '37px' },
] as const;

const SecuritySolutionsFlow: React.FC = () => {
  const shownOrder = [0, 3, 1, 4, 2, 5];

  return (
    <section className='max-w-[350px] relative'>
      <Image
        src={'/user.png'}
        alt='user'
        width={270}
        height={270}
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      />
      <div className='flex flex-col items-center justify-between w-full h-full rounded-full aspect-square bg-slate-200 p-4 pt-10 '>
        {solutionsData.map((solution, index) => (
          <motion.div
            key={index}
            className={`flex gap-14 relative ${
              index === 1 || index === 3 ? 'flex gap-10' : ''
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              delay: shownOrder.indexOf(index) * 0.8,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
          >
            <SecuritySolutionBlock
              text={solution.text}
              color={solution.color}
              lineLength={solution.lineLength}
              reversed={index % 2 !== 0}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SecuritySolutionsFlow;
