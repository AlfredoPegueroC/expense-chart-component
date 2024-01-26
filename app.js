const days = document.querySelector("#days");


function createCharts(day, amount){
  let content = document.createElement("div");
  content.classList.add("chart__wrapper")
  content.classList.add("flex")
  content.innerHTML = `
    <div class="day">
      <div class="bar" style="height: ${amount * 2.5}px"></div>
      <div class="mon">
        ${day}
      </div>
    </div>
  `
  days.appendChild(content)
  
}

async function getData(){
  await fetch("./data.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
      createCharts(element.day, element.amount)  
    });

  })
  .catch(err => console.log(err))
}

getData()
// window.addEventListener("DOMContentLoaded")