import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'
import { Card, Carousel, Space, Tag } from 'antd'
import React from 'react'

export const AboutMe = () => {

    const data = [
        {
            name: "About me",
            extra: <Space>
                <a href="https://github.com/CatrielNanthaveth" rel="noreferrer" target="_blank"><GithubOutlined /></a>
                <a href="https://www.linkedin.com/in/catriel-nanthaveth/" rel="noreferrer" target="_blank"><LinkedinOutlined /></a>
                <a href="mailto:catriel_nanthaveth@hotmail.com" rel="noreferrer" target="_blank"><MailOutlined /></a>
            </Space>,
            description: ["I'm a student of Computer Science at Universidad Nacional del Oeste in Merlo, Buenos Aires.", "I love learning about things that interest me, like technology or video games.", "I am a sociable person and I like to generate comfort in my work environment because that way I am more efficient."],
            tags: ["Adaptability", "Communication", "Team Work", "Problem Solving", "Compromise"]
        },
        {
            name: "Backend",
            extra: null,
            description: ["I have a year learning backend technologies.", "I use this knowledge to do my job as a Web Programmer in Shalion.", "I'm always looking for deep my learn as a backend developer."],
            tags: ["NodeJS", "Express", "PostgreSQL", "Postman", "REST API", "GraphQL", "OAuth", "JWT", "other libraries & languages"]
        },
        {
            name: "Frontend",
            extra: null,
            description: ["I have about two years learning frontend technologies.", "I was in a bootcamp where I learnt ReactJS and libraries related."],
            tags: ["ReactJS", "NextJS", "HTML", "CSS", "SaSS", "Redux", "other libraries"]
        },
        {
            name: "Testing",
            extra: null,
            description: ["While developing my projects, I have to test it, so there are some technologies that I use.", "I don't use all of these, because my projects aren't big enough, so I'm not fluent in some of these."],
            tags: ["Postman", "Jest", "JUnit", "TDD", "PlayWright"]
        },
    ]
    return (
        <div className='projects'>
            <Carousel>

                {data.map(e => {
                    return <div>
                        <Card className="project-card"
                            title={<h1>{e.name}</h1>}
                            extra={e.extra}
                        >
                            {e.description.map(paragraph => {
                                return <p className='card-text'>{paragraph}</p>
                            })}


                            {e.tags.map(tag => {
                                return <Tag className="project-tag">{tag}</Tag>
                            })}

                        </Card>
                    </div>
                })}

            </Carousel>
        </div>
    )
}
