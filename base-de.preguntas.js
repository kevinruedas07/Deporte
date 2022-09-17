function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
        {
        pregunta: "1 ¿Cuánto dura un partido de futbol?",
        respuesta: "90 minutos repartidos en dos partes de 45 minutos cada una",
        distractores: ["90 minutos repartidos en tres partes de 30 minutos cada una", "90 minutos"],
        },
        {
        pregunta: "2 ¿Cuándo se celebró el primer mundial de futbol?",
        respuesta: "El 13 de julio de 1930 en Uruguay",
        distractores: ["El 10 de julio de 1935 en Uruguay", "El 15 de julio de 1930 en Uruguay"],
        },
        {
        pregunta: "3 ¿Qué Selección de futbol ha ganado más Mundiales?",
        respuesta: "Brasil",
        distractores: ["Uruguay", "Panamá"],
        },
        {
        pregunta: "4 ¿Cuántos jugadores tiene un equipo de futbol en el campo de juego?",
        respuesta: "11",
        distractores: ["12", "15"],
        },
        {
        pregunta: "5 ¿Cuántas Copas del Mundo ha ganado Italia?",
        respuesta: "4 Copas del Mundo",
        distractores: ["5 Copas del Mundo", "8 Copas del Mundo"],
        },
        {
        pregunta: "6 ¿Cómo se llama la anotación de un tanto en futbol americano?",
        respuesta: "El touchdown",
        distractores: ["Hong roll", " Anotación"],
        },
        {
        pregunta: "7 ¿Cada cuantos años se celebran los Juegos Olímpicos?",
        respuesta: "Cada 4 años",
        distractores: ["Cada 6 años", "Cada 5 años"],
        },
        {
        pregunta: "8 ¿Cuál es el deporte más popular en la India?",
        respuesta: "El criquet",
        distractores: ["Futbol", "Voleibol"],
        },
        {
        pregunta: "9 ¿Cuántos cubos coloreados hay en el Cubo de Rubik?",
        respuesta: "Cuenta con seis colores uniformes",
        distractores: ["Cuenta con seis colores Iguales", "Cuenta con nueve colores uniformes"],
        },
        {
        pregunta: "10 ¿Cuál es el deporte nacional en Japón?",
        respuesta: "El sumo",
        distractores: [" Artes Marciales", "Karate"],
        },
        {
        pregunta: "11 ¿Qué  tipos de armas se utilizan en esgrima?",
        respuesta: "Espada, florete y sable",
        distractores: ["Espada y sable", "Espada y florete"],
        },
        {
        pregunta: "12 ¿Cuál es la lesión más frecuente entre los corredores?",
        respuesta: "La rodilla del corredor",
        distractores: ["El tobillo del corredor", "El brazo del corredor"],
        },
        {
        pregunta: "13 ¿Cuánto tiempo se recomienda que pase entre un entrenamiento y una comida?",
        respuesta: "3 horas",
        distractores: ["5 horas", "2 horas"],
        },
        {
        pregunta: "14 ¿Cuántos Km de distancia mide una maratón?",
        respuesta: "42.16 km",
        distractores: ["43.77 km", "41.85 km"],
        },
        {
        pregunta: "15 ¿Cuáles son los cinco colores del anillo de los Juegos Olímpicos?",
        respuesta: "Azul, rojo, amarillo, verde y negro",
        distractores: ["Azul, rojo, amarillo, verde y violeta", "Azul, rojo, amarillo, naranja y verde"],
        },
  ];
