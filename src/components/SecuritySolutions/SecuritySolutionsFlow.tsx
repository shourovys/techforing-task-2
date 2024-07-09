'use client';
import classNames from 'classnames';
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
        <div className='flex gap-14 relative'>
          <motion.div
            className={classNames('relative bottom-6')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 3,
              delay: shownOrder.indexOf(0) * 0.5,
            }}
          >
            <SecuritySolutionBlock
              text={solutionsData[0].text}
              color={solutionsData[0].color}
              lineLength={solutionsData[0].lineLength}
            />
          </motion.div>

          <motion.div
            className={classNames('relative')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 3,
              delay: shownOrder.indexOf(1) * 0.5,
            }}
          >
            <SecuritySolutionBlock
              text={solutionsData[1].text}
              color={solutionsData[1].color}
              lineLength={solutionsData[1].lineLength}
              reversed
            />
          </motion.div>
        </div>
        <div className='flex gap-10 relative'>
          <motion.div
            className={classNames('relative bottom-10')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 3,
              delay: shownOrder.indexOf(2) * 0.5,
            }}
          >
            <SecuritySolutionBlock
              text={solutionsData[2].text}
              color={solutionsData[2].color}
              lineLength={solutionsData[2].lineLength}
            />
          </motion.div>
          <motion.div
            className={classNames('relative')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 3,
              delay: shownOrder.indexOf(3) * 0.5,
            }}
          >
            <SecuritySolutionBlock
              text={solutionsData[3].text}
              color={solutionsData[3].color}
              lineLength={solutionsData[3].lineLength}
              reversed
            />
          </motion.div>
        </div>
        <div className='flex gap-6 relative'>
          <motion.div
            className={classNames('relative bottom-8')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 3,
              delay: shownOrder.indexOf(4) * 0.5,
            }}
          >
            <SecuritySolutionBlock
              text={solutionsData[4].text}
              color={solutionsData[4].color}
              lineLength={solutionsData[4].lineLength}
            />
          </motion.div>
          <motion.div
            className={classNames('relative')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 3,
              delay: shownOrder.indexOf(5) * 0.5,
            }}
          >
            <SecuritySolutionBlock
              text={solutionsData[5].text}
              color={solutionsData[5].color}
              lineLength={solutionsData[5].lineLength}
              reversed
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySolutionsFlow;
