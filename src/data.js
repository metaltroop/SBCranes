import { Truck, Tractor, Construction, Wrench, Container, Map } from 'lucide-react';

import fleetMobile from './assets/images/fleet_mobile.png';
import fleetCrawler from './assets/images/fleet_crawler.png';
import fleetTrailer from './assets/images/fleet_trailer.png';

import projectRefinery from './assets/images/project_refinery.png';
import projectStadium from './assets/images/project_stadium.png';
import projectWagah from './assets/images/project_wagah.png';
import projectHighrise from './assets/images/project_highrise.png';

export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
];

export const STATS = [
    { label: 'Fleet', value: '100+' },
    { label: 'Clients', value: '1000+' },
    { label: 'Experience', value: '40+ Years' },
    { label: 'Service', value: '24x7' },
];

export const SERVICES_DATA = [
    {
        title: 'Mobile Crane Rental',
        description: 'Rapid mobilization for infrastructure & industrial projects.',
        icon: 'Truck', // Lucide icon name
    },
    {
        title: 'Crawler Crane Rental',
        description: 'Superior stability for heavy industrial & power refinery projects.',
        icon: 'Tractor', // Using Tractor as a proxy for crawler or distinct machinery
    },
    {
        title: 'Heavy Lifting & Erection',
        description: 'Specialized solutions for complex lifts.',
        icon: 'Hook', // Using Hook/Construction icon
    },
    {
        title: 'Shutdown & Maintenance',
        description: 'Support for plant turnarounds.',
        icon: 'Wrench',
    },
    {
        title: 'Heavy Cargo & ODC',
        description: 'Moving over-dimensional cargo.',
        icon: 'Container', // Proxy for cargo
    },
    {
        title: 'Project Logistics',
        description: 'Planning and route surveys.',
        icon: 'Map',
    },
];

export const FLEET_DATA = {
    mobile: {
        title: 'Mobile Cranes',
        description: 'Road-legal, quick setup. Ideal for urban/remote locations.',
        capacities: ['Light (60-220 MT)', 'Heavy (250-360 MT)'],
        image: fleetMobile,
    },
    crawler: {
        title: 'Crawler Cranes',
        description: 'Heavy duty (up to 800 MT), works on soft ground. Brands: SANY, XCMG, Zoomlion.',
        capacities: ['Heavy (250-360 MT)', 'Ultra Heavy (400-800 MT)'],
        image: fleetCrawler,
    },
    trailers: {
        title: 'Trailers',
        description: 'Heavy-duty trailers for machinery transport.',
        capacities: [],
        image: fleetTrailer,
    },
};

export const PROJECTS_DATA = [
    {
        title: 'HMEL Refinery',
        description: 'Long-term maintenance and shutdown support (3 years).',
        image: projectRefinery,
    },
    {
        title: 'JLN Stadium',
        description: 'Redevelopment heavy lifting for the 2010 modernization.',
        image: projectStadium,
    },
    {
        title: 'Wagah Border',
        description: 'Installation of the National Flag structure (High national importance).',
        image: projectWagah,
    },
    {
        title: 'High-Rise Construction',
        description: 'Tower crane erection in Gurgaon (Restricted urban site).',
        image: projectHighrise,
    },
];

export const CLIENTS_DATA = [
    'Tata Projects',
    'Reliance Industries',
    'NTPC',
    'ONGC',
    'L&T',
    'Adani',
    'UltraTech Cement',
    'GAIL',
    'BHEL',
];

export const CONTACT_INFO = {
    address: 'Shed No-10 DSIDC, Okhla Industrial Area, Phase-1, New Delhi-110020',
    email: 'sbcranes25@gmail.com',
    phone: '+91 98111 40311',
};
