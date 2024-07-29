import React from 'react';
import Section from './Section';
import { ProjectProps } from '../Projects';
import TechIcon from './TechIcon';
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';


export default function ProjectSection({ title, description, categories, technologies, year, body, url, align } : ProjectProps) {
  var header = title;
  if (year) header += ` (${year})`; 

  // Generate tooltip and tooltiptext
  var tooltip : JSX.Element[] = []
  var tooltiptext : any = []
  if (technologies){ //Only add tech if technologies are actually defined

    //Tooltip
    for (let i = 0; i < Math.min(technologies.length, 3); i++){
      tooltip.push(<TechIcon tech={technologies[i]}/>)
    }
    if (technologies.length > 3) //Add "(+n)" if more than three technologies given
      tooltip.push(<b className='outline outline-2 outline-offset-[-1px] rounded-xl p-0.5 m-1 ml-1.5 text-[16px] bg-white text-gray-800 outline-white'>+{technologies.length-3}</b>)

    //Tooltiptext
    for (let i = 0; i < technologies.length; i++){
      tooltiptext.push(<>
        <TechIcon tech={technologies[i]}/> {technologies[i]}<br/>
      </>)
    }
  }

  return(
    <Section header={header} align={align} className="fade">

      {/* If a description is provided, display it at top. (Usually used for WIP) */}
      {description && <>{description}<br/></>}

      {/* Display the body of the project (long descriptions, videos etc). */}
      {body}

      {/* Bottom bar containing tooltip and links */}
      <div className='flex justify-between mt-2 relative'>

        {/* Tooltip displaying the technologies used in a project */}
        <label className='tooltip'>
          {tooltip}
          <span className='tooltiptext'>
            {technologies && tooltiptext}
          </span>
        </label>

        {/* Link to project's external page */}
        {url && <Link target="_blank" to={url} className='hover:text-blue-300' >
          <ArrowTopRightOnSquareIcon className='w-8'/>
        </Link>}
      </div>
    </Section>
  )
}