import React from 'react';
import { CVData } from '../../types';
import { ExperienceItem } from './ExperienceItem';

interface MainContentProps {
  data: CVData;
}

export const MainContent: React.FC<MainContentProps> = ({ data }) => {
  return (
    <main className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="mb-16 animate-fade-in-down">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main-light dark:text-text-main-dark tracking-tight">
          {data.personal.name}
        </h1>
        <p className="text-xl sm:text-2xl text-primary font-bold mt-2">
          {data.personal.title}
        </p>
        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mt-1 font-medium">
          {data.personal.subtitle}
        </p>
      </header>

      {/* Experience Section */}
      <section>
        <h2 className="text-3xl font-bold border-b border-border-light dark:border-border-dark pb-4 mb-8 text-text-main-light dark:text-text-main-dark">
          Experience
        </h2>
        
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border-light dark:bg-border-dark"></div>
          
          <div className="space-y-2">
            {data.experience.map((item, index) => (
              <ExperienceItem 
                key={item.id} 
                item={item} 
                isLast={index === data.experience.length - 1} 
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};