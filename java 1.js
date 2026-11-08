function calcularNota() {
    // 1. Busca todos los inputs con la clase 'correct' que estén seleccionados (:checked)
    let aciertos = document.querySelectorAll('.correct:checked').length;
    
    // 2. Cuenta cuántas preguntas hay en total en el cuestionario
    let totalPreguntas = document.querySelectorAll('.question').length;
    
    // 3. Selecciona el cuadro de texto del resultado
    let cuadroResultado = document.getElementById('zona-resultado');
    cuadroResultado.innerHTML = `¡Terminaste!<br>Acertaste ${aciertos} de ${totalPreguntas}`;
    cuadroResultado.style.display = "block";
    cuadroResultado.scrollIntoView({ behavior: 'smooth' });
}