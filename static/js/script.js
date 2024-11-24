
function showSubmitButton() {
    var selectBox = document.getElementById("sport");
    var submitButton = document.getElementById("submit-button");
    
    if (selectBox.value !== "") {
        submitButton.style.display = "inline-block";
    } else {
        submitButton.style.display = "none";
    }
}
