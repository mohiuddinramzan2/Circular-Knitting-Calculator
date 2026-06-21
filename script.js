function calculate() {

  let gauge = parseFloat(document.getElementById("gauge").value);
  let dia = parseFloat(document.getElementById("dia").value);
  let count = parseFloat(document.getElementById("count").value);
  let stitch = parseFloat(document.getElementById("stitch").value);
  let kg = parseFloat(document.getElementById("kg").value);

  // Needles
  let needles = 3.14 * gauge * dia;

  // Feeders
  let feeders = dia * 3 + 6;

  // Counter Formula
  let counter = (kg * 16936517 * count) / stitch / needles / feeders;

  document.getElementById("needles").innerText = needles.toFixed(2);
  document.getElementById("feeders").innerText = feeders.toFixed(2);
  document.getElementById("counter").innerText = counter.toFixed(2);
}
