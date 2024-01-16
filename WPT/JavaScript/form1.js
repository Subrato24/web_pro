function check(){
    let name= document.getElementById("name").value;
    let pass= document.getElementById("password").value;
    let email= document.getElementById("email").value;
    if(name===""){
        window.alert("name is missing");
    }
    else if(pass===""){
        window.alert("password is missing");
    }
    else if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass)){
        window.alert("your pssword should contain minimum eight characters, at least one letter and one number:");
    }
    else if(email===""){
        window.alert("email is missing");
    }
    else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)){
        window.alert('invalid email format');
    }
    
}