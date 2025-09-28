document.getElementById("calcBtn").addEventListener("click", calcROI);

function calcROI() {
  const revenue = parseFloat(document.getElementById("revenue").value);
  const cost = parseFloat(document.getElementById("cost").value);

  if (isNaN(revenue) || isNaN(cost) || cost === 0) {
    document.getElementById("result").innerText =
      "⚠️ Adj meg helyes értékeket!";
    document.getElementById("explanation").innerText = "";
    return;
  }

  const profit = revenue - cost;
  const ratio = profit / cost;
  const roi = ratio * 100;

  document.getElementById("result").innerText = `ROI: ${roi.toFixed(2)}%`;

  const explanation = `
1. A képlet: ROI = (Bevétel – Költség) / Költség × 100
2. Helyettesítés: (<span class="font-semibold text-blue-600">${revenue}</span> – <span class="font-semibold text-blue-600">${cost}</span>) / <span class="font-semibold text-blue-600">${cost}</span> × 100
3. Kiszámoljuk a nyereséget: <span class="font-semibold text-blue-600">${revenue}</span> – <span class="font-semibold text-blue-600">${cost}</span> = <span class="font-semibold text-blue-600">${profit}</span>
4. Elosztjuk a nyereséget a költséggel: <span class="font-semibold text-blue-600">${profit}</span> ÷ <span class="font-semibold text-blue-600">${cost}</span> = <span class="font-semibold text-blue-600">${ratio.toFixed(
    2
  )}</span>
5. Szorozzuk 100-zal: <span class="font-semibold text-blue-600">${ratio.toFixed(
    2
  )}</span> × 100 = <span class="font-semibold text-blue-600">${roi.toFixed(
    2
  )}%</span>
6. Értelmezés: Minden elköltött 1 Ft után <span class="font-semibold text-blue-600">${ratio.toFixed(
    2
  )}</span> Ft nyereség keletkezett.
`;

  document.getElementById("explanation").innerHTML = explanation;
}
