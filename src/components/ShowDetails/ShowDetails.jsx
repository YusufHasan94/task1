import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ShowDetails = () => {
    const [shows, setShows] = useState([]);
    const showList = useParams();
    const items = useLoaderData();
    useEffect(()=>{
        const selected = items.find(i=> parseInt(i.show.id) === parseInt(showList.id));
        setShows(selected);
    }, []);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={shows.show?.image?.original} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">{shows.show?.name}</h1>
                <p className="text-md py-0.5"><span className='font-semibold'>Language: </span> {shows.show?.language}</p>
                <p className="text-md py-0.5"><span className='font-semibold'>Summary: </span> {shows.show?.summary}</p>
                <p className="text-md py-0.5"><span className='font-semibold'>Premiered: </span> {shows.show?.premiered}</p>
                <p className="text-md py-0.5"><span className='font-semibold'>status: </span> {shows.show?.status}</p>
                <p className="text-md py-0.5"><span className='font-semibold'>URL: </span> {shows.show?.url}</p>
                <p className="text-md py-0.5"><span className='font-semibold'>Official Site: </span> {shows.show?.officialSite}</p>
                <p className="text-md py-0.5"><span className='font-semibold'>Rating: </span> 
                    {shows.show?.rating?.average ? shows.show?.rating?.average: 0}/10
                </p>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;