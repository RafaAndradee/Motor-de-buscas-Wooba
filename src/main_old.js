
const searchOrigens = document.getElementById('searchOrigens');
const searchDestino = document.getElementById('searchDestino');
const originList = document.querySelector('#origensWrap #match-list');
const matchList = document.querySelector('#destinoWrap #match-list');
//const destList = document.querySelector('#destinoWrap #match-list');
let locals; //corresponde a lista de lugares disponiveis inseridos na lista .Json


// PEGAR A LISTA
const getlocals = async () => {
 const res = await fetch('./data/airport.json');
 locals = await res.json();
};

console.log(getlocals)

function inputOne(){

// FILTRAR A LISTA
const searchStates = searchText => {
 // FILTRA A PALAVRA DIGITADA NA BUSCA PARA RELACIONAR COM UMA LISTA DE OBJETOS JSON
 let matches = locals.filter(state => {
  const regex = new RegExp(`^${searchText}`, 'gi');
  return state.CIDADE.match(regex) || state.IATA.match(regex);
 });

// EVITAR APARECER TUDO QUANDO CLICAR NO INPUT
if (searchText.length === 0) {
  matches = [];
  originList.innerHTML = '';
}



//
// VER RESULTADOS
const outputHtml = matches => {

 if (matches.length > 0) {
  const html = matches
   .map(
    match => `<ul class="card card-body mb-1 listOrigin">
    <li><h4 id="listOrigin" class="titleOrigens" onclick="">${match.IATA} - ${match.CIDADE} </li>
   </ul>`
   )
   .join('');

  originList.innerHTML = html;

 }

}
  outputHtml(matches);
};



window.addEventListener('DOMContentLoaded', getlocals);
searchOrigens.addEventListener('input', () => searchStates(searchOrigens.value));


}

inputOne()
