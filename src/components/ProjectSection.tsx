import React from 'react';
import Section from './Section';
import { ProjectProps } from '../Projects';


export default function ProjectSection({ title, description, type, year, children, filter, align } : ProjectProps) {
  if (type && filter?.includes(type)){
    return(
      <></>
    )
  }


  var header = title;
  if (year) header += ` (${year})`; 

  return(
    <Section header={header} align={align}>{description && <>{description}<br/></>}{children}</Section>
  )
}