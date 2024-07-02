const ContactCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src="https://www.wallpaperflare.com/static/26/331/805/one-piece-anime-monkey-d-luffy-monkey-wallpaper.jpg" alt="Profile" />
        </div>
        <div className="p-8">
          <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Informasi Diri</h2>
          <p className="mt-2 text-gray-500">Berikut adalah informasi pribadi saya:</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nama:</label>
            <p className="text-gray-600">Teazet</p>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Tempat Tinggal:</label>
            <p className="text-gray-600">Bandung, Indonesia</p>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Tanggal Lahir:</label>
            <p className="text-gray-600">5 Oktober 2004</p>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Pelatihan:</label>
            <p className="text-gray-600">React</p>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nama Instruktur:</label>
            <p className="text-gray-600">Siti Fitriani</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
