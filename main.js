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

  // Teljesen részletes gondolatmenet, minden lépés külön sorban, csak a változó számok kékek
  const explanation = `
<div>1. A képlet: ROI = (Bevétel – Költség) / Költség × 100</div>
<div>2. Helyettesítés: (<span class="text-blue-600 font-semibold">${revenue}</span> – <span class="text-blue-600 font-semibold">${cost}</span>) / <span class="text-blue-600 font-semibold">${cost}</span> × 100</div>
<div>3. Kiszámoljuk a nyereséget: <span class="text-blue-600 font-semibold">${revenue}</span> – <span class="text-blue-600 font-semibold">${cost}</span> = <span class="text-blue-600 font-semibold">${profit}</span></div>
<div>4. Elosztjuk a nyereséget a költséggel: <span class="text-blue-600 font-semibold">${profit}</span> ÷ <span class="text-blue-600 font-semibold">${cost}</span> = <span class="text-blue-600 font-semibold">${ratio.toFixed(
    2
  )}</span></div>
<div>5. Szorozzuk 100-zal: <span class="text-blue-600 font-semibold">${ratio.toFixed(
    2
  )}</span> × 100 = <span class="text-blue-600 font-semibold">${roi.toFixed(
    2
  )}%</span></div>
<div>6. Értelmezés: Minden elköltött 1 Ft után <span class="text-blue-600 font-semibold">${ratio.toFixed(
    2
  )}</span> Ft nyereség keletkezett.</div>
`;

  document.getElementById("explanation").innerHTML = explanation;
}
