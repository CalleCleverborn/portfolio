import React from 'react';

export type ExperienceItem = {
  id: number;
  Icon: React.ElementType; 
  label: string;
};

export type SchoolItem = {
    id: number;
    url: string;
    description: string;
    label: string;
    time: string;
}

export type SelfItem = {
  greeting: string;
  occupation: string;
  description: string;
}

export type ProjectItem = {
  id: number; 
  title: string;
  imageUrl: string;
  description: string;
}