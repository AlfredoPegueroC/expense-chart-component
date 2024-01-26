const days = document.querySelector("#days");

function createCharts(day, amount, max) {
  let content = document.createElement("div");
  content.classList.add("day");
  content.innerHTML = `
      <div class="bar ${maxAmount(max, amount)} " data-before="$${amount}" style="height: ${amount * 2.5}px"></div>
      <div class="mon">
        ${day}
      </div>

  `;
  days.appendChild(content);
}
function maxAmount(amount, elem) {
   if(Math.max(amount) === elem){
    return "active"
   };
}
async function getData() {
  await fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      let arr = [];
      for (let i = 0; i < data.length; i++) {
        arr.push(data[i].amount);
      }
      data.forEach((element) => {
        createCharts(element.day, element.amount, Math.max(...arr));
      });
    })
    .catch((err) => console.log(err));
}

getData();
// window.addEventListener("DOMContentLoaded")
