import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Booking = () => {
    const [booking, setBooking] = useState([]);
    const showList = useParams();
    const items = useLoaderData();
    useEffect(()=>{
        const selected = items.find(i=> parseInt(i.show.id) === parseInt(showList.id));
        setBooking(selected);
    }, []);
    const handleBooking = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const movieName = form.movieName.value;
        const movieLanguage = form.movieLanguage.value;
        const dateOfBooking = form.dateOfBooking.value;
        const bookedShow = {name, email, movieName, movieLanguage, dateOfBooking};
        localStorage.setItem("booked", JSON.stringify(bookedShow));
        form.reset("");
        alert("booking confirm");
    }
    console.log(booking.show);
    return (
       <div className='flex justify-center align-middle my-20'>
        <div className='w-full'>
            <div>
                <h1 className='font-semibold text-4xl text-center'>Movie Booking </h1>
            </div>
            <form className='my-10 flex flex-col gap-3 justify-center items-center' onSubmit={handleBooking}>
                <input type="text" name="name" placeholder='Name' className='border-black border-2 rounded px-2 py-1 w-1/2' id="" required/>
                <input type="text" name="email" placeholder='email' className='border-black border-2 rounded px-2 py-1 w-1/2' id="" required/>
                <input type="text" name="movieName" className='border-black border-2 rounded px-2 py-1 w-1/2' id="" value={booking.show?.name} required/>
                <input type="text" name="movieLanguage" className='border-black border-2 rounded px-2 py-1 w-1/2' id=""  value={booking.show?.language} required/>
                <input type="text" name="dateOfBooking" className='border-black border-2 rounded px-2 py-1 w-1/2' id="" value={booking.show?.premiered} required/>
                <input type="submit" name="submit" value="Confirm Booking" className='btn btn-primary rounded px-2 py-1 w-1/4 text-white' id="" />
            </form>
        </div>
       </div>
    );
};

export default Booking;