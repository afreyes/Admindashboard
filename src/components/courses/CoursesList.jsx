import { useState, useEffect } from "react";

function CoursesList() {
  const [courses, setCourses] = useState([]);

  // Simulación de datos de cursos (puedes reemplazarlo con tu lógica de obtención de datos del servidor)
  useEffect(() => {
    // Aquí puedes hacer una petición al servidor para obtener la lista de cursos
    // Ejemplo de petición ficticia:
    const fetchData = async () => {
      // Simulación de respuesta del servidor
      const response = await fetch("https://api.example.com/courses");
      const data = await response.json();
      setCourses(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Cursos</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            {/* Otros detalles del curso */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesList;
