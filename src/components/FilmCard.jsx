import { useState } from 'react';
import { FaEdit, FaTrashAlt, FaInfoCircle, FaHeart } from 'react-icons/fa';

const FilmCard = ({ film, onEdit, onDelete, onInfo }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={film.image} alt={film.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{film.name}</div>
        <p className="text-gray-700 text-base">Tahun : {film.year}</p>
        <p className="text-gray-700 text-base">Durasi : {film.duration}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <div>
          <button onClick={() => onInfo(film)} className="text-blue-500 hover:text-blue-700 mr-2">
            <FaInfoCircle size={20} />
          </button>
          <button onClick={() => onEdit(film)} className="text-yellow-500 hover:text-yellow-700 mr-2">
            <FaEdit size={20} />
          </button>
          <button onClick={() => onDelete(film.id)} className="text-red-500 hover:text-red-700">
            <FaTrashAlt size={20} />
          </button>
        </div>
        <button onClick={toggleLike} className={`text-${liked ? 'red' : 'gray'}-500 hover:text-${liked ? 'red' : 'gray'}-700`}>
          <FaHeart size={20} />
        </button>
      </div>
    </div>
  );
};

export default FilmCard;
