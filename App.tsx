import React from 'react';
import { Sidebar } from './components/Resume/Sidebar';
import { MainContent } from './components/Resume/MainContent';
import { RESUME_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 flex justify-center bg-gray-100 dark:bg-black/90">
      <div className="w-full max-w-screen-xl shadow-2xl rounded-2xl overflow-hidden lg:grid lg:grid-cols-12 min-h-[90vh] ring-1 ring-white/10">
        <Sidebar data={RESUME_DATA} />
        <MainContent data={RESUME_DATA} />
      </div>
    </div>
  );
};

export default App;