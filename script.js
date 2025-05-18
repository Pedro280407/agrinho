const dicas = [
  "1. Plante árvores sempre que possível.",
  "2. Reduza o consumo de energia elétrica.",
  "3. Utilize transporte público, bicicleta ou caminhe.",
  "4. Reduza, reutilize e recicle.",
  "5. Apoie energias renováveis e limpas.",
  "6. Evite o desperdício de água.",
  "7. Consuma menos carne e mais alimentos vegetais.",
  "8. Compre de marcas sustentáveis e locais.",
  "9. Desligue os aparelhos eletrônicos quando não estiver usando.",
  "10. Conscientize outras pessoas sobre o aquecimento global."
];

const container = document.getElementById("lista-dicas");

dicas.forEach(dica => {
  const div = document.createElement("div");
  div.className = "dica";
  div.textContent = dica;
  container.appendChild(div);
});
