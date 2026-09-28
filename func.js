document.getElementById('btn-calcular').addEventListener('click', function() {
    // Obter os valores dos inputs
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    
    // Elemento onde o resultado será exibido
    let resultadoDiv = document.getElementById('resultado');
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('p');
        resultadoDiv.id = 'resultado';
        document.querySelector('main').appendChild(resultadoDiv);
    }

    // Validar se todos os campos foram preenchidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultadoDiv.style.color = '#dc3545';
        resultadoDiv.textContent = 'Por favor, preencha todas as notas!';
        return;
    }

    // Calcular a média
    const media = (nota1 + nota2 + nota3) / 3;

    // Exibir o resultado formatado
    resultadoDiv.style.color = '284ea7';
    resultadoDiv.textContent = `A sua média anual é: ${media.toFixed(2)}`;
});