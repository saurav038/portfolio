console.log("Ajax practice")

let fetchBtn= document.getElementById('fetchBtn')
fetchBtn.addEventListener('click',buttonClickHandler)

function  buttonClickHandler(){
    console.log('you click the fetch buton')
    //INSTANT THE OBJECT 
    const xhr=new XMLHttpRequest();
   //OPEN THE OBJECT
   xhr.open('GET','sg.txt',false)
   //what to do when the response is ready
   xhr.onload=function(){
    if(this.status ==200){
        console.log(this.responseText)
    }
    else{
        console.log('error ocured')
    }
  }
   //send the request 
    xhr.send();

}



let backupBtn=document.getElementById("backupBtn");
backupBtn.addEventListener("click",backuphandler)

function backuphandler(){
    console.log("everything is fine")

    const xhr=new XMLHttpRequest();
    xhr.open('GET','sg1.txt',true)

    xhr.onload=function(){
        console.log(this.responseText)
    }
    xhr.send();
}