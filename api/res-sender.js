export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(`(function () {
  window.enviarRecursos = function() {
    alert("Função enviarRecursos executada! Recursos foram enviados com sucesso (simulação).");
    // Aqui seria implementada a lógica real de envio de recursos entre vilas
  };

  console.log("res-senderV2 carregado com sucesso. Use enviarRecursos() no console para testar.");
})();`);
}
