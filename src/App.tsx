import React, { useState } from 'react';
import './index.css';
import Section from './components/Section'
import { HashLink } from 'react-router-hash-link';
import { Routes, Route} from "react-router-dom";
import ProjectSection from './components/ProjectSection';
import Projects from './Projects';
import Checkbox from './components/Checkbox';

function App() { 

  const [projectFilters, setProjectFilters] = useState<FiltersType>( 
    
        // Default settings
        {
            "highlighted": true,
            "game": false,
            "website": false,
            "ai": false,
            "tool": false,
            "other": false,
        })

  return (
    <div>
      <Routes>
        <Route path='/' key='home'/>
      </Routes>
      <div className='main darkmode flex'>
        <div className='container flex-col h-[90vh] justify-center box-border content-center items-center max-w-[100vw] flex-wrap'>

                  
          <div className='title uppercase text-3xl sm:text-4xl text-center font-bold mb-8 mx-4'>
              Hi, I'm Charl-Pierre  <br/>
              But you can call me Charlie    
          </div>

          <div className='subtitle text-2xl text-center font-semibold mx-4'>
            I'm a software engineer and game developer. Interested in&nbsp;
            <HashLink className='font-medium text-blue-300 dark:text-blue-300 hover:underline' smooth to="#whoami">who I am </HashLink>
            or&nbsp;
            <HashLink className='font-medium text-blue-300 dark:text-blue-300 hover:underline' smooth to="#projects">what I've done</HashLink>
            ? Come and take a look.
          </div>
          
          <div className='text-center items-center justify-center flex absolute bottom-0 w-full'>
            <Section>This page is still under construction :p</Section>
          </div>
          
        </div>
        <div className="wave absolute  w-full">{/* That funky wave yeah */}</div>
      </div>

      {/* --PERSONAL INTRODUCTION-- */}
      <div id='whoami' className='sections_container m-8 p-4'>
        <div className='text-4xl text-center font-bold mb-4'>Who am I?</div>
          im charlie and im really cool
      </div>
      

      {/* --PROJECTS-- */}
      <div id="projects" className='z-0 sections_container sm:m-8 p-4'>
        <div className='text-4xl text-center font-bold mb-4'>Projects</div>

        
        {/* Filter buttons */}
        <div className="sm:flex">
          {Object.keys(projectFilters).map((key) => {
            return(
              <Checkbox 
                key={key} 
                className="flex flex-col sm:flex-row gap-2 capitalize" 
                label={key === 'ai' ? 'AI' : key} 
                value={projectFilters[key as keyof FiltersType]}
                 onChange={(value : boolean)=>{
                  setProjectFilters({
                    ...projectFilters,
                    [key]: value,
                  })
                }}/>
          )})}
        </div>
       
        
        {Projects //List out all projects
        .filter((item) => { //Filter out projects
          if (projectFilters && Object.keys(projectFilters).some((f) => projectFilters[f as keyof FiltersType] === true))
            if (!item.categories || !item.categories.some((cat) => projectFilters[cat as keyof FiltersType] === true)) 
              return false;
          return true
        })
        .map((item, index) => { //Map projects to a ProjectSection JSX element
          item.align = (index % 2 === 0) ? "right" : "left"; //Alternate alignment
          return (<ProjectSection {...item}/>)
        })}
      </div>
    </div>
  );
}

export default App;

export type FiltersType = {
    "highlighted": boolean
    "game": boolean
    "website": boolean
    "tool": boolean
    "other": boolean
    "ai": boolean
}