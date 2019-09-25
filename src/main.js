let locals;

class App {
  constructor(searchInput, matchList, searchCidades) {
    this.searchInput = searchInput;
    this.matchList = matchList;
    this.searchCidades = searchCidades;

    this.registerHandlers();
  }

  registerHandlers() {

    const getlocals = async () => {
     const res = await fetch('./data/airport.json');
     locals = await res.json();
    };

    window.addEventListener('DOMContentLoaded', getlocals);

    const searchStates = searchText => {
     // FILTRA A PALAVRA DIGITADA NA BUSCA PARA RELACIONAR COM UMA LISTA DE OBJETOS JSON
     let matches = locals.filter(state => {
      const regex = new RegExp(`^${searchText}`, 'gi');
      return state.CIDADE.match(regex) || state.IATA.match(regex);
     });

    // EVITAR APARECER TUDO QUANDO CLICAR NO INPUT
    if (searchText.length === 0) {
      matches = [];
      this.matchList.innerHTML = '';
    }

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

      this.matchList.innerHTML = html;

     }

    }
      outputHtml(matches);
    };

    this.searchInput.addEventListener('input', (e)=> {
      searchStates(e.target.value);
    })

  }
}

    let originList = document.querySelector('#origensWrap #match-list');
    let destList = document.querySelector('#destinoWrap #match-list');
    let cidadesList = document.querySelector('#cidadesWrap #match-list');

    new App(document.getElementById('searchOrigens'), originList);
    new App(document.getElementById('searchDestino'), destList);
    new App(document.getElementById('searchCidades'), cidadesList);

document.getElementById("origensWrap").addEventListener("click",(e) => {
  if (e.target && e.target.matches("li h4")) {
    searchOrigens.value = e.target.innerText.substr(0,3)
    originList.innerHTML = '';
  }
});

document.getElementById("destinoWrap").addEventListener("click",(e) => {
  if (e.target && e.target.matches("li h4")) {
    searchDestino.value = e.target.innerText.substr(0,3)
    destList.innerHTML = '';
  }
});

document.getElementById("cidadesWrap").addEventListener("click",(e) => {
  if (e.target && e.target.matches("li h4")) {
    searchCidades.value = e.target.innerText.substr(0,3)
    cidadesList.innerHTML = '';
  }
});
