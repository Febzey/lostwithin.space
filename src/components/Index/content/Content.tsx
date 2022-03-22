import portfolio from '../../../images/portfolio.png';
import eusurvival from '../../../images/eusurvival.png';
import { FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import MyStack from '../Stack/MyStack';


const Content = () => {
    return (
        <>
            <MyStack />
            <Projects />
            <Contact />
        </>
    )
}

export default Content;