// ẩn hiện đăng ký
function loginFunction() {
    console.log("333333333")


    var x = document.getElementsByClassName("modal");
    if (x[0].style.display === "") {
        x[0].style.display = "block";
    } else {
        x[0].style.display = "";
    }


    var y = document.getElementsByClassName("auth-form__login");
    if (y[0].style.display === "") {
        y[0].style.display = "block";
    } else {
        y[0].style.display = "";
    }

    console.log("222")
  }

function resinterFunction() {
    console.log("333333333")


    var x = document.getElementsByClassName("modal");
    if (x[0].style.display === "") {
        x[0].style.display = "block";
    } else {
        x[0].style.display = "";
    }


    var y = document.getElementsByClassName("auth-form__resinter");
    if (y[0].style.display === "") {
        y[0].style.display = "block";
    } else {
        y[0].style.display = "";
    }

    console.log("222")
  }
// out
function blackFunction() {
    var x = document.getElementsByClassName("modal");
    x[0].style.display = "";

    var y = document.getElementsByClassName("auth-form__resinter");
    y[0].style.display = "";

    var z = document.getElementsByClassName("auth-form__login");
    z[0].style.display = "";
}


// chuyển font
function tologinFunction() {
    var x = document.getElementById("showingresinter")
    x.style.display = ""

    var y = document.getElementById("showinglogin")
    y.style.display = "block"
}


function toResinterFunction() {
    var x = document.getElementById("showinglogin")
    x.style.display = ""

    var y = document.getElementById("showingresinter")
    y.style.display = "block"
}
