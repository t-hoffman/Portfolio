import { useState, useEffect } from 'react';

const Projects = (props) => {
    const [projects, setProjects] = useState(null);

    const getProjectData = async () => {
        const response = await fetch('./projects.json');
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => {
        getProjectData()
    }, []);
console.log(projects)
    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                {
                    project.image.map((img) => {
                        return <img src={img} height="450px" alt={project.name} />
                    })
                }
                <p>
                    <a href={project.git}>
                    <button>Github</button>
                    </a>
                {
                    project.live.map((live) => {
                        return (
                            <a href={live}>
                            <button>Live Site</button>
                            </a>
                        )
                    })
                }
                </p>
            </div>
        ));
    };    

    return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;