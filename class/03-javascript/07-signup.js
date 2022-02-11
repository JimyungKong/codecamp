function checkValidation() {

    const email = document.getElementById("email").value
    const pw = document.getElementById("pw").value
    const pwc = document.getElementById("pwc").value

    if(email !== "" && pw !== "" && pwc !== "") {

        document.getElementById("btn").disabled=false;
        document.getElementById("btn").setAttribute("style","background-color : yellow")

    } else {

        document.getElementById("btn").disabled=true;
        document.getElementById("btn").setAttribute("style","background-color : none")


    }

}