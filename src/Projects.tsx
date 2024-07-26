import React from "react";
import { Link } from "react-router-dom";

export type ProjectProps = {
    title: string;
    year?: number;
    description?: string;
    url?: string;
    categories?: string[];
    body?: JSX.Element;
    technologies?: string[];
    align?: string; //This is only added during rendering to alternate alignment side
  }



const Projects: ProjectProps[] = [
    {
        title: "Unusual Suspects",
        year: 2023,
        categories: ["highlighted", "tool", "website", "ai"],
        technologies: ["React", "Python", "Jira", "JavaScript", "Git", "SQL", "Docker", "PyTorch", "MongoDB", "Flask", "OpenCV", "Tailwind CSS"],
        body: 
        <div className="overflow-hidden">
            <iframe title="Unusual Suspects" className="clearfix overflow-auto float-right clear-right w-[55vw] sm:w-1/2 aspect-video ml-2 rounded-md" allowFullScreen
                src="https://www.youtube.com/embed/vV1JjrZjnxk?si=91H18I-bHUQ9e9YJ">
            </iframe>
            <div>
                In collaboration with the Dutch Police and KMar, we developed a proof of concept surveillance system that detects suspicious behavior.
                The goal was to streamline the surveillance of public spaces and improve efficiency of suspect tracking in the case of criminal activity. To achieve this,
                we created:
                <ul>
                    <li>A dashboard website</li>
                    <li>An API + Database to store activity</li>
                    <li>An object detection AI to detect suspicious behavior</li>
                </ul>
                <br/>
                This project served as the final assignment for my Computer Science Bachelor.
            </div>
        </div>,
    },
    {
        title: "RESTACKED",
        year: 2022,
        categories: ["game"],
        technologies: ["CSharp"],
        body: 
        <div className="overflow-hidden">
            <img src={"images/restacked.png"} alt="The cover art for RESTACKED" className="clearfix overflow-auto float-right clear-right w-[55vw] sm:w-2/5 rounded-md mb-4 ml-2"/>
            Made for the 2022 GMTK Game Jam, RESTACKED is a game about blasting aliens and collecting dice to upgrade your alien-killing-power. 
            The game features infinitely scaling waves of different enemies and allows the player to choose which upgrades they want to invest their dice in. <br/>
            <iframe title="RESTACKED" src="https://itch.io/embed/1622399?linkback=true&amp;dark=true" className="rounded-md mt-4 w-[208px] sm:w-[510px] h-[167px]"><a href="https://dobbermann2.itch.io/restacked">RESTACKED by Dobbermann2, Charlie, Drepple, Buse_cnc</a></iframe>
        </div>,
        url: "https://dobbermann2.itch.io/restacked",
        
    },
    {
        title: "The Cycle",
        year: 2024,
        categories: ["other"],
        technologies: ["Blender"],
        body:
        <div className="overflow-hidden">
            <iframe title="The Cycle" className="clearfix overflow-auto float-right clear-right w-[55vw] sm:w-2/3 aspect-video ml-2 rounded-md" allowFullScreen
                src="https://www.youtube.com/embed/rq4LM_uPvGA?si=6sRDKiHDs9bbshYT">
            </iframe>
            The Cycle is a short film made for the Computer Animation course of my Game & Media Technology master. 
            It tells the story of a robot mercenary and was made using the Vicon Motion Capture system provided by Utrecht University.
        </div>,
        url: "https://youtu.be/rq4LM_uPvGA?si=6sRDKiHDs9bbshYT",
    },
    {
        title: "Pokémon Higher or Lower",
        year: 2023,
        categories: ["game", "website"],
        technologies: ["TypeScript", "Tailwind CSS", "GitHub Pages", "CSS3"],
        body:
        <div>
            Inspired by&nbsp;
            <Link target="_blank" to={"https://www.higherlowergame.com"} className=' text-blue-300 dark:text-blue-300 hover:underline' >The Higher Lower Game</Link> 
            , Pokémon Higher or Lower is a browser game that tests how well Pokémon players know the stats of various Pokémon. The game uses the&nbsp;
            <Link target="_blank" to={"https://pokeapi.co"} className=' text-blue-300 dark:text-blue-300 hover:underline' >PokéAPI</Link> to obtain up-to-date data on all existing Pokémon.
        </div>,
        url: "https://charl-pierre.github.io/pokemon-higher-or-lower/"
    },
    {
        title: "Computer Vision",
        description: "WIP",
        technologies: ["Python", "OpenCV", "NumPy"]
    },
    {
        title: "Nonogram Solver",
        year: 2022,
        categories: ["tool"],
        description: "WIP",
        technologies: ["CSharp", "Rider"]
    },
    {
        title: "Nick-n-Chick",
        description: "WIP",
        technologies: ["Express", "SQLite", "HTML5", "CSS3", "JavaScript"]
    },
    {
        title: "XLR-8",
        year: 2019,
        categories: ["game"],
        description: "WIP",
        technologies: ["GameMaker Studio"],
        url: "https://cheesycharlie.itch.io/xlr-8",
    },
    {
        title: "First-Aid Fever",
        year: 2024,
        categories: ["game"],
        description: "WIP",
        technologies: ["Unity", "CSharp", "Git", "LaTeX"],
        url: "https://drepple.itch.io/first-aid-fever",
    },

].sort((a : ProjectProps, b : ProjectProps) => { 
    if (!a.year)
        return 1;
    if (!b.year)
        return -1;
    return b.year - a.year
    })

export default Projects