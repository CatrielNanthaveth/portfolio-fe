import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'
import { Card, Carousel, Space, Tag } from 'antd'
import React from 'react'

export const AboutMe = () => {
    return (
        <div className='projects'>
            <Carousel>
                <div>
                    <Card className="project-card"
                        title={<h1>About me</h1>}
                        extra={
                            <Space>
                                <a href="https://github.com/CatrielNanthaveth" rel="noreferrer" target="_blank"><GithubOutlined /></a>
                                <a href="https://www.linkedin.com/in/catriel-nanthaveth/" rel="noreferrer" target="_blank"><LinkedinOutlined /></a>
                                <a href="mailto:catriel_nanthaveth@hotmail.com" rel="noreferrer" target="_blank"><MailOutlined /></a>
                            </Space>}
                    >
                        <p className="card-text">I'm a student of Computer Science at Universidad Nacional del Oeste in Merlo, Buenos Aires.</p>
                        <p className="card-text">I love learning about things that interest me, like technology or video games.</p>
                        <p className="card-text">I am a sociable person and I like to generate comfort in my work environment because that way I am more efficient.</p>


                        <Tag className="project-tag">Adaptability</Tag>
                        <Tag className="project-tag">Communication</Tag>
                        <Tag className="project-tag">Team Work</Tag>
                        <Tag className="project-tag">Problem-solving</Tag>
                        <Tag className="project-tag">Compromise</Tag>
                    </Card>
                </div>
                <div>
                    <Card className="project-card"
                        title={<h1>Backend</h1>}
                    >
                        <p className="card-text">I have about half a year learning backend technologies.</p>
                        <p className="card-text">I'd like to focus in this side of the web development, but my frontend skills are better for now.</p>
                        <p className="card-text">In any case, I like to learn and improve my skills.</p>


                        <Tag className="project-tag">Javascript</Tag>
                        <Tag className="project-tag">NodeJS</Tag>
                        <Tag className="project-tag">Express</Tag>
                        <Tag className="project-tag">MongoDB</Tag>
                        <Tag className="project-tag">PostgreSQL</Tag>
                        <Tag className="project-tag">other libraries & languages</Tag>
                    </Card>
                </div>
                <div>
                    <Card className="project-card"
                        title={<h1>Frontend</h1>}
                    >
                        <p className="card-text">I have about one year learning frontend technologies.</p>
                        <p className="card-text">I was in a bootcamp where I learnt ReactJS and libraries related.</p>

                        <Tag className="project-tag">Javascript</Tag>
                        <Tag className="project-tag">ReactJS</Tag>
                        <Tag className="project-tag">HTML</Tag>
                        <Tag className="project-tag">CSS</Tag>
                        <Tag className="project-tag">SaSS</Tag>
                        <Tag className="project-tag">Redux</Tag>
                        <Tag className="project-tag">other libraries</Tag>
                    </Card>
                </div>
                <div>
                    <Card className="project-card"
                        title={<h1>Testing</h1>}
                    >
                        <p className="card-text">While developing my projects, I have to test it, so there are some technologies that I use.</p>
                        <p className="card-text">I don't use all of these, because my projects aren't big enough, so I'm not fluent in some of these.</p>

                        <Tag className="project-tag">Postman</Tag>
                        <Tag className="project-tag">Jest</Tag>
                        <Tag className="project-tag">JUnit</Tag>
                        <Tag className="project-tag">TDD</Tag>

                    </Card>
                </div>

            </Carousel>
        </div>
    )
}
