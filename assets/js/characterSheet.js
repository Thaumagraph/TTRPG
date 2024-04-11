function roundNumber() {
  const inputNumber = document.getElementById("inputNumber").value;

  const normalizedNumber = inputNumber.replace(",", ".");

  const parsedNumber = parseFloat(normalizedNumber);

  const minusNumber = parsedNumber - 10;

  const abilityModifier = Math.round(minusNumber)

  document.getElementById("resultNumber").value =
    "Ability modifier: " + abilityModifier;
}
