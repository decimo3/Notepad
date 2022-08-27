// Para rodar essas funções no navegador!
if (confirm("Deseja acionar qual função?\n[YES] para diminuir cabeçalho\n[NOT] para reduzir a descrição")) {
  // Função para diminuir o enorme espaço desperdiçado no cabeçalho da página
  document.getElementsByTagName("controls:page-header")[0].style.padding = "0px";
} else {
  // Função para reduzir o texto descritivo das notas no visualizador de mapa
  var atividades = document.getElementsByClassName("toa-activities-sortablelist-caption");
  for (let index = 0; index < atividades.length; index++) {
    var texto = atividades[index].innerText;
    console.log(texto);
    var nota = texto.match(/[0-9]{12}/);
    if(nota){
      atividades[index].innerText = nota[0];
    }
  }
}