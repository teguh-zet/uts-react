import { useState, useEffect } from 'react';
import FilmCard from '../components/FilmCard';
import FilmForm from '../components/FilmForm';

const FilmPage = () => {
  const defaultFilms = [
    {
      id: 1,
      name: 'The Shawshank Redemption',
      image: 'https://upload.wikimedia.org/wikipedia/id/8/81/ShawshankRedemptionMoviePoster.jpg',
      year: 1994,
      genre: 'Drama',
      duration: '142 minutes',
      synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    },
    {
      id: 2,
      name: 'The Godfather',
      image: 'https://play-lh.googleusercontent.com/ZucjGxDqQ-cHIN-8YA1HgZx7dFhXkfnz73SrdRPmOOHEax08sngqZMR_jMKq0sZuv5P7-T2Z2aHJ1uGQiys',
      year: 1972,
      genre: 'Crime, Drama',
      duration: '175 minutes',
      synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    },
    {
      id: 3,
      name: 'The Dark Knight',
      image: 'https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg',
      year: 2008,
      genre: 'Action, Crime, Drama',
      duration: '152 minutes',
      synopsis: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    },
    {
      id: 4,
      name: 'Pulp Fiction',
      image: 'https://assets.temu.id/imgs/image/2024/06/15/Tambahkan_subjudul_1.jpg?t=o&v=780',
      year: 1994,
      genre: 'Crime, Drama',
      duration: '154 minutes',
      synopsis: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    },
  ];

  const [films, setFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterGenre, setFilterGenre] = useState('');
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const storedFilms = JSON.parse(localStorage.getItem('films'));
    if (!storedFilms || storedFilms.length === 0) {
      setFilms(defaultFilms);
      localStorage.setItem('films', JSON.stringify(defaultFilms));
    } else {
      setFilms(storedFilms);
    }
  }, []);

  const handleSaveFilm = (film) => {
    let updatedFilms;
    if (film.id) {
      updatedFilms = films.map((f) => (f.id === film.id ? film : f));
    } else {
      film.id = Date.now();
      updatedFilms = [...films, film];
    }
    setFilms(updatedFilms);
    localStorage.setItem('films', JSON.stringify(updatedFilms));
  };

  const handleDeleteFilm = (id) => {
    const updatedFilms = films.filter((f) => f.id !== id);
    setFilms(updatedFilms);
    localStorage.setItem('films', JSON.stringify(updatedFilms));
  };

  const handleInfoFilm = (film) => {
    alert(`Judul: ${film.name}\nGenre: ${film.genre}\nDurasi: ${film.duration}\nSinopsis: ${film.synopsis}`);
  };

  const handleEditFilm = (film) => {
    setSelectedFilm(film);
    setIsFormVisible(true);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const handleSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

  const handleFilterGenre = (e) => {
    setFilterGenre(e.target.value);
  };

  const getFilteredAndSortedFilms = () => {
    let filteredFilms = films;

    if (searchTerm) {
      filteredFilms = filteredFilms.filter((film) =>
        film.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterGenre) {
      filteredFilms = filteredFilms.filter((film) =>
        film.genre.toLowerCase().includes(filterGenre.toLowerCase())
      );
    }

    if (sortOption) {
      filteredFilms = [...filteredFilms].sort((a, b) => {
        if (sortOption === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortOption === 'year') {
          return a.year - b.year;
        } else if (sortOption === 'duration') {
          const durationA = parseInt(a.duration.split(' ')[0]);
          const durationB = parseInt(b.duration.split(' ')[0]);
          return durationA - durationB;
        } else {
          return 0;
        }
      });

      if (sortOrder === 'desc') {
        filteredFilms.reverse();
      }
    }

    return filteredFilms;
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-6">Daftar Film</h1>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => {
            setSelectedFilm(null);
            setIsFormVisible(true);
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Tambah Film
        </button>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Cari film..."
            value={searchTerm}
            onChange={handleSearch}
            className="border p-2 rounded"
          />
          <select onChange={handleSort} className="border p-2 rounded">
            <option value="">Sortir</option>
            <option value="name">Judul</option>
            <option value="year">Tahun</option>
            <option value="duration">Durasi</option>
          </select>
          <select onChange={handleSortOrder} className="border p-2 rounded">
            <option value="asc">ascending</option>
            <option value="desc">descending</option>
          </select>
          <select onChange={handleFilterGenre} className="border p-2 rounded">
            <option value="">Semua Genre</option>
            <option value="Drama">Drama</option>
            <option value="Crime">Crime</option>
            <option value="Action">Action</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {getFilteredAndSortedFilms().map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            onEdit={handleEditFilm}
            onDelete={handleDeleteFilm}
            onInfo={handleInfoFilm}
          />
        ))}
      </div>
      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <FilmForm
            initialFilm={selectedFilm || { name: '', image: '', year: '', genre: '', duration: '', synopsis: '' }}
            onSave={handleSaveFilm}
            onClose={() => setIsFormVisible(false)}
          />
        </div>
      )}
    </div>
  );
};

export default FilmPage;
