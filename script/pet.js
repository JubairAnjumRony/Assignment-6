console.log("script section added successfully");

const loadCategories = ()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res)=>res.json())
    .then((data)=>displayCategories(data.categories))
    .catch((error)=>console.log(error));
}

const displayCategories = (categories)=>{
    const categoryContainer = document.getElementById("categories");
    categories.forEach ((item) => {
        console.log(item); 

        // create a button
        const button =document.createElement("button");
        button.classList = "btn btn-lg flex justify-center items-center gap-4 rounded-xl";
       
        button.innerHTML =`
        <div>
          <img src="${item.category_icon}"/>
          </div>
          <div>
         <h3>${item.category}s</h3>
         </div>
        
        `;
        categoryContainer.append(button);
    });
}

const loadpets = ()=>{

    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((res)=>res.json())
    .then((data)=>displaypets(data.pets))
    .catch((error)=>console.log(error));
}

const displaypets = (pets)=>{
    const petcontainer = document.getElementById("pets");
    // petcontainer.classList="grid grid-cols-4";
    // const maindiv =document.createElement('div');
    // maindiv.classList =" grid col-sapn-3"
    
     
    pets.forEach((item)=>{
        console.log(item);
  
    const card =document.createElement('div');
    card.classList="card  col-span-1 ";
    card.innerHTML =`
       <figure class="px-10 pt-10">
    <img
      src="${item.image}"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body flex flex-col items-start text-left">    
    <h2 class="card-title text-left">${item.pet_name}</h2>
    <p class="text-left">Breed: ${item.breed}</p>
    <P class="text-left">Birth:${(item.date_of_birth)} </p>
    <P class="text-left">Gender:${item.gender} </p>
    <P class="text-left">Price:${item.price} </p>
    <div class="card-actions flex justify-around">
    <button id ="like"class="btn"><img src="https://img.icons8.com/?size=32&id=15956&format=png"/></button>
      <button id="adopt" class="btn">Adopt</button>
      <button id ="details" class="btn ">Details</button>
    </div>
  </div>
    
    `;
  
 


petcontainer.append(card);
});
const anotherDiv =document.getElementById("anotherdiv");
    anotherDiv.classList ="  border-2 bg-red-500 ";
    anotherDiv.innerHTML =`
 <div>
 </div>
`;

  anotherDiv.append();

};
loadCategories();
loadpets();