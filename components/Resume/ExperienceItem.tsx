import React from 'react';
import { ExperienceItem as IExperienceItem } from '../../types';

interface ExperienceItemProps {
  item: IExperienceItem;
  isLast?: boolean;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ item, isLast }) => {
  return (
    <div className={`relative pl-8 ${!isLast ? 'mb-12' : ''}`}>
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1.5 w-4 h-4 bg-background-light dark:bg-background-dark border-2 border-primary rounded-full z-10 transition-transform hover:scale-125 duration-300"></div>
      
      {/* Period */}
      <div className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-1">
        {item.period}
      </div>
      
      {/* Company / Logo */}
      {item.logo ? (
        <div className="mb-2 mt-1">
          <img 
            src={item.logo} 
            alt={item.company} 
            className={`h-8 object-contain object-left ${item.logoClasses || ''}`}
          />
        </div>
      ) : (
        <h4 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
          {item.company}
        </h4>
      )}
      
      {/* Title */}
      <h3 className="text-lg font-bold text-primary mt-1">
        {item.title}
      </h3>
      
      {/* Subtitle (Optional) */}
      {item.subtitle && (
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-2 italic">
          {item.subtitle}
        </p>
      )}

      {/* Details */}
      <div className="mt-4 space-y-4">
        {item.details.map((detail, idx) => (
          <div key={idx}>
            {detail.label && (
              <h5 className="font-semibold text-text-main-light dark:text-text-main-dark text-sm mb-2">
                {detail.label}
              </h5>
            )}
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-text-secondary-light dark:text-text-secondary-dark marker:text-primary">
              {detail.items.map((point, pIdx) => (
                <li key={pIdx} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
