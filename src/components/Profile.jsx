import { useState, useEffect } from "react";

const Profile = () => {
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('https://nodebackend-vv0e.onrender.com/api/v1/users/find/665602aa72a86337880ac4e1')
      .then(response => response.json())
      .then(data => setData(data.data));
  }, []);

  const handleImageChange = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  if (!data) return 'Cargando...';

  return (
    <div className="flex flex-col items-center bg-secondary-100 p-8 rounded-xl mb-8 mt-[8vh] ml-[30%] xl:ml-[0]">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Perfil de Usuario</h1>
        <hr className="my-4 border-gray-500/30" />
        <div className="flex items-center mb-8">
          <div className="w-1/4">
            <p className="text-xl font-semibold text-gray-800">Avatar</p>
          </div>
          <div className="flex-1">
            <img
              src={selectedImage || data.avatarUrl || "https://via.placeholder.com/150"}
              className="w-36 h-36 object-cover rounded-lg"
              alt="User Avatar"
            />
            <input type="file" onChange={handleImageChange} />
            <p className="text-gray-500 text-sm mt-2">
              Tipos de archivos permitidos: PNG, JPG, JPEG.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-xl font-semibold text-gray-800">Nombre Completo</p>
            <p className="text-gray-500 mt-2">{`${data.name || ""} ${data.lastname || ""}`}</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">Email</p>
            <p className="text-gray-500 mt-2">{data.email || ""}</p>
          </div>
        </div>
        {/* Otros campos del formulario */}
      </div>
    </div>
  );
};

export default Profile;
