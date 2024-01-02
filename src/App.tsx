import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { Info } from './components/info/info';
import { About } from './components/about/about';
import { Navigation } from './components/navigation/navigation';
import throttle from './helper/index';
import { SocialIcons } from './components/social-icons/social-icons';
import About_module from './components/about/about.module.scss';
import Classnames from 'classnames';
import information from '../informations.json';
import { WorkExperienceCard } from './components/work-experience-card/work-experience-card';
import { ProjectCard } from './components/project-card/project-card';


function App() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e: { clientX: any; clientY: any; }) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        const throttledUpdate = throttle(updateCursorPosition, 0);
        window.addEventListener('mousemove', throttledUpdate);

        return () => {
            window.removeEventListener('mousemove', throttledUpdate);
        };
    }, []);


    return (
        <>
            <div className={styles.cursor} style={{ left: position.x, top: position.y }}></div>
            <div className={styles.App}>
                <section className={styles.left}>
                    <div className={styles.gradient}>
                        <div>
                            <Info />
                            {/* <Navigation /> */}
                            <div className={styles.navigation}>
                                <ul>
                                    <li>
                                        <a href="#about">
                                            <span className={styles.indicator}></span>
                                            <span>About</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#experience">
                                            <span className={styles.indicator}></span>
                                            <span>Experience</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#projects">
                                            <span className={styles.indicator}></span>
                                            <span>Project</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#hallOfFame">
                                            <span className={styles.indicator}></span>
                                            <span>Hall of Fame</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#certifications">
                                            <span className={styles.indicator}></span>
                                            <span>Certifications</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <SocialIcons />
                    </div>
                </section>
                <section className={styles.right}>
                    <div className={styles.scrollable}>
                        <div id="about">
                            <About text={information.about} />
                            <About text={information.about} />
                        </div>
                        <div id="experience">
                            {information.experience.map((item: any, index: any) => (
                                <WorkExperienceCard
                                    data={{
                                        primaryRole: item.primaryRole,
                                        companyName: item.companyName,
                                        role: item.role,
                                        broaderRole: item.broaderRole,
                                        description: item.description,
                                        technologiesUsed: item.technologiesUsed,
                                        link: item.link,
                                        duration: item.duration,
                                    }}
                                />
                            ))}
                            <div className={styles.resume}>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    View Full Resume
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className={styles.icon}
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div id="projects">
                            {information.projects.map((item: any, index: any) => (
                                <ProjectCard
                                    data={{
                                        description: item.description,
                                        technologiesUsed: item.technologiesUsed,
                                        link: item.link,
                                        name:item.name,
                                        image:item.image
                                    }}
                                />
                            ))}
                        </div>
                        <p className={Classnames(styles.profile, About_module.aboutme)}>
                            Coded in <a href="http://"> Visual Studio Code</a> and
                            <a href="http://"> Codux</a> by yours truly. Built with
                            <a href="http://"> React.js(Vite) </a>
                            and <a href="http://"> SASS</a>, deployed with
                            <a href="http://"> Vercel</a>.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default App;
