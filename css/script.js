const steps =
document.querySelectorAll(".form-step");
const indicators =
document.querySelectorAll(".step");
const nextBtn =
document.getElementById("nextBtn");
const prevBtn =
document.getElementById("prevBtn");
const progressBar =
document.getElementById("progressBar");

let currentStep = 0;

function updateStep() {
    steps.forEach(step =>
        step.classList.remove("active"));
        indicators.forEach(i =>
            i.classList.remove("active"));

    steps[currentStep].classList.add("active");

    indicators[currentStep].classList.add("active");

    prevBtn.style.display = currentStep
    === 0 ? "none" : "inline-block"
    nextBtn.textContent =
    currentStep === steps.length - 1 ?
    "Submit" : "Next ->";

    progressBar.style.width =
    ((currentStep + 1) / steps.length) *
    100 + "%";
}

function validateStep(index) {
    let valid = true;
    const fields =
    steps[index].querySelectorAll("input, select, textarea");

    fields.forEach(field => {
        field.classList.remove("error");

        if (field.type === "checkbox") {
            if(!field.checked) {
                field.classList.add("erroe");
                valid = false;
            }
            return;
        }

        if (field.hasAttribute("required")
            && !field.value.trim()) {
        field.classList.add("erroe");
        valid = false;
    }
    });

    return valid;
}

nextBtn.addEventListener("click", () =>
{
    if (!validateStep(currentStep))
    return;

    if (currentStep === steps.length - 1)
    {
        alert ("Application submitted successfully!");
        return;
    }

    currentStep++;
    updateStep();
});

prevBtn.addEventListener("click", () =>
{
    if (currentStep > 0) {
        currentStep--;
        updateStep();
    }
});

updateStep();