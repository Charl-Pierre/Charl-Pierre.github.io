import React, { useState } from 'react';
import './index.css';
import Section from './components/Section'
import { HashLink } from 'react-router-hash-link';
import { Routes, Route} from "react-router-dom";
import ProjectSection from './components/ProjectSection';
import Projects from './Projects';
import Checkbox from './components/Checkbox';
import { SocialIcon } from 'react-social-icons'
import SkillsSection from './components/SkillsSection';

function App() { 

  const [showFilter, setShowFilter] = useState<boolean>(false);

  const [projectFilters, setProjectFilters] = useState<FiltersType>( 
    
    // Default settings
    {
        "highlighted": false,
        "game": false,
        "website": false,
        "ai": false,
        "tool": false,
        "other": false,
        "hidden":false,
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
          
          {/* Temporary */}
          {/* <div className='text-center items-center justify-center flex absolute bottom-0 w-full temp'>
            <Section>This page is still under construction :p</Section>
          </div> */}

          <div className='text-center items-center justify-center flex bottom-4 right-4 absolute float-right text-xl'>
            <HashLink className='font-medium text-blue-300 dark:text-blue-300 hover:underline' smooth to="#contact">Contact</HashLink>
          </div>

          
          
        </div>
        <div className="wave absolute w-full bottom-[-24vh] sm:bottom-[-16vh]">{/* That funky wave yeah */}</div>
      </div>

      {/* --PERSONAL INTRODUCTION-- */}
      <div id='whoami' className='sections_container mt-[-10vh] sm:m-8 p-4'>
        <div className='text-4xl text-center font-bold mb-4'>Who am I?</div>
        <div className='w-[85vw] sm:w-[60vw]'>
        <img src={"images/charlie.png"} alt="Charlie" className="clearfix inline-block overflow-auto sm:float-right clear-right sm:max-h-[30vh] rounded-md m-2 mb-4"/>
          <p>
            Hey there! I'm Charl-Pierre Marais, a software developer with a love for games and problem-solving algorithms. 
            I'm currently in the last year of my master in Game & Media Technology at the University of Utrecht after previously completing the bachelor in Computer Science there as well.
          </p>
          <p>
            Ever since discovering GameMaker Studio in primary school, I've always known that programming was my passion and future. 
            Since then I've learned numerous programming languages along with a variety of miscellaneous digital skills that allow me to work as a jack of all trades.
          </p>
          <p>
            I was born in South Africa but aside from a few years in the UK, I've spent almost all my life in the Netherlands.
            These circumstances have provided me a broad range of experiences through which I've been able to develop into a more well-rounded person.
            Furthermore, living in these different countries has helped me become a trilingual with an affinity for languages.
          </p>
          <i>
            For a more detailed look at my skillset, take a look at the&nbsp;
            <HashLink className='font-medium text-blue-300 dark:text-blue-300 hover:underline' smooth to="#skills">Skills </HashLink>
            section below.
          </i>
        </div>
      </div>

      {/* --PROJECTS-- */}
      <div id="projects" className='z-0 sections_container sm:m-8 p-4'>
        <div className='text-4xl text-center font-bold mb-4'>Projects</div>

        
        {/* Filter buttons */}
        <div className="sm:flex">
          {showFilter && Object.keys(projectFilters).map((key) => {
            var value = projectFilters[key as keyof FiltersType]
            return(
              <Checkbox 
                key={key} 
                className={"flex flex-col sm:flex-row gap-2 capitalize border-[1px] " + 
                  ((key === 'highlighted' && value) ? "border-yellow-300" : "border-transparent")}
                label={key === 'ai' ? 'AI' : key} 
                value={value}
                 onChange={(value : boolean)=>{
                  setProjectFilters({
                    ...projectFilters,
                    [key]: value,
                  })
                }}/>
          )})}
          <Checkbox
            className="flex flex-col sm:flex-row gap-2 capitalize"
            label={showFilter ? "Hide" : "Show filters"}
            value={showFilter}
            showIcon={false}
            onChange={(value : boolean) => {
              setShowFilter(value)
            }}
          />
        </div>
       
        
        {Projects //List out all projects
        .filter((item) => { //Filter out projects
          if (projectFilters && projectFilters["hidden"] === false && item.categories?.includes("hidden"))
            return false;

          if (projectFilters && Object.keys(projectFilters).some((f) => projectFilters[f as keyof FiltersType] === true))
            if (!item.categories || !Object.keys(projectFilters).filter((f) => projectFilters[f as keyof FiltersType] === true)
              .every((cat) => item.categories?.includes(cat)))
              return false;
          return true
        })
        .map((item, index) => { //Map projects to a ProjectSection JSX element
          item.align = (index % 2 === 0) ? "right" : "left"; //Alternate alignment
          return (<ProjectSection {...item}/>)
        })}
      </div>

      {/* --SKILLS-- */}
      <div id='skills' className='z-0 sections_container sm:m-8 p-4'>
        <div className='text-4xl text-center font-bold mb-4'>Skills</div>
        <SkillsSection/>
      </div>

      {/* --CONTACT-- */}
      <div id='contact' className='z-0 sections_container sm:m-8 p-4'>
        <div className='text-4xl text-center font-bold mb-4'>Contact</div>
        <div className='w-[85vw] sm:w-[60vw] text-center justify-center'>
          You can access my CV&nbsp; 
          <a className='font-medium text-blue-300 dark:text-blue-300 hover:underline' href="CV.pdf">here</a>.

          <div className='justify-center space-x-4 m-4 flex'>
            <SocialIcon url="https://www.linkedin.com/in/charl-pierre-marais-204744220/"/>
            <SocialIcon url="https://github.com/Charl-Pierre"/>
            <SocialIcon url="https://x.com/_CheesyCharlie"/>
            <SocialIcon url="https://cheesycharlie.itch.io"/>
          </div>
          
        </div>
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
    "hidden": boolean
}