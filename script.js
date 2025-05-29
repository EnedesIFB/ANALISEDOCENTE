
function startAnalysis() {
  const fileInput = document.getElementById('fileInput');
  const status = document.getElementById('status');
  if (fileInput.files.length === 0) {
    status.textContent = '❌ Nenhum arquivo selecionado.';
  } else {
    status.textContent = '🔍 Analisando... (simulação)';
    setTimeout(() => {
      status.textContent = '✅ Análise concluída com sucesso!';
    }, 2000);
  }
}
