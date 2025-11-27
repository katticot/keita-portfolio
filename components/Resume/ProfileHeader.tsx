import React from 'react';

interface ProfileHeaderProps {
  imageUrl: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ imageUrl }) => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
      <div className="relative w-40 h-40">
        {/* Background Blobs */}
        <div className="absolute -top-3 -left-3 w-32 h-32 bg-sky-500 rounded-full opacity-60 mix-blend-lighten filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-3 -right-3 w-32 h-32 bg-rose-500 rounded-full opacity-60 mix-blend-lighten filter blur-xl animate-pulse delay-700"></div>
        
        {/* Slanted red background shape */}
        <div className="absolute inset-0 bg-primary rounded-t-[40px] rounded-bl-[40px] rounded-br-[100px] transform -rotate-[15deg] translate-x-2 translate-y-2 shadow-lg"></div>
        
        {/* Image Container */}
        <div className="relative w-full h-full rounded-t-[40px] rounded-bl-[40px] rounded-br-[80px] overflow-hidden border-4 border-sidebar-dark shadow-2xl">
          <img
            alt="Profile of Keita Louis-Alexandre"
            className="w-full h-full object-cover"
            src={imageUrl}
          />
        </div>
      </div>
    </div>
  );
};