console.log("script section added successfully");

const removeActiveClass =()=>{
    const buttons = document.getElementsByClassName("category-btn");
    console.log(buttons);
    for(let btn of buttons){
        btn.classList.remove("active");
    }   
}

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
        
        const buttonContainer =document.createElement("div");
       
        buttonContainer.innerHTML =`
        <button id="btn-${item.category}" onclick ="loadCategoryPets('${item.category}')" class="btn btn-lg px-10  flex justify-center items-center gap-4 rounded-xl category-btn">
        <div>
          <img src="${item.category_icon}"/>
          </div>
          <div>
         <h3>${item.category}s</h3>
         </div>
         </button>
        
        `;
        categoryContainer.append(buttonContainer);
    });
}

const loadpets = ()=>{


    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((res)=>res.json())
    .then((data)=>displaypets(data.pets))
    .catch((error)=>console.log(error));
}

const loadDetails =async(petid)=>{
    console.log(petid);
    const uri =`https://openapi.programming-hero.com/api/peddy/pet/${petid}`;
    const res = await fetch(uri);
    console.log(res);
    const data = await res.json();
    console.log(data);
    displayDetails(data.petData);
};

const displayDetails = (pet)=>{
   console.log(pet);
   const detailContainer =document.getElementById("modal-content");
   detailContainer.innerHTML =`
   <img class="w-full  object-cover" src=${pet.image}/>
    <div class="flex gap-5 border-b">

     <div >
         <h2 class="text-4xl font-extrabold pb-2"> ${pet.pet_name == null? "Not Mentioned" : pet.pet_name}</h2>
           <div class="flex gap-1 items-center ">
             <img class="h-[20px] w-[20px]" src="https://cdn-icons-png.flaticon.com/128/3388/3388614.png"/>
             <p class="">Breed: ${pet.breed == null? "Not Mentioned" :pet.breed}</p>
          
           </div>
           <div class="flex gap-1 items-center pb-2">
             <img class="h-[20px] w-[20px]" src="https://cdn-icons-png.flaticon.com/128/866/866954.png"/>
             <p class="">gender: ${pet.gender == null? "Not Mentioned" : pet.gender}</p>
          
           </div>
           <div class="flex gap-1 items-center pb-2">
             <img class="h-[20px] w-[20px]" src="https://cdn-icons-png.flaticon.com/128/3388/3388614.png"/>
             <p class="">vaccinated_status: ${pet.vaccinated_status == null? "Not Mentioned" : pet.vaccinated_status}</p>
          
           </div>
              
     </div>
     <div>
    <div class="flex  gap-1 items-center pt-9">
      <img class="h-[15px] w-[20px]" src="https://cdn-icons-png.flaticon.com/128/2948/2948088.png"/>
             <p class="">Birth: ${pet.date_of_birth == null? "Not Mentioned" : pet.date_of_birth }</p>

    </div>
    <div class="flex items-center gap-1 pb-2">
      <img class="h-[15px] w-[20px]" src="https://cdn-icons-png.flaticon.com/128/2150/2150062.png"/>
             <p class="">price: ${pet.price == null? "Not Mentioned" :pet.price}</p>

    </div>
    </div>
   
</div>
   
   <div>
    <h2 class="font-bold text-black pt-2">Details Information</h2>
    <br>
    <p>${pet.pet_details}</p>
    </div>

   `;
   document.getElementById("custom_modal").showModal();
};

const likeDetails = (img) =>{
    console.log(img);
    const rightDiv =document.getElementById("anotherdiv");
    const newDiv = document.createElement("div");
    // rightDiv.classList=" grid grid-cols-2 shadow-md";
    newDiv.classList ="col-span-1 ";
    newDiv.innerHTML =`
    <div>
     <img src = "${img}" class="w-full max-h overflow-auto auto-rows-min object-cover rounded-xl" alt ="liked pet image"/>
     </div>
`;
  rightDiv.append(newDiv);
}

