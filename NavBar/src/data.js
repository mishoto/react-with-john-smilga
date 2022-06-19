import React from 'react';
import { FaBehance, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
  // {
  //   id: 6,
  //   url: '/personal',
  //   text: 'personal',
  // },
  // {
  //   id: 7,
  //   url: '/gallery',
  //   text: 'gallery',
  // },
];

export const social = [
  {
    id: 1,
    url: 'https://www.google.com',
    icon: <FaGoogle />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.behance.net',
    icon: <FaBehance />,
  },
];
