import { useState } from "react";

function RegisterTest() {
  const [testTitle, setTestTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [creatingTest, setCreatingTest] = useState(false); // Estado para controlar si se está creando un nuevo test
  const [showNextQuestion, setShowNextQuestion] = useState(false); // Estado para mostrar la siguiente pregunta

  const handleTestSubmit = (e) => {
    e.preventDefault();
    // Activar el modo de creación de test al hacer clic en "Crear Test"
    setCreatingTest(true);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      question: currentQuestion,
      answers: currentAnswers,
    };
    setQuestions([...questions, newQuestion]);
    setCurrentQuestion("");
    setCurrentAnswers([]);
    setCurrentAnswer("");
    setShowNextQuestion(false); // Ocultar la siguiente pregunta después de agregar una nueva pregunta
  };

  const handleAddAnswer = () => {
    // Verificar si ya se han agregado 3 respuestas para esta pregunta
    if (currentAnswers.length < 3) {
      setCurrentAnswers([...currentAnswers, currentAnswer]);
      setCurrentAnswer("");
    } else {
      alert("Ya se han agregado 3 respuestas para esta pregunta");
    }
  };

  const handleNextQuestion = () => {
    setShowNextQuestion(true); // Mostrar la siguiente pregunta al presionar el botón "Siguiente Pregunta"
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Test</h2>
      {!creatingTest ? (
        <form onSubmit={handleTestSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="testTitle" className="block text-gray-700 font-bold mb-2">
              Título del Test:
            </label>
            <input
              type="text"
              id="testTitle"
              value={testTitle}
              onChange={(e) => setTestTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Crear Test
          </button>
        </form>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Nuevo Test: {testTitle}</h2>
          <h3 className="text-lg font-bold mb-2">Agregar Preguntas</h3>
          <form onSubmit={handleQuestionSubmit}>
            <div className="mb-4">
              <label htmlFor="question" className="block text-gray-700 font-bold mb-2">
                Pregunta:
              </label>
              <input
                type="text"
                id="question"
                value={currentQuestion}
                onChange={(e) => setCurrentQuestion(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Agregar Pregunta
            </button>
          </form>

          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Preguntas Añadidas</h3>
            <ul>
              {questions.map((question, index) => (
                <li key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
                  <h4 className="text-xl font-bold mb-2">Pregunta {index + 1}: {question.question}</h4>
                  <h5 className="text-lg font-bold mb-2">Agregar Respuestas</h5>
                  <form>
                    <div className="mb-4">
                      <label htmlFor="answer" className="block text-gray-700 font-bold mb-2">
                        Respuesta:
                      </label>
                      <input
                        type="text"
                        id="answer"
                        value={currentAnswer}
                        onChange={(e) => setCurrentAnswer(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                      <button type="button" onClick={handleAddAnswer} className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2">
                        Agregar Respuesta
                      </button>
                    </div>
                    <div className="mb-4">
                      <ul>
                        {currentAnswers.map((answer, ansIndex) => (
                          <li key={ansIndex} className="bg-gray-200 px-4 py-2 rounded-lg mb-2">
                            {ansIndex + 1}. {answer}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {index === questions.length - 1 && currentAnswers.length === 3 && !showNextQuestion ? (
                      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleNextQuestion}>
                        Siguiente Pregunta
                      </button>
                    ) : null}
                  </form>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterTest;
