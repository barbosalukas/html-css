function calculateBMI() {
    let heightInput = document.querySelector("#height")
    let weightInput = document.querySelector("#weight")
    let resultDiv = document.querySelector("#result")
    
    let height = parseFloat(heightInput.value)
    let weight = parseFloat(weightInput.value)

    if(isNaN(height) || isNaN(weight)) {
        resultDiv.innerHTML = "Por favor, insira altura e peso válidos."
    }

    let bmi = weight / ((height / 100) ** 2)
    let category = ""

    if(bmi < 18.5) {
        category = "Abaixo do Peso"
    }else if (bmi < 25) {
        category = "Peso Normal"
        } else if (bmi < 30) {
            category = "Sobrepeso"
        }
            else {
                category = "Obesidade"
            }

            resultDiv.innerHTML = `Seu IMC é ${bmi.toFixed(2)}. Classificação: ${category}`
    }


