var istatus = document.querySelector("h5");

var btn = document.querySelector("#add");

// var removefriend = document.querySelector("#remove");

var flag = 0;
btn.addEventListener("click",function(){
    if(flag==0){
        istatus.innerHTML = "Friends";
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend";
        btn.style.backgroundColor = "red";

        flag = 1;
    }

    else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "green";
        flag=0;

    }
})

// removefriend.addEventListener("click",function(){
//     istatus.innerHTML = "Stranger";
//     istatus.style.color = "red"
// })



