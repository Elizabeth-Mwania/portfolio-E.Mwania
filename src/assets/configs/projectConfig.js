import {AiFillGithub} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import admPrediction from "../images/adm_prediction.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Graduate Admission Prediction",
        links: [
            {
                name: "repo",
                url: "https://github.com/Elizabeth-Mwania/Admission_Prediction",
                icon: <AiFillGithub/>,
            },
            {
                name: "docs",
                url: "https://admission-prediction.readthedocs.io/en/latest/index.html",
                icon: <ImBook/>,
            }
        ],
        image: admPrediction,
        description: "This project is created to predict Graduate Admissions on a Masters Program. It considers several parameters which are that are considered important during the application for Masters Programs.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Malaria Detection",
        links: [
            {
                name: "repo",
                url: "https://github.com/Elizabeth-Mwania/malaria_detection_with_hyperparamerter_tuning",
                icon: <AiFillGithub/>
            },
            
            {
                name: "docs",
                url: "https://malaria-detection-with-hyperparamerter-tuning.readthedocs.io/en/latest/",
                icon: <ImBook/>,
            }
        ],
        image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
        description: "This project focuses on analyzing malaria data to build a predictive model that classifies cases as either Severe or Not Severe using a decision tree algorithm. The project includes steps for data preprocessing, visualization, model training, and evaluation to address class imbalance and ensure accurate predictions.",
        target: "_blank"
    }
]

export default projectConfig