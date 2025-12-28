
import React from 'react';
import { Network, Zap, Scissors, Hammer, Construction, ShieldCheck } from 'lucide-react';
import { Service, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Request a Quote', href: '#quote' },
];

export const SERVICES: Service[] = [
  {
    id: 'aerial',
    title: 'Aerial Installation',
    description: 'Our primary specialty. Expert deployment of fiber optic cable on existing utility infrastructure with precision and speed.',
    icon: <Construction className="w-8 h-8" />,
    primary: true,
  },
  {
    id: 'repair',
    title: 'Emergency Repair',
    description: 'Rapid response teams available 24/7 to restore critical infrastructure and connectivity after storm damage or accidents.',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 'splicing',
    title: 'Fiber Splicing',
    description: 'High-precision fusion splicing for backbone and distribution networks, ensuring minimal signal loss and maximum reliability.',
    icon: <Scissors className="w-8 h-8" />,
  },
  {
    id: 'engineering',
    title: 'Engineering Services',
    description: 'Full-spectrum network design and planning tailored to the rugged terrain and unique needs of the West Virginia region.',
    icon: <Network className="w-8 h-8" />,
  },
  {
    id: 'underground',
    title: 'Underground Cabling',
    description: 'Comprehensive directional boring and trenching solutions for sub-surface telecommunications infrastructure.',
    icon: <Hammer className="w-8 h-8" />,
  },
];

export const CONTACT_EMAIL = 'info@blackwatersolutions';
export const COMPANY_NAME = 'Blackwater Solutions';
export const REGION = 'West Virginia';
