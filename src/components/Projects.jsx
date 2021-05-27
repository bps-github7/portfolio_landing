
import useGithub from '../hooks/useGithub';
import React from 'react';

const Projects = () => {
  const url = 'https://api.github.com/users/bps-github7';
  const {user} = useGithub(url);


    return (
      <section className="projects">
        projects
        <ul>
          {
            /* Think we need to go deeper with our custom hook, actually return the repos as an array of objects...
            on the contrary, doing so would dissallow us from displaying other github profile link, avatar url etc
            and we would need to write a custom hook. See someone elses approach to this problem (maybe Ben Awad) and
            maybe youre doing something wrong in your custom hook useGithub */
            user ?
              <li> {user.public_repos} </li>:
              null 
              // (user.public_repos
              // .map((repo, i) => (
              //   <li key={i}>
              //     {repo.name}
              //   </li>
              //    )
              //   )
              // ) :
              // null
          }
        </ul>
     </section>
    );
}

export default Projects;
