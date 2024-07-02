import { useState } from 'react';

const FilmForm = ({ initialFilm, onSave, onClose }) => {
  const [film, setFilm] = useState(initialFilm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilm({ ...film, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(film);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 space-y-4 transform transition-all duration-300 ease-in-out"
        style={{ width: '400px' }}
      >
        <h2 className="text-2xl font-bold mb-4">{film.id ? 'Edit Film' : 'Tambah Film'}</h2>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Judul</label>
          <input
            type="text"
            name="name"
            placeholder="Judul"
            value={film.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Tahun Rilis</label>
          <input
            type="text"
            name="year"
            placeholder="Tahun Rilis"
            value={film.year}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">URL Gambar</label>
          <input
            type="text"
            name="image"
            placeholder="URL Gambar"
            value={film.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Genre</label>
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={film.genre}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Durasi</label>
          <input
            type="text"
            name="duration"
            placeholder="Durasi"
            value={film.duration}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600">Sinopsis</label>
          <textarea
            name="synopsis"
            placeholder="Sinopsis"
            value={film.synopsis}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div className="flex justify-between mt-4">
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Simpan
          </button>
          <button onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilmForm;
