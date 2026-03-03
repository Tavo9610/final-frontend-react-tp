const About = () => {
   return <div className="about">
            <h2>Explicacion del Proyecto:</h2>
            <p>Continuacion de la primera etapa del clon de Chats, en esta etapa se utilizo react para funcionalidades</p>
            <h2>Partes Principales de la App</h2>
            <p>Esta app consta de 3 rutas, rutas de registro y de ingreso y por ultimo la pagina del chat
               a la cual se accede ya identificado. para acceder al "acerca de" o "about" del proyecto la ruta expuesta es '/acerca'
            </p>
            <h2>Tecnologias utilizadas: </h2>
                <p>React, Vite, CSS, HTML</p>
            <h2>Decisiones de desarrollo tomadas: </h2>
                <p>Se decide reutilizar el chat Context para la persistencia del user
                y se crea nueva vista de "Signup", se crean funciones reutilizables para validaciones, para persistir la data se utiliza 'context' 
                y se puede observar la persistencia a pesar de actualizar la pagina en la consola de desarrollador ('F12')
                </p>
            <h2>Observaciones personales del estudiante:</h2>
             <p>Represento un desafio importante porque no tengo totalmente conceptualizado React</p>
            <h2>Dificultades:</h2>
            <p> Como mencionaba se me hizo un poco dificil requeri ayuda de un dev con mas experiencia</p>
          </div>

}
export{About};