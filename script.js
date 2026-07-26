const API="https://dummyjson.com/posts"
let container=document.getElementById("container");
async function datafetch(){
    try{
        let res=await fetch(API);
        let data=await res.json();
        console.log(data);
        data.posts.forEach((item,index)=>{
        let child=document.createElement("div");
        child.classList.add("card");
        child.innerHTML=`<h2>${item.title}</h2>
        <p>${item.body}</p>
        <h3>${item.views}</h3>`
        container.appendChild(child);
        });
    }catch(error){
        console.log(error)
    }
}
datafetch();