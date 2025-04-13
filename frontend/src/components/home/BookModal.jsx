import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai'; // ✅ Fix: This was missing

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-60 z-[9999] flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-300 cursor-pointer' // ✅ Fix: red-300
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {book.publishYear}
        </h2>
        <h4 className='my-2 text-gray-500'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.author}</h2>
        </div>
        <p className='mt-4'>Anything you want to show</p>
        <p className='my-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </div>
    </div>
  );
};

export default BookModal;
