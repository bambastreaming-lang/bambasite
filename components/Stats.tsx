
import React from 'react';

const Stats: React.FC = () => {
  const metrics = [
    { num: "1.2k", label: "Youtube Subs", icon: "fa-play" },
    { num: "6.5K", label: "Instagram", icon: "fa-camera" },
    { num: "2.5M", label: "Total Views", icon: "fa-eye" },
    { num: "160K", label: "Engagement", icon: "fa-heart" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {metrics.map((stat, i) => (
          <div key={i} className="reveal bg-black p-6 sm:p-8 md:p-10 border-b-6 sm:border-b-8 border-white transition-all hover:border-bamba-blue group" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <div className="text-white/20 text-2xl sm:text-3xl group-hover:text-bamba-yellow transition-colors">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <div className="w-6 sm:w-8 h-1 bg-bamba-yellow"></div>
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black-bamba text-white mb-2 tracking-tighter leading-none">
              {stat.num}
            </div>
            <div className="text-[10px] sm:text-[11px] md:text-[12px] font-black text-bamba-yellow uppercase tracking-[0.4em] sm:tracking-[0.5em]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
