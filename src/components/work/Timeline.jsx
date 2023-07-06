import React from 'react';
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import Style from './Timeline.module.scss';
import classNames from "classnames";

export default function Timeline(props) {

    const {header} = props;
    
    const infoDetails = (header) => {

        if(header === "Education") return info.education;
        else if (header === "Experiance") return info.experiance
    };

    const timelineInfo = infoDetails(header);

    return (
        <Box width={{xs: '90%', md: '70%'}} className={ classNames(Style.timelineBox, Style.tiltInLeft)} padding={{xs: '1rem', md: '3rem'}}>
            
            <Box  className={ classNames(Style.paper, Style.shadowed)} >
            
                <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
                fontSize={'1rem'}>

                <Box component={'span'} aria-label="title" 
                    role="terminal title"
                    className={classNames(Style.timelineTitle)}  
                    fontSize={{ xs: '1rem' ,md : '1.3rem'}}             
                    > {header} 
                    </Box> 
                </Box> 
                {/* <h2 style={{fontWeight : '400'}} >{header}</h2> */}
            
                <div style={{padding: '1.5rem'}}>
                <ul className={Style.timeline}>

                    {timelineInfo.map((item, index) => (
                        <li key={index}>
                            <div className={ item.direction === "right" ? Style.directionR : Style.directionL}>
                                <div className={Style.flagWrapper} >
                                    <span className={Style.flag} > {item.title} </span>
                                    <span className={Style.timeWrapper} ><span className={Style.time}  > {item.time} </span></span>
                                </div>
                                <div className={Style.desc} > {item.description} </div>
                                {item.detail === "" ? <div></div> : <div className={Style.desc} > {item.detail} </div>}
                            </div>
                        </li>
                    ))}



                    </ul>
                </div>
          
            </Box>
        </Box>
    );
};