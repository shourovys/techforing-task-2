import classNames from 'classnames';
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

interface CircleNodeProps {
  color: 'blue' | 'orange';
}

const CircleNode: React.FC<CircleNodeProps> = ({ color }) => {
  const bgColor = color === 'blue' ? 'bg-blue-950' : 'bg-orange-500';

  return (
    <div className='flex flex-col justify-center items-center px-1.5 w-9 h-9 rounded-full shadow-md bg-blend-overlay bg-white/50 backdrop-blur-lg'>
      <div
        className={`flex flex-col justify-center items-center px-1 rounded-full ${bgColor} h-[26px] w-[26px]`}
      >
        <div className='shrink-0 bg-white rounded-full h-[18px] w-[18px]' />
      </div>
    </div>
  );
};

interface ConnectionLineProps {
  color: 'blue' | 'orange';
  length: string;
}

const ConnectionLine: React.FC<ConnectionLineProps> = ({ color, length }) => {
  return (
    <div
      className={`shrink-0 border-solid ${
        color === 'blue'
          ? 'bg-blue-950 border-blue-950'
          : 'bg-orange-500 border-orange-500'
      }`}
      style={{ width: length, height: '3px' }}
    />
  );
};

interface SecuritySolutionCardProps {
  text: string;
  color: 'blue' | 'orange';
}

const SecuritySolutionCard: React.FC<SecuritySolutionCardProps> = ({
  text,
  color,
}) => {
  const borderColor =
    color === 'blue' ? 'border-blue-950' : 'border-orange-500';
  const textColor = color === 'blue' ? 'text-blue-950' : 'text-orange-500';

  return (
    <div
      className={`px-3 py-1.5 bg-white rounded-lg w-fit min-w-max border border-solid ${borderColor} ${textColor}`}
    >
      <div
        className='flex gap-2 w-full items-center font-medium
      '
      >
        <FiCheckCircle className='shrink-0 text-lg font-extrabold' />
        <div className='text-nowrap'>{text}</div>
      </div>
    </div>
  );
};

interface SecuritySolutionBlockProps {
  text: string;
  color: 'blue' | 'orange';
  lineLength: string;
  reversed?: boolean;
}

const SecuritySolutionBlock: React.FC<SecuritySolutionBlockProps> = ({
  text,
  color,
  lineLength,
  reversed = false,
}) => {
  return (
    <div
      className={classNames(
        'flex items-center',
        reversed && 'flex-row-reverse'
      )}
    >
      <SecuritySolutionCard text={text} color={color} />
      <div
        className={classNames(
          'flex items-center',
          !reversed && 'flex-row-reverse'
        )}
      >
        <CircleNode color={color} />
        <ConnectionLine color={color} length={lineLength} />
      </div>
    </div>
  );
};

export default SecuritySolutionBlock;
