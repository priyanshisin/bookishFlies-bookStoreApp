import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from "axios"
import { Link} from "react-router-dom";

function Course() {
  const [book, setBook]= useState([]);
  useEffect(()=>{
    const getBook = async()=> {
      try {
        const res = await axios.get("http://localhost:4001/book");
        // console.log(res.data)
        // setBook(res.data)
        const data_free = res.data.filter((data)=>data.category==="Free");
        setBook(data_free);
        console.log(data_free)
        const data_paid = res.data.filter((data)=>data.category==="Paid");
        setBook(data_paid);
        console.log(data_paid)
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[]);

  return (<>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        {/* heading */}
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>
                We are delighted to have you <span className='text-pink-500'>Here :)</span>
            </h1>
            <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo sint vero quisquam tempora, accusamus eius saepe dolores dolore doloremque ea repellat nostrum? Eligendi ut repellat autem delectus, consequatur quibusdam aperiam iusto fugiat minima quidem dolores quod adipisci excepturi eaque voluptatem.</p>

            <Link to={"/"}>
                <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
            </Link>
        </div>

        {/* card */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3" >
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
    </div>
 </>)
}

export default Course