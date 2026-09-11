import React from "react";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionContainer({ id, className = "", children }: SectionContainerProps) {
  return (
    <section id={id} className={`py-14 sm:py-20 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        {children}
      </div>
    </section>
  );
}
