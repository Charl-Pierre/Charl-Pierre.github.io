import React from 'react';
import './index.css';
import Section from './components/Section'
import { HashLink } from 'react-router-hash-link';
import { Routes, Route} from "react-router-dom";
import ProjectSection from './components/ProjectSection';
import Projects from './Projects';

function App() { 
  return (
    <div>
      <Routes>
        <Route path='home'/>
      </Routes>
      <div className='main darkmode flex'>
        <div className='container flex-col h-[90vh] justify-center box-border content-center items-center max-w-[100vw] flex-wrap'>

                  
          <div className='title uppercase text-4xl text-center font-bold mb-8'>
              Hi, I'm Charl-Pierre  <br/>
              But you can call me Charlie    
          </div>

          <div className='subtitle text-2xl text-center font-semibold'>
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


        <div className="wave absolute  w-full"></div>
      </div>

      <div id='whoami' className='sections_container m-8'>
      <div className='text-4xl text-center font-bold mb-4'>Who am I?</div>
        im charlie and im really cool
      </div>
      
      <div id="projects" className='sections_container m-8'>
        <div className='text-4xl text-center font-bold mb-4'>Projects</div>
        {Projects.map((item, index) => {
          item.align = (index % 2 === 0) ? "right" : "left";
          console.log(item.align)
          return (
            <div>
              <ProjectSection {...item}/>
            </div>
          )
        })}
      </div>
      
    </div>
  );
}

export default App;
