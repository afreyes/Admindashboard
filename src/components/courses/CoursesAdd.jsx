import { useState } from "react";

function CoursesAdd() {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    instructor: "",
    // Otros campos del curso
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del nuevo curso al servidor
    console.log("Datos del nuevo curso:", courseData);
  };

  return (
    <div>
      <h2>Agregar Curso</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={courseData.title}
          onChange={handleChange}
          placeholder="Título del curso"
        />
        {/* Otros campos del formulario */}
        <button type="submit">Agregar Curso</button>
      </form>
    </div>
  );
}

export default CoursesAdd;