const displaypets = (pets)=>{
  const spinner = document.getElementById("loader");
  spinner.classList.add("hidden");
  const petcontainer = document.getElementById("pets");
  // petcontainer.classList="grid grid-cols-4";
  // const maindiv =document.createElement('div');
  // maindiv.classList =" grid col-span-3"
  // petcontainer.classList.add("hidden");
     
    petcontainer.innerHTML ="";
    
    if(pets.length == 0){
        petcontainer.classList.remove("grid");
        petcontainer.innerHTML = `
        <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
         <img src ="./assets/error.webp"/>

         <h2 class ="text-center text-xl font-bold">NO Information Available</h2>
         <p class="text-center items-center">Sorry we don't have birds right now.We will let you know when Birds will be available.Now at this moment we are out of stock</p>
        
        </div>`;
       
    }
    else{
        petcontainer.classList.add("grid");
    }
    // petcontainer.classList.add("hidden");
     
    pets.forEach((item)=>{
        console.log((item));
  
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
   <div class="border-b pb-4"> 
        <h2 class="card-title text-left">${item.pet_name == null? "Not Mentioned" : item.pet_name }</h2>   
       <div class="flex gap-1 items-center ">
             <img class="h-[20px] w-[20px]" src="https://cdn-icons-png.flaticon.com/128/3388/3388614.png"/>
             <p class="">Breed: ${item.breed == null? "Not Mentioned" : item.breed}</p>
             </div>
          <div class="flex items-center  gap-1 ">
      <img class="h-[15px] w-[20px]" src="https://cdn-icons-png.flaticon.com/128/2948/2948088.png"/>
             <p class="">Birth: ${item.date_of_birth == null? "Not Mentioned" :item.date_of_birth}</p>

           </div>
           <div class="flex gap-1 items-center pb-2">
             <img class="h-[20px] w-[20px]" src="https://cdn-icons-png.flaticon.com/128/866/866954.png"/>
             <p class="">gender: ${item.gender == null? "Not Mentioned" :item.gender}</p>
          
           </div>

             <div class="flex gap-1 items-center pb-2">
      <img class="h-[15px] w-[20px]" src="https://cdn-icons-png.flaticon.com/128/2150/2150062.png"/>
             <p class="">price: ${item.price == null? "Not Mentioned" :item.price}</p>

    </div>
    </div>
    <div class="card-actions flex justify-around">
    <button id ="like" onclick = "likeDetails('${item.image}')" class="btn btn-sm"><img src="https://img.icons8.com/?size=32&id=15956&format=png"/></button>
      <button id="btn-${item.petId}"  onclick="adoptBtn(${item.petId})" class="btn btn-sm text-[#0E7A81]">Adopt</button>
      <button onclick="loadDetails('${item.petId}')" class="btn btn-sm">Details</button>
    </div>
  </div>
    
    `;
  
 


petcontainer.append(card);
});

}


// show pets according to category
const loadCategoryPets =(name)=>{
   
  const spinner = document.getElementById("loader");
  spinner.classList.remove("hidden");
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${name}`)
    .then((res)=>res.json())

    .then((data)=>{
        
        removeActiveClass();
        const activeBtn = document.getElementById(`btn-${name}`);
        activeBtn.classList.add("active");
        setTimeout(function () {
          displaypets(data.data)
          
        }, 2000);
    })
    .catch((error)=>console.log(error));
};


 
  //adopt btn functions

  const adoptBtn = async (id) => {
    const button = document.getElementById("btn-${id}");
    document.getElementById("modal").innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="modal-box flex justify-center flex-col items-center overflow-hidden">
        <p class="py-4 text-5xl text-red-600"><Img src="https://cdn-icons-png.flaticon.com/128/10809/10809599.png"/></p>
        <h3 class="text-3xl font-bold">Congratulations</h3>
        <p class="py-4 text-xl font-bold text-center">Adoption process is started for your pet</p>
        <p class="py-4"><span id="counter" class="countdown font-mono text-6xl">3</span></p>
        </div>
      </div>
    `;
  
    document.getElementById("modal").append(div);
    document.getElementById("modal").showModal();
  
    let counter = 3;
    const countdownElement = document.getElementById("counter");
  
    const interval = setInterval(() => {
      counter--;
      countdownElement.textContent = counter;
  
      if (counter === 1) {
        clearInterval(interval);
        document.getElementById("modal").close();
        button.innerText = "Adopted";
        button.disabled = true;
      }
    }, 1000);
  };


   //sorted functions
   const loadSortedCards = async () => {
    try {
      const response = await fetch(
        "https://openapi.programming-hero.com/api/peddy/pets"
      );
      const data = await response.json();
      console.log(data);
      sort(data.pets);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const sort = (cards) => {
    cards.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return priceB - priceA;
    });

    document.getElementById("pets").innerHTML =" ";
    cards.forEach((item)=>{
      console.log((item));

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
 <div class="border-b pb-4"> 
      <h2 class="card-title text-left">${item.pet_name == null? "Not Mentioned" :item.pet_name}</h2>   
     <div class="flex gap-1 items-center ">
           <img class="h-[20px] w-[20px]" src="https://cdn-icons-png.flaticon.com/128/3388/3388614.png"/>
           <p class="">Breed: ${item.breed == null? "Not Mentioned" : item.breed}</p>
           </div>
        <div class="flex items-center  gap-1 ">
    <img class="h-[15px] w-[20px]" src="https://cdn-icons-png.flaticon.com/128/2948/2948088.png"/>
           <p class="">Birth: ${item.date_of_birth == null? "Not Mentioned" : item.date_of_birth}</p>

         </div>
         <div class="flex gap-1 items-center pb-2">
           <img class="h-[20px] w-[20px]" src="https://cdn-icons-png.flaticon.com/128/866/866954.png"/>
           <p class="">gender: ${item.gender == null? "Not Mentioned" : item.gender}</p>
        
         </div>

           <div class="flex gap-1 items-center pb-2">
    <img class="h-[15px] w-[20px]" src="https://cdn-icons-png.flaticon.com/128/2150/2150062.png"/>
           <p class="">price: ${item.price == null? "Not Mentioned" : item.price}</p>

  </div>
  </div>
  <div class="card-actions flex justify-around">
  <button id ="like" onclick = "likeDetails('${item.image}')" class="btn btn-sm"><img src="https://img.icons8.com/?size=32&id=15956&format=png"/></button>
    <button id="btn-${item.petId}"  onclick="adoptBtn(${item.petId})" class="btn btn-sm text-[#0E7A81]">Adopt</button>
    <button onclick="loadDetails('${item.petId}')" class="btn btn-sm text-[#0E7A81]">Details</button>
  </div>
</div>
  
  `;




document.getElementById("pets").append(card);
});

}
    

loadCategories();
loadpets();
