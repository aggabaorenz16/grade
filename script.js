const get = () => {
    const num = document.querySelector("#num1").value;
    if(num >= 75) {
        window.alert("PASSED!");
    } else {
        window.alert("FAILED!");
    }
}