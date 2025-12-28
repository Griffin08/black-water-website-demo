import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  primary?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}