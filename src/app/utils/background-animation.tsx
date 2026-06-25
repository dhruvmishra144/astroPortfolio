import type { ReactNode } from 'react';

const BackgroundAnimation = ({ children }: { children: ReactNode }) => {
  return (
    <div className="portfolio-background relative min-h-screen w-full isolate overflow-hidden bg-slate-950">
      <div aria-hidden="true" className="portfolio-background__motion fixed inset-0 z-0 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundAnimation;
