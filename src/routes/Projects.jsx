import { Card, Carousel, Tag } from "antd";

export const Projects = () => {

    const projects = [
        {
            name: "TODO List",
            link: "https://github.com/CatrielNanthaveth/todo-app-with-backend",
            description: ["Project made for the subject of Interfaces de Usuario y Tecnologías Web.", "Web application that allows you to create, edit, complete and delete pending tasks.", "To do this, you can log in and register on the page, allowing the tasks to be stored on the web and not lost once you leave the page."],
            tags: ["NodeJS", "ReactJS", "Express", "Postgres"]
        },
        {
            name: "Random Quote Machine",
            link: "https://github.com/CatrielNanthaveth/Random-Quote-Machine",
            description: ["Project made for the React course of FreeCodeCamp.org.", "Web application that allows obtaining a random quote.", "This phrase can be shared on Twitter through a simple button."],
            tags: ["HTML", "CSS", "Javascript", "ReactJS"]
        },
        {
            name: "Pong!",
            link: "https://github.com/CatrielNanthaveth/Pong",
            description: ["Project made for the subject of Programación Orientada a Objetos 2.", "Python game that imitates Pong!.", "It has a simple page that explain the project."],
            tags: ["Python", "Pygame", "HTML", "CSS"]
        },
        {
            name: "NGO web",
            link: "https://github.com/alkemyTech/React-SXXI-T2",
            description: ["Project made for the React bootcamp dictated by the Universidad Siglo 21.", "Landing Page of a NGO.", "We did it with the Scrum methodology and a five members team + a teacher who work as Scrum Master."],
            tags: ["ReactJS", "Axios", "Redux", "HTML", "SaSS"]
        },
    ]

    return (
        <div className='projects'>
            <Carousel>
                {projects.map(e => {
                    return <div>
                        <Card className="project-card"
                            title={<h1>{e.name}</h1>}
                            extra={<a href={e.link} rel="noreferrer" target="_blank">Github</a>}
                        >
                            {e.description.map(paragraph => {
                                return <p className="card-text">{paragraph}</p>
                            })}

                            {e.tags.map(tag => {
                                return  <Tag className="project-tag">{tag}</Tag>
                            })}

                        </Card>
                    </div>
                })}
            </Carousel>
        </div>
    )
}
