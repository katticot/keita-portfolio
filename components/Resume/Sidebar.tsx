import React from 'react';
import { CVData } from '../../types';
import { ProfileHeader } from './ProfileHeader';

interface SidebarProps {
  data: CVData;
}

// Helper component to render icons based on skill name
const SkillIcon = ({ skill }: { skill: string }) => {
  // Base class for images
  const imgClass = "w-6 h-6 object-contain flex-shrink-0"; 
  // Base class for SVGs (using currentColor)
  const svgClass = "w-6 h-6 text-primary flex-shrink-0";
  
  // Normalize skill string for matching
  const s = skill.toLowerCase();

  if (s.includes('kubernetes') || s.includes('aws')) {
    // AWS Logo provided by user
    return (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
        alt="AWS" 
        className={imgClass}
      />
    );
  }
  
  if (s.includes('go')) {
    // Go Logo provided by user
    return (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" 
        alt="Go" 
        className={imgClass}
      />
    );
  }

  if (s.includes('javascript') || s.includes('node')) {
    // Hexagon (Node.js style)
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={svgClass}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    );
  }

  if (s.includes('rust')) {
    // Rust Logo provided by user. Added dark:invert because the logo is black.
    return (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" 
        alt="Rust" 
        className={`${imgClass} dark:invert`} 
      />
    );
  }

  if (s.includes('react') || s.includes('vue') || s.includes('svelte')) {
    // React Logo provided by user
    return (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
        alt="React" 
        className={imgClass}
      />
    );
  }

  if (s.includes('sql') || s.includes('mongo')) {
    // Database
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={svgClass}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  if (s.includes('nginx') || s.includes('haproxy')) {
    // Network Route / Load Balancer
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={svgClass}>
        <circle cx="6" cy="19" r="3" />
        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
        <circle cx="18" cy="5" r="3" />
      </svg>
    );
  }

  if (s.includes('solidity')) {
    // Solidity Logo provided by user. Using CDN link for SVG.
    return (
      <img 
        src="https://cdn.worldvectorlogo.com/logos/solidity.svg" 
        alt="Solidity" 
        className={`${imgClass} dark:invert`} 
      />
    );
  }

  // Default dot
  return <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mx-1.5"></span>;
};

export const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  return (
    <aside className="lg:col-span-5 bg-sidebar-light dark:bg-sidebar-dark text-text-main-light dark:text-text-main-dark p-8 border-r border-border-light dark:border-border-dark">
      <ProfileHeader imageUrl={data.personal.profileImage} />

      {/* Contact Section */}
      <div className="w-full space-y-4 pt-6">
        <h2 className="text-2xl font-bold border-b border-border-light dark:border-border-dark pb-2">
          Contact
        </h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider text-xs">
              Phone
            </h3>
            <p className="font-medium">{data.contact.phone}</p>
          </div>
          <div>
            <h3 className="font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider text-xs">
              Email
            </h3>
            <p className="font-medium text-primary hover:underline cursor-pointer">
              {data.contact.email}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider text-xs">
              Address
            </h3>
            <p className="font-medium">{data.contact.address}</p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="w-full space-y-4 pt-6">
        <h2 className="text-2xl font-bold border-b border-border-light dark:border-border-dark pb-2">
          Education
        </h2>
        <div className="space-y-6 text-sm">
          {data.education.map((edu, index) => (
            <div key={index}>
              <p className="font-bold text-primary">{edu.year}</p>
              <p className="font-semibold text-lg leading-tight mt-1">{edu.degree}</p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mt-1">
                {edu.school}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Expertise Section */}
      <div className="w-full space-y-4 pt-6">
        <h2 className="text-2xl font-bold border-b border-border-light dark:border-border-dark pb-2">
          Expertise
        </h2>
        <ul className="space-y-3 text-sm">
          {data.expertise.map((skill, index) => (
            <li key={index} className="flex items-center space-x-3 group">
              <div className="p-1.5 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                <SkillIcon skill={skill} />
              </div>
              <span className="font-medium text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors duration-300">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Languages Section */}
      <div className="w-full space-y-4 pt-6">
        <h2 className="text-2xl font-bold border-b border-border-light dark:border-border-dark pb-2">
          Language
        </h2>
        <div className="flex justify-between text-sm font-medium">
          {data.languages.map((lang, index) => (
            <span key={index}>{lang}</span>
          ))}
        </div>
      </div>
    </aside>
  );
};