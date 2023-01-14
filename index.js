const inputElement = document.getElementById("inputId");
const cityHiddenSelect = document.getElementById("cityHiddenSelect");
inputElement.addEventListener("input", () => {
  // console.log(inputElement.value);
  const option = document.getElementById(`option__${inputElement.value}`);
  if (option) {
    cityHiddenSelect.value = option.dataset.id;
  }
});
