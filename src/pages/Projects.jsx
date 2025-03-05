import minesweeper from '../assets/minesweeper.png'
import wicse from '../assets/wicse.png'
import snoopy from '../assets/snoopy.png'
import cs from '../assets/cs.jpg'
import './Projects.css'


import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
    return(
        <>
        <section id="projects">
            <h1>Projects</h1>
            <div className="Cards">
                <ProjectCard
                    title={"Example Project"}
                    descr={"Describe the project and what you contributed!"}
                    img={cs}
                    skills={"Write skills here!"}
                    // link={""}
                    link_descr={"Link(if possible)"}
                />
                
                <ProjectCard
                    title={"WiCSE Website"}
                    descr={"Updated and maintained the WiCSE website to reflect current club activities."}
                    img={wicse}
                    skills={"Angular, TypeScript, Firebase"}
                    link={"https://ufwicse.com/"}
                    link_descr={"Link to Website"}
                />

                <ProjectCard
                    title={"Minesweeper"}
                    descr={"Utilized object-oriented programming principles for efficient code organization and maintenance."}
                    img={minesweeper}
                    skills={"C++, SFML"}
                    link={"https://ufwicse.com/"}
                    link_descr={"Link to GitHub"}
                />

                <ProjectCard
                    title={"Lorem ipsum"}
                    descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    img={snoopy}
                    skills={"Lorem ipsum"}
                    // link={""}
                    link_descr={"Lorem ipsum"}
                />

                <ProjectCard
                    title={"Lorem ipsum"}
                    descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    img={snoopy}
                    skills={"Lorem ipsum"}
                    // link={""}
                    link_descr={"Lorem ipsum"}
                />
            </div>

        </section>
        </>

  );
}

export default Projects