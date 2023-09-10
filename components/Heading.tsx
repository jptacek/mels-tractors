import React, { ReactNode } from 'react';


export default function Heading({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <h1 className={`font-bold font-orbitron pb-3 text-2x1`}>
            {children}
        </h1>
    );
}
  