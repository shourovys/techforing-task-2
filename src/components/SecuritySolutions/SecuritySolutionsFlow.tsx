'use client';
import classNames from 'classnames';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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
  const [currentStep, setCurrentStep] = useState<number[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const showNextSolution = () => {
      if (currentStep.length === shownOrder.length) {
        setTimeout(() => {
          setCurrentStep([]);
        }, 2000); // Pause for 2 seconds before resetting
      } else {
        setCurrentStep((prevStep) => {
          const nextIndex = prevStep.length;
          if (nextIndex < shownOrder.length) {
            return [...prevStep, shownOrder[nextIndex]];
          } else {
            return prevStep;
          }
        });
      }
    };

    // Start showing solutions every 500ms (adjust timing as needed)
    interval = setInterval(showNextSolution, 800);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [currentStep]);

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
          <div
            className={classNames(
              'relative bottom-6',
              currentStep.includes(0) ? 'opacity-100' : 'opacity-0'
            )}
          >
            <SecuritySolutionBlock
              text={solutionsData[0].text}
              color={solutionsData[0].color}
              lineLength={solutionsData[0].lineLength}
            />
          </div>

          <div
            className={classNames(
              currentStep.includes(1) ? 'opacity-100' : 'opacity-0'
            )}
          >
            <SecuritySolutionBlock
              text={solutionsData[1].text}
              color={solutionsData[1].color}
              lineLength={solutionsData[1].lineLength}
              reversed
            />
          </div>
        </div>
        <div className='flex gap-10 relative'>
          <div
            className={classNames(
              'relative bottom-10',
              currentStep.includes(2) ? 'opacity-100' : 'opacity-0'
            )}
          >
            <SecuritySolutionBlock
              text={solutionsData[2].text}
              color={solutionsData[2].color}
              lineLength={solutionsData[2].lineLength}
            />
          </div>
          <div
            className={classNames(
              currentStep.includes(3) ? 'opacity-100' : 'opacity-0'
            )}
          >
            <SecuritySolutionBlock
              text={solutionsData[3].text}
              color={solutionsData[3].color}
              lineLength={solutionsData[3].lineLength}
              reversed
            />
          </div>
        </div>
        <div className='flex gap-6 relative'>
          <div
            className={classNames(
              'relative bottom-8',
              currentStep.includes(4) ? 'opacity-100' : 'opacity-0'
            )}
          >
            <SecuritySolutionBlock
              text={solutionsData[4].text}
              color={solutionsData[4].color}
              lineLength={solutionsData[4].lineLength}
            />
          </div>
          <div
            className={classNames(
              currentStep.includes(5) ? 'opacity-100' : 'opacity-0'
            )}
          >
            <SecuritySolutionBlock
              text={solutionsData[5].text}
              color={solutionsData[5].color}
              lineLength={solutionsData[5].lineLength}
              reversed
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySolutionsFlow;
