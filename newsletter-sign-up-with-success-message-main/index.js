function reg(){
    
    const emailEl=document.getElementById('email').value;
    console.log(emailEl);
    if(emailEl.includes("@")!==true)
{
    document.getElementById("email").style.backgroundColor="pink";
    document.getElementById('msg').style.display="initial";
}
else{
    document.getElementById('main').style.display="none";
    document.getElementById("success").style.display="initial";
    document.getElementById('zemail').innerHTML=" "+emailEl;
}
}

function done(){
    document.getElementById("success").style.display="none";
    document.getElementById('email').value="";
    document.getElementById("email").style.backgroundColor="white";
    document.getElementById('msg').style.display="none";
    document.getElementById('main').style.display="flex";
    

}