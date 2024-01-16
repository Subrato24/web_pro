function change(){
    let num = document.getElementById("num").value;
    let cl = document.getElementById("col").value;
    document.getElementById("d" + num).style.backgroundColor = cl;
}