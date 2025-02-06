const input=document.querySelector("#input");
const searchbtn=document.querySelector("#search");
const showmorebtn=document.querySelector("#show-more");
const box=document.querySelector("#box");
const accesskey="0Dgp8rOcjNdhvzpE5iirTtR5cCgtdmrY-MTU7lKpu4s";
let keyword="";
let page=1;
async function  searchImages(){
keyword=input.value;

const url=`http://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=24`;

const response= await fetch(url);
const data= await response.json();
console.log(data);
if(page==1){
    box.innerHTML="";
}
const results=data.results;
results.map((result)=>{
const image=document.createElement("img");
image.src=result.urls.small_s3;
const imageLink=document.createElement("a");

imageLink.href=result.links.html;
imageLink.target="_blank";
imageLink.appendChild(image);
box.appendChild(imageLink);

})
showmorebtn.style .display="block";

}

searchbtn.addEventListener("click" , (e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})
showmorebtn.addEventListener("click",()=>{
    page++;
    searchImages();
})