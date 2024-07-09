import React from 'react';

interface TabProps {
  label: string;
  isActive: boolean;
}

const Tab: React.FC<TabProps> = ({ label, isActive }) => {
  const baseClasses =
    'flex justify-center items-center px-14 py-2.5 rounded-lg max-md:px-5';
  const activeClasses = 'text-white bg-red-600';
  const inactiveClasses = 'bg-white';

  return (
    <button
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      <span className='justify-center'>{label}</span>
    </button>
  );
};

const RiskAssessmentTabs: React.FC = () => {
  const tabs = [
    { label: 'Risk Assessment', isActive: true },
    { label: 'Risk Assessment', isActive: false },
    { label: 'Risk Assessment', isActive: false },
    { label: 'Risk Assessment', isActive: false },
  ];

  return (
    <nav className='py-1.5 w-full text-sm font-semibold leading-6 bg-black rounded-lg text-neutral-700'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-center px-1.5 w-full'>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} isActive={tab.isActive} />
        ))}
      </div>
    </nav>
  );
};

export default RiskAssessmentTabs;
