import { useEffect, useState } from 'react';
import ShowCard from '../Card/ShowCard';

const Main = () => {
  const [shows, setShows] = useState([]);
  useEffect(()=>{
    fetch('https://api.tvmaze.com/search/shows?q=all')
    .then(res => res.json())
    .then(data => setShows(data));
  }, [])
  console.log(shows);
    return (
        <div className='my-8'>
            <div className='grid lg:grid-cols-3 gap-4 justify-items-center'>
                {
                shows.map(show=> <ShowCard key={show.show.id} show={show}></ShowCard>)
                }
            </div>
        </div>
    );
};

export default Main;