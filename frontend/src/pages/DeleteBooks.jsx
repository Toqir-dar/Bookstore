import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from "notistack";

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5555/books/${id}`); // Make sure your backend port matches
      setLoading(false);
      enqueueSnackbar('Book deleted successfully!', { variant: 'success' });
      navigate('/');
    } catch (error) {
      // console.error('Error deleting book:', error);
      enqueueSnackbar('Error', { variant: 'error' });
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>

      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this book?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full rounded hover:bg-red-700 transition"
          onClick={handleDelete}
          disabled={loading}
        >
          {loading ? <Spinner /> : 'Yes, Delete it'}
        </button>
      </div>
    </div>
  );
};

export default DeleteBooks;
