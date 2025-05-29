function analisar() {
  const input = document.getElementById('inputExcel');
  const resultado = document.getElementById('resultado');

  if (!input.files.length) {
    alert("Por favor, selecione um arquivo.");
    return;
  }

  const fileName = input.files[0].name;
  resultado.innerHTML = '<h2>📊 Resultado da Análise</h2><p>Arquivo "' + fileName + '" carregado com sucesso!</p>';
}
