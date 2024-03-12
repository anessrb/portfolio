import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/fountain.png"
import graphEmbeddings from "../images/graph_embeddings.png"
import kafkaMl from "../images/kafkaml.png"
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Dancing Fountain",
        links: [
            {
                name: "repo",
                url: "https://github.com/anessrb/Musical-Fountain",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/anessrb/Musical-Fountain/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/anessrb/Musical-Fountain/subscription",
                icon: <AiFillEye/>,
            },
   
        ],
        image: sklearnGenetic,
        description: "Make water dance with the music you like",
        target: "_blank"
    },
    
]

export default projectConfig