const search = document.getElementById('search');
const matchList = document.getElementById('id');


const searchStates = async searchText => {
  const res = await fetch('data/states.json');
  const states = await res.json();

  console.log(states);
}


search.addEventListener('input', () => searchStates(search.value));
