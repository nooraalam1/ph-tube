call()
function call(){
    fetch('https://openapi.programming-hero.com/api/videos/categories')
    .then(res=>res.json())
    .then(data=>display(data))
}
function display(data){
  let x = data.data;
 let y = document.getElementById('tab')

  for(i of x){
    let z = document.createElement('div')
    z.innerHTML = `<button class ="bg-green-600 p-2 rounded" onclick='btnTab(${i.category_id})'> ${i.category}</button>`
    y.appendChild(z);
  }
}

function btnTab(data){
    fetch(`https://openapi.programming-hero.com/api/videos/category/${data}`)
    .then(res=>res.json())
    .then(data=>display2(data))
}

function display2(data){
    let k = data.data;
// console.log(k)
    let a = document.getElementById('card')
    a.innerHTML =" ";
    for(i of k){

        console.log(k)

        let b = document.createElement('div')
        b.innerHTML = ` <div class="bg-yellow-100 md:w-48">
        <img src=${i.thumbnail}  height="28px" />
        <div class="card-body">
          <h2 class="card-title">${i.title} </h2>
         <div class="flex justify-start items-center">
         <img src=${i.authors[0].profile_picture} class="rounded-full" width="50px"/>
     <div>    <p>${i.authors[0].profile_name}</p>
     <p>Views: ${i.others.views}</p></div>
         </div>
         
        </div>
      </div>`
      a.appendChild(b)
    }
}
btnTab(1000)