import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import {Box} from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const {text} = props;
   const {emoji} = props;
   const {title} = props

   return (
      <Box component={'section'} className={classNames(Style.terminal, Style.shadowed, Style.tiltInLeft)}
           width={{xs: '85%', md: '50%'}} borderRadius={'0.5rem'} mb={'4rem'}>
         <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
              fontSize={'1rem'}>
            <Box component={'span'} aria-label="icons" 
                  className={classNames(Style.terminalIcons)}
            >
            <i className={classNames(iconClass, Style.red)}/>
            <i className={classNames(iconClass, Style.amber)}/>
            <i className={classNames(iconClass, Style.green)}/>
            </Box>
            

            <Box component={'span'} aria-label="title" 
                  role="terminal title"
                  className={classNames(Style.terminalTitle)}  
                  fontSize={{ xs: '1rem' ,md : '1.3rem'}}             
                  > {emoji} {title}</Box> 
            </Box>
         <Box py={{xs: '1rem', md: '2rem'}} px={{xs: '2rem', md: '3rem'}} borderRadius={'0 0 0.5rem 0.5rem'}
              sx={{backgroundColor: '#27242f'}} fontSize={{ xs: '1rem' ,md : '1.2rem'}} fontFamily={'Courier New, Courier, monospace'}>
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;