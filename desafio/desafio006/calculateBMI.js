function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultDiv = document.getElementById("result");

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight)) {
        resultDiv.innerHTML = "Plase enter valid height and weight.";
        return;
    }


    var bmi = weight / ((height / 100) ** 2);
    var category = "";
}
