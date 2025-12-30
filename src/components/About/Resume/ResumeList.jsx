import React from 'react';
import CardSwap, { Card } from './CardSwap';

const ResumeList = ({ resume }) => {
  return (
    <div className="w-full h-[550px] md:h-[650px] relative flex items-center justify-center overflow-visible">
      <CardSwap
        cardDistance={30}
        verticalDistance={40}
        delay={4000}
        pauseOnHover={true}
        width={300}
        height={400}
        skewAmount={3}
      >
        {resume.map((role, index) => {
          const startLabel = typeof role.start === "string" ? role.start : role.start.label;
          const endLabel = typeof role.end === "string" ? role.end : role.end.label;

          return (
            <Card key={index} className="p-8 flex flex-col items-center justify-center gap-6 bg-zinc-900 border-zinc-800 shadow-2xl">
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center p-4 ring-1 ring-white/10">
                <img 
                  src={role.logoUrl} 
                  alt={role.company} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-white">{role.company}</h3>
                <p className="text-cyan-400 font-medium">{role.title}</p>
                <div className="text-sm text-zinc-500 font-mono pt-2">
                  {startLabel} — {endLabel}
                </div>
              </div>
            </Card>
          );
        })}
      </CardSwap>
    </div>
  );
};

export default ResumeList;
