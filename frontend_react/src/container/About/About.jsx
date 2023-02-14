import React, {useState, useEffect}from 'react';
import {motion } from 'framer-motion'
 
import {AppWrap, MotionWrap} from '../../wrapper';
import {images} from '../../constants'
import './About.scss'
import { urlFor, client } from '../../client';

/*
const abouts = [
    {
        title:'Frontend Development',
        description: 'I am an awesome web developer.',
        imgUrl: images.about01,

    },
    {
        title:'System Administrator',
        description: 'I am an awesome web developer.',
        imgUrl: images.about02,

    },
    {
        title:'BackEnd Developement',
        description: 'I am an awesome web developer.',
        imgUrl: images.about03,

    },
    {
        title:'Architect',
        description: 'I am an awesome web developer.',
        imgUrl: images.about04,

    }
]*/

const About = () => {

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]'

        client.fetch(query)
        .then((data) => setAbouts(data))
    }, []);


    return (
        <>
            <h2 className='head-text'>
            <br/>
                Innovation and <span> Good Development</span> <br/> means <span>Good Business</span>
            </h2>
            <div className='app__profiles'>
            {abouts.map((about,index) => (
                <motion.div whileInView={{opacity: 1}} whileHover={{scale:1.1}}
                trasition={{duration: 0.5, type: 'tween'}}
                className="app__profile-item"
                key={about.title + index}
                >

                <img src={urlFor(about.imgUrl)} alt={about.title} />
                <h2 className='bold-text' style={{marginTop: 20}}> {about.title} </h2>
                <p className='p-text' style={{marginTop: 10}}> {about.description} </p>



                </motion.div>
            ))}

            </div>
        </>
    );
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', "app__whitebg");
