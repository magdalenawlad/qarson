import React from 'react';

export const Main = ({ children }: { children: React.ReactNode }) => (
  <main>
    <div className='main-container'>
      {children}
    </div>
  </main>
);
