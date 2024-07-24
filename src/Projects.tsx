import React from "react";

export type ProjectProps = {
    title: string;
    filter?: [string];
    year?: number;
    description?: string;
    type?: string;
    children?: JSX.Element;
    align?: string; //This is only added during rendering to alternate alignment side
  }

const Projects: ProjectProps[] = [
    {
        title: "Verdachte Tijdlijn",
        description: "WIP",
    },
    {
        title: "Restacked",
        description: "WIP",
        children: <></>,
    },
    {
        title: "Computer Vision",
        description: "WIP",
    },
    {
        title: "CANIM",
        description: "WIP",
    },
    {
        title: "Nonogram Solver",
        description: "WIP",
    },
    {
        title: "Nick-n-Chick",
        description: "WIP",
    },
    {
        title: "XLR-8",
        description: "WIP",
    },
    {
        title: "First-Aid Fever",
        description: "WIP",
    },
    {
        title: "Pokemon Higher or Lower",
        description: "WIP",
    },
    {
        title: "Tetris",
        description: "WIP",
    },

].sort((a : ProjectProps, b : ProjectProps) => { 
    if (!a.year)
        return 1;
    if (!b.year)
        return -1;
    return b.year - a.year
    })

export default Projects