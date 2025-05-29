function processar() {
  const fileInput = document.getElementById('inputExcel');
  const resultado = document.getElementById('resultado');

  if (!fileInput.files.length) {
    alert("Selecione um arquivo.");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    resultado.innerHTML = "<p>Arquivo lido com sucesso: " + file.name + "</p>";
    // Aqui você pode integrar a lógica real de análise da planilha
  };
  reader.readAsText(file);
}