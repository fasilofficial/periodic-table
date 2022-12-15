const filterContainer = document.querySelector(".table-filter");
const tableItems = document.querySelectorAll(".table-item");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("filter-item")){
     filterContainer.querySelector(".active").classList.remove("active");
     event.target.classList.add("active");
     const filterValue = event.target.getAttribute("data-filter");
     tableItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'All'){
        item.classList.remove("hide");
         item.classList.add("show");
       }
       else{
        item.classList.remove("show");
        item.classList.add("hide");
       }
     });
   }
 });

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cd361af309msh62bf11c00e6504cp1443dbjsn942709ebcf43',
		'X-RapidAPI-Host': 'periodictable.p.rapidapi.com'
	}
};

fetch('https://periodictable.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(data => {
    data.map(({ atomicNumber, symbol, name, atomicMass }) => {
      document.getElementById(`${atomicNumber}`).innerHTML =
          `
          <div class="top">${atomicNumber}</div>
          <div class="bottom">
            <div class="title">${symbol}</div>
            <div class="name">${name}</div>
            <div class="mass">${parseFloat(atomicMass).toFixed(3)}</div>
          </div>
          `
    })
  })
	.catch(err => console.error(err));