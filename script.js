call()
function call(){
    fetch('https://openapi.programming-hero.com/api/videos/categories')
    .then(res=>res.json())
    .then(data=>display(data))
}
function display(data){
  let x = data.data;
  console.log(x)
let y = document.getElementById('tab')

  for(i of x){
    let z = document.createElement('div')
    z.innerHTML = `<button> ${i.category}</button>`
    y.appendChild(z);
  }
}