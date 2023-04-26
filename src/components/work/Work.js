import React from 'react';
import Timeline from "./Timeline";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Work() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                      
                   </Grid>
                ))}
            </Grid>
            <Timeline header={'Experiance'}/>
            <Timeline header={'Education'}/>
        </Box>
    );
};