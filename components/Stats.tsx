
import React from 'react';

const Stats: React.FC = () => {
  const metrics = [
    { num: "900", label: "Youtube Subs", icon: "fa-play" },
    { num: "4.4K", label: "Instagram", icon: "fa-camera" },
    { num: "185K", label: "Total Views", icon: "fa-eye" },
    { num: "52K", label: "Engagement", icon: "fa-heart" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((stat, i) => (
          <div key={i} className="reveal bg-black p-10 border-b-8 border-white transition-all hover:border-bamba-blue group" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="flex justify-between items-start mb-6">
              <div className="text-white/20 text-3xl group-hover:text-bamba-yellow transition-colors">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <div className="w-8 h-1 bg-bamba-yellow"></div>
            </div>
            <div className="text-7xl md:text-8xl font-black-bamba text-white mb-2 tracking-tighter leading-none">
              {stat.num}
            </div>
            <div className="text-[12px] font-black text-bamba-yellow uppercase tracking-[0.5em]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
