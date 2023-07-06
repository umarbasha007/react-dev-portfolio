import React from 'react';
import {Box, Grid, Paper} from "@mui/material";
import {info} from "../../info/Info";
import Style from './Timeline.module.scss';


export default function Timeline(props) {

    const {header} = props;
    
    const infoDetails = (header) => {

        if(header === "Education") return info.education;
        else if (header === "Experiance") return info.experiance
    };

    const timelineInfo = infoDetails(header);

    return (
        <Box width={{xs: '80%', md: '50%'}} className={Style.timelineBox}>
        
        <Box  className={Style.paper} sx={{ boxShadow: 3 }}>
            <h2>{header}</h2>
            <ul className={Style.timeline}>

            

            {timelineInfo.map((item, index) => (
                <li key={index}>
                    <div className={ item.direction === "right" ? Style.directionR : Style.directionL}>
                        <div className={Style.flagWrapper} >
                            <span className={Style.flag} > {item.title} </span>
                            <span className={Style.timeWrapper} ><span className={Style.time}  > {item.time} </span></span>
                        </div>
                        <div className={Style.desc} > {item.description} </div>
                        <div className={Style.desc} > {item.detail} </div>
                    </div>
                </li>
            ))}
            


            </ul>
            </Box>
        </Box>
    );
};