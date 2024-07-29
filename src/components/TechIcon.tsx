import React from 'react';

export default function TechIcon({tech} : {tech?: string}){
  if (!tech) return (<></>)
  
  //Try to fetch iconString from list of exceptions
  var iconString = Technologies[tech.toLowerCase()]

  //If string has a leading '$', treat it as a filepath and display an image instead.
  if (iconString && iconString.charAt(0) === '$')
  {
    //Remove the leading '$' from the filepath
    iconString = iconString.substring(1)
    return(
      <span><img alt="?" src={iconString} className='w-[32px] inline'/></span>
    )
  }

  //If technology is not listed as one of the exceptions, assume that it has a plain variant.
  if (!iconString) iconString = tech.toLowerCase() + '-plain'
  
  return(
    <i className={`align-middle text-2xl devicon-${iconString} colored mx-1 [text-shadow:_1px_1px_2px_black]`}></i>
  )
}

/**
 * Dictionary of technology names and their corresponding classNames.
 * Used mostly for icons with unusual names.
 * If an icon doesn't have a className, the path to an image can be designated by leading with a $.
 * @example
 * "blender": "blender-original"
 * "gamemaker": "$images/gmslogo.png"
 */
var Technologies : { [key: string]: string} = {
  "sql": "azuresqldatabase-plain",
  "blender": "blender-original",
  "tailwind css": "tailwindcss-original",
  "github": "github-original",
  "github pages": "github-original",
  "gamemaker studio": "$images/gmslogo.png",
  "nunit": "$images/nunitlogo.png",
  "express": "express-original"
}