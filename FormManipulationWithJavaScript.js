function userSubmit(event) {
    event.preventDefault();
    const username = document.getElementById("userName").value;
    console.log("Log in Successful");
    alert("Welcome " + username );
    document.getElementById("container").reset();
  }