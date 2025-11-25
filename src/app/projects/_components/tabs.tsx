'use client'
import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  onTabChange: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <div className='flex gap-4 md:gap-2 justify-center w-full backdrop-blur-sm bg-cyan-950/50 hover:bg-cyan-900/50 transition-all duration-300 rounded-lg z-20 px-1 py-2 sm:p-2 cursor-pointer mb-8'>
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`rounded-lg flex-1 flex flex-col justify-center items-center uppercase p-2 sm:px-4 text-xs sm:text-sm cursor-pointer ${activeTab === tab.id ?'bg-cyan-200/10 backdrop-blur-sm':''} border border-cyan-300/0 hover:border hover:border-cyan-800 transition-all duration-300`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
