// Константы
const ro = 1.8; // плотность гипса
const defaultVForm = 200; // объем формы по умолчанию, мл
const kWater = 0.25;
const kColor = 0.05;
const kPlast = 0.01;

// Функция для расчета значений
function calculateGypsum() {
  // Получаем объем формы из инпута
  const vFormInput = document.getElementById("v-form");
  const vForm = parseFloat(vFormInput.value) || defaultVForm;

  // Рассчитываем значения
  const mGips = vForm * ro; // масса сухого гипса
  const mWater = mGips * kWater; // количество воды
  const mColor = mGips * kColor; // масса красителя
  const mPlast = mGips * kPlast; // масса пластификатора

  // Вставляем значения в отключенные инпуты
  document.getElementById("form").value = `${vForm} мл`;
  document.getElementById("gips").value = `${mGips.toFixed(2)} г`;
  document.getElementById("water").value = `${mWater.toFixed(2)} мл`;
  document.getElementById("color").value = `${mColor.toFixed(2)} г`;
  document.getElementById("plast").value = `${mPlast.toFixed(2)} г`;
}

// Привязываем функцию к кнопке
const calculateButton = document.querySelector("button");
calculateButton.addEventListener("click", function (event) {
  event.preventDefault(); // Предотвращаем отправку формы
  calculateGypsum();
});