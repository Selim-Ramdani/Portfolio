import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from '../../constants';
import "./About.scss";

const About = () => {
  const about = [
    { title: "Frontend Development", description: "React/Next.js - Redux/Toolkit", imgUrl: images.about01 },
    { title: "MERN Stack", description: "Je suis un bon développeur", imgUrl: images.about02 },
    { title: "Backend Development", description: "Ruby on Rails", imgUrl: images.about03 },
    { title: "Déploiements", description: "Heroku, Netlify, Vercel", imgUrl: images.about04 }
  ];
  return (
    <>
      <h2 className="head-text">
        Je sais qu'un <span>Bon développement</span><br /> signifie de<span> bonnes affaires</span>
      </h2>

      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
            <p className="p-text" style={{marginTop:10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
