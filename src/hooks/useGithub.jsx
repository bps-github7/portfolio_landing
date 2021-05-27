import { useEffect, useState } from 'react';

const useGithub = url => {
  const [user, setUser] = useState({name : "fred"});

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUser(data);
      })
  }, [url])
  return(user);
}
export default useGithub;