import { Card, Carousel, Tag } from "antd";

export const Projects = () => {

    return (
        <div className='projects'>
            <Carousel>
                <div>
                    <Card className="project-card"
                        title={<h1>TODO List</h1>}
                        extra={<a href="https://github.com/CatrielNanthaveth/todo-app-with-backend" rel="noreferrer" target="_blank">Github</a>}
                    >
                        <p className="card-text">Project made for the subject of Interfaces de Usuario y Tecnologías Web.</p>
                        <p className="card-text">Web application that allows you to create, edit, complete and delete pending tasks.</p>
                        <p className="card-text">To do this, you can log in and register on the page, allowing the tasks to be stored on the web and not lost once you leave the page.</p>


                        <Tag className="project-tag">NodeJS</Tag>
                        <Tag className="project-tag">ReactJS</Tag>
                        <Tag className="project-tag">Express</Tag>
                        <Tag className="project-tag">Postgres</Tag>

                    </Card>
                </div>
                <div>
                    <Card className="project-card"
                        title={<h1>Random Quote Machine</h1>}
                        extra={<a href="https://github.com/CatrielNanthaveth/Random-Quote-Machine" rel="noreferrer" target="_blank">Github</a>}
                    >
                        <p className="card-text">Project made for the React course of FreeCodeCamp.org.</p>
                        <p className="card-text">Web application that allows obtaining a random quote.</p>
                        <p className="card-text">This phrase can be shared on Twitter through a simple button.</p>


                        <Tag className="project-tag">HTML</Tag>
                        <Tag className="project-tag">CSS</Tag>
                        <Tag className="project-tag">Javascript</Tag>
                        <Tag className="project-tag">ReactJS</Tag>

                    </Card>
                </div>
                <div>
                    <Card className="project-card"
                        title={<h1>Pong!</h1>}
                        extra={<a href="https://github.com/CatrielNanthaveth/Pong" rel="noreferrer" target="_blank">Github</a>}
                    >
                        <p className="card-text">Project made for the subject of Programación Orientada a Objetos 2.</p>
                        <p className="card-text">Python game that imitates Pong!.</p>
                        <p className="card-text">It has a simple page that explain the project.</p>


                        <Tag className="project-tag">Python</Tag>
                        <Tag className="project-tag">Pygame</Tag>
                        <Tag className="project-tag">HTML</Tag>
                        <Tag className="project-tag">CSS</Tag>

                    </Card>
                </div>
                <div>
                    <Card className="project-card"
                        title={<h1>NGO web</h1>}
                        extra={<a href="https://github.com/alkemyTech/React-SXXI-T2" rel="noreferrer" target="_blank">Github</a>}
                    >
                        <p className="card-text">Project made for the React bootcamp dictated by the Universidad Siglo 21.</p>
                        <p className="card-text">Landing Page of a NGO.</p>
                        <p className="card-text">We did it with the Scrum methodology and a five members team + a teacher who work as Scrum Master.</p>


                        <Tag className="project-tag">Python</Tag>
                        <Tag className="project-tag">Pygame</Tag>
                        <Tag className="project-tag">HTML</Tag>
                        <Tag className="project-tag">CSS</Tag>

                    </Card>
                </div>

            </Carousel>
        </div>
    )
}
