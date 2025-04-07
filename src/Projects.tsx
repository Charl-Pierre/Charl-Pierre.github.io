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
        title: "Caribbean Climb",
        year: 2024,
        categories: ["game", "highlighted"],
        technologies: ["Unity", "CSharp", "Git"],
        body:
        <div className="overflow-hidden">
            Made for the 2024 GMTK Game Jam, Caribbean Climb is a 2D platformer about climbing a lighthouse while trying to outrun the rising, shark-filled sea level. 
            The game features a random level generation, the ability to build your own path and an online leaderboard.&nbsp; 
            <img src={"images/caribbeanclimb.png"} alt="A gameplay screenshot from Caribbean Climb" className="clearfix overflow-auto sm:float-right clear-right w-[70vw] sm:w-2/5 rounded-md m-4 ml-2"/>
            <br/>
            <i>Of the 8,000 submissions, our game placed 70th in Style and 91st overall.</i>
            <iframe title="Caribbean Climb" src="https://itch.io/embed/2910284?dark=true" className="rounded-md mt-4 w-[208px] sm:w-[510px] h-[167px]"><a href="https://drepple.itch.io/caribbean-climb">Caribbean Climb by Drepple, Charlie, Buse_cnc</a></iframe>
        </div>,
        url: "https://drepple.itch.io/caribbean-climb",
    },
    {
        title: "Unusual Suspects",
        year: 2023,
        categories: ["highlighted", "tool", "website", "ai"],
        technologies: ["React", "Python", "Jira", "JavaScript", "Git", "SQL", "Docker", "PyTorch", "MongoDB", "Flask", "OpenCV", "Tailwind CSS", "Axios"],
        body: 
        <div className="overflow-hidden">
            <iframe title="Unusual Suspects" className="clearfix overflow-auto sm:float-right clear-right w-[70vw] sm:w-1/2 aspect-video m-2 rounded-md" allowFullScreen
                src="https://www.youtube.com/embed/vV1JjrZjnxk?si=L_UGE035lyWVPDDu&amp;end=111">
            </iframe>
            <div>
                In collaboration with the Dutch Police and KMar, I and 9 other students developed a proof of concept surveillance system that detects suspicious behavior.
                The goal was to streamline the surveillance of public spaces and improve efficiency of suspect tracking in the case of criminal activity. To achieve this,
                we created:
                <ul>
                    <li>A dashboard website</li>
                    <li>An API + Database to store activity</li>
                    <li>An object detection AI to detect suspicious behavior</li>
                </ul>
                <br/>
                <i>This project served as the final assignment for my Computer Science Bachelor.</i>
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
            Made for the 2022 GMTK Game Jam, RESTACKED is a game about blasting aliens and collecting dice to upgrade your alien-killing-power. 
            The game features infinitely scaling waves of different enemies and allows the player to choose which upgrades they want to invest their dice in. 
            <img src={"images/restacked.png"} alt="The cover art for RESTACKED" className="clearfix overflow-auto sm:float-right clear-right w-[70vw] sm:w-2/5 rounded-md m-2"/>
            <br/>
            <i>Of the 6,000 submissions, our game placed 64th in Enjoyment and 447th overall.</i>
            <iframe title="RESTACKED" src="https://itch.io/embed/1622399?linkback=true&amp;dark=true" className="rounded-md mt-4 w-[208px] sm:w-[510px] h-[167px]"><a href="https://dobbermann2.itch.io/restacked">RESTACKED by Dobbermann2, Charlie, Drepple, Buse_cnc</a></iframe>
        </div>,
        url: "https://dobbermann2.itch.io/restacked",
        
    },
    {
        title: "The Cycle",
        year: 2024,
        categories: ["other", "highlighted"],
        technologies: ["Blender"],
        body:
        <div className="overflow-hidden">
            <iframe title="The Cycle" className="clearfix overflow-auto sm:float-right clear-right w-[70vw] sm:w-3/5 aspect-video m-2 rounded-md" allowFullScreen
                src="https://www.youtube.com/embed/rq4LM_uPvGA?si=6sRDKiHDs9bbshYT">
            </iframe>
            The Cycle is a short film made for the Computer Animation course of my Game & Media Technology master. 
            It tells the story of a robot mercenary and was made using the Vicon Motion Capture system provided by Utrecht University. <br/><br/>
            <i>Our movie placed second in the film festival held at the end of the course.</i>
        </div>,
        url: "https://youtu.be/rq4LM_uPvGA?si=6sRDKiHDs9bbshYT",
    },
    {
        title: "Pokémon Higher or Lower",
        year: 2023,
        categories: ["game", "website"],
        technologies: ["TypeScript", "Tailwind CSS", "GitHub Pages", "Axios", "CSS3"],
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
        title: "First Aid Fever",
        year: 2024,
        categories: ["game"],
        technologies: ["Unity", "CSharp", "Git", "LaTeX"],
        body:
        <div className="overflow-hidden">
            First Aid Fever is a serious game aimed at teaching first aid techniques to novices. 
            The game engages players through interactive levels that simulate medical emergencies, requiring them to use first aid tools.&nbsp; 
            <img src={"images/firstaidfever.png"} alt="A gameplay screenshot from First Aid Fever" className="clearfix overflow-auto sm:float-right clear-right w-[70vw] sm:w-2/5 rounded-md m-4 ml-2"/>
            As players advance, they face increasing time constraints, promoting the memorization of correct procedures.
            The accompanying research showed that First Aid Fever's methodology is effective at gamified learning and improving knowledge retention.
            <iframe title="First Aid Fever" src="https://itch.io/embed/2797690?dark=true" className="rounded-md mt-4 w-[208px] sm:w-[510px] h-[167px]"><a href="https://drepple.itch.io/first-aid-fever">First Aid Fever by Drepple, Charlie, Vublia</a></iframe>
        </div>,
        url: "https://drepple.itch.io/first-aid-fever",
    },
    {
        title: "XLR-8",
        year: 2019,
        categories: ["game"],
        technologies: ["GameMaker Studio"],
        url: "https://cheesycharlie.itch.io/xlr-8",
        body:
        <div>
            <iframe title="XLR-8" src="https://itch.io/embed/2804836?dark=true" className="rounded-md m-2 w-[208px] sm:w-[510px] h-[167px] sm:float-right clear-right clearfix"><a href="https://cheesycharlie.itch.io/xlr-8">XLR-8 by Charlie</a></iframe>
            XLR-8 is a top-down racing game that features a variety of gamemodes and many different vehicles to play around with. 
            The game offers both singleplayer missions as well split-screen multiplayer with controller support.
            Using the money earnt from missions, players can unlock various new vehicles and paint jobs.
            <br/><br/>
            <i>This game was made as a project for my high school senior year Computer Science class.</i>
        </div>
    },
    {
        title: "Computer Vision",
        categories: ["hidden"],
        description: "WIP",
        technologies: ["Python", "OpenCV", "NumPy"]
    },
    {
        title: "Nonogram Solver",
        year: 2022,
        categories: ["tool"],
        technologies: ["CSharp", "NUnit", "Rider"],
        body:
        <>
        Nonograms are a type of puzzles similar to Sudoku that require a methodical process and juggling of different potential board states in order to solve.
        This algorithm takes an analytical approach to solving Nonograms without the use of bruteforcing or backtracking. 
        To ensure total correctness, the different components that make up the algorithm have also been unit-tested using NUnit.
        </>,
        url: "https://github.com/Charl-Pierre/NonogramSolver",
    },
    {
        title: "Nick-n-Chick",
        categories: ["hidden"],
        description: "WIP",
        technologies: ["HTML5", "Express", "SQLite", "HTML5", "CSS3", "JavaScript"]
    },
    

].sort((a : ProjectProps, b : ProjectProps) => { 
    if (!a.year)
        return 1;
    if (!b.year)
        return -1;
    return b.year - a.year
    })

export default Projects