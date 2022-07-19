import React, {useState, useEffect} from 'react'
import {  client } from '../client';


const Books = () => {
    const [books, setBooks] = useState([]);


    useEffect(() => {
      const query = '*[_type == "books"]';
      client.fetch(query)
      .then((data) => {
        setBooks(data)
      })
    },[])
    // console.log(books)
  return (
          <article className="p-5 transition-all ease-in-out delay-150"> 
                   <h3 className="text-center about-text font-bold text-xl mb-3">Books</h3>
                    <p className="text-center text-xl m-5 ">One of my most favorite things to do is to read books, I've a vast range and genres of books, let me share them with you</p>
                  <div className=""> 
                  <ul className="list-disc leading-8 text-base p-5 italic">
                    {books.map(( book, index ) => 
                    (
                       <div>
                        <li 
                        className='ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-2xl duration-300' 
                        key={book.title + index}
                        >
                          {book.title}
                        </li>           
                        </div>
                    )
                    )}
                   </ul>
                   </div> 
                </article> 
  )
}
export default Books