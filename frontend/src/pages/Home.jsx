import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BookCard from '../components/home/BookCard';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showtype, setShowtype] = useState('table'); // Added state to manage view type

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then(response => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []); // ✅ Added dependency array to avoid infinite loop

  return (
    <div className='p-4'>
      <div className="flex justify-center items-center gap-x-4">
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-1g' onClick={() => setShowtype('table')}>
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-1g' onClick={() => setShowtype('card')}>
          Card
        </button>

      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Book List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-4xl text-blue-800 hover:text-blue-700' title='Add New Book' />
        </Link>
      </div>

      {loading ? <Spinner /> : showtype === 'table' ? (<BooksTable books={books} />) : <BookCard books={books} />}
    </div>
  );
};

export default Home;
