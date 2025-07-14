export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(`(function () {
  console.log("res-senderV2.js carregado com sucesso via Vercel!");
  // Aqui estaria todo o conteúdo original do res-senderV2.js
})();`);
}
