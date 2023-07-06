import React , {useRef} from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    // const firstName = info.firstName.toLowerCase()
    const lastName = info.lastName.toLowerCase()
    const mainDir = lastName.replace(' ', '_')

    const sectionAboutRef = useRef(null);
    const sectionSkillRef = useRef(null);
    const sectionHobbyRef = useRef(null);

    const scrollToSection = ( refer ) => {

        switch (refer) {
            case 'sectionAboutRef':
                sectionAboutRef.current.scrollIntoView({ top: '50%', behavior: 'smooth' });
                break;
            case 'sectionSkillRef':
                sectionSkillRef.current.scrollIntoView({ top: '50%', behavior: 'smooth' });
                break;
            case 'sectionHobbyRef':
                sectionHobbyRef.current.scrollIntoView({ top: '50%', behavior: 'smooth' });
                break;
            default:
                break;
        }


        
    };
    
    const contentText = () => {
        return <div>
            <p><span style={{color: info.baseColor}}>{mainDir} $ <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.contents.map((data, index) => (
                    <li key={index} onClick={() => scrollToSection(data.refer)} ><Box component={'span'} mr={'1rem'}>{data.emoji}</Box>{data.label}</li>
                ))}
            </ul>
        </div>;
    }

    const aboutMeText = () => {
        return <div ref={sectionAboutRef}>
            <p><span style={{color: info.baseColor}}>{mainDir} $</span> cat
                about.txt </p>
            <p><span style={{color: info.baseColor}}>about.txt <span
                className={Style.green}>(main)</span> $ </span>
                <span>{info.bio}</span>
            </p>
        </div>;
    }

    const skillsText = () => {
        return <div ref={sectionSkillRef}>
            <p><span style={{color: info.baseColor}}>{mainDir} $</span> cd skills
            </p>
            <p><span style={{color: info.baseColor}}>skills<span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li  key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Front-End</p>
            <ul className={Style.skills}>
                {info.skills.frontEnd.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Back-End</p>
            <ul className={Style.skills}>
                {info.skills.backEnd.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Databases</p>
            <ul className={Style.skills}>
                {info.skills.database.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> CI/CD</p>
            <ul className={Style.skills}>
                {info.skills.ciCd.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Patterns</p>
            <ul className={Style.skills}>
                {info.skills.patterns.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Automation</p>
            <ul className={Style.skills}>
                {info.skills.automation.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Machine Learning & AI</p>
            <ul className={Style.skills}>
                {info.skills.machineLearning_ai.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Azure</p>
            <ul className={Style.skills}>
                {info.skills.azure.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Tools</p>
            <ul className={Style.skills}>
                {info.skills.tools.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </div>;
    }

    const miscText = () => {
        return <div ref={sectionHobbyRef}>
            <p><span style={{color: info.baseColor}}>{mainDir} $</span> cd
                hobbies</p>
            <p><span style={{color: info.baseColor}}>hobbies<span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </div>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={contentText()} emoji={'🏠'} title={'content'} />
            <Terminal text={aboutMeText()} emoji={'📋'} title={'about.txt'} />
            <Terminal text={skillsText()} emoji={'🧰'} title={'skills'} />
            <Terminal text={miscText()} emoji={'☘️'} title={'hobbies'} />
        </Box>
    )
}