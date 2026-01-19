let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let expression = "";

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        let value = this.innerText;

        if (value === "C") {
            expression = "";
            display.value = "";
        }

        else if (value === "=") {
            try {
                let result = eval(expression);
                display.value = result;
                expression = result.toString();
            } catch {
                display.value = "Error";
                expression = "";
            }
        }

        else {
            expression += value;
            display.value = expression;
        }
    });
}
