/*
Firma nabízející trička s potiskem poskytuje množstevní slevy podle počtu objednaný kusů. Při objednávce pod 50 kusů stojí jedno tričko 300 Kč. Pokud si objednáme alespoň 50 kusů, je cena 250 Kč za kus. Při objednávce nad 200 kusů je cena 200 Kč za tričko. Nad 500 kusů zaplatíme 150 Kč za tričko a nad 1000 kusů zaplatíme 120 korun za tričko.

Napište stránku, která od uživatele obdrží počet kusů, které si chce objednat, a program odpoví celkovou ceny objednávky výpisem do stránky.
*/

/*
<50 - 1 triko 300 Kč
>=50 - 1 triko 250 Kč
>200 - 1 triko 200 Kč
>500 - 1 triko 150 Kč
>1000 = 1 triko 120 Kč
*/


const pocetKusu = prompt("Zadejte počet kusů triček, kolik si chcete objednat")

if (pocetKusu >= 1001)
{document.body.innerHTML += "Vaše cena je: " + (120 * pocetKusu) + " Kč";}
else if (pocetKusu >= 501)
{document.body.innerHTML += "Vaše cena je: " + (150 * pocetKusu) + " Kč";}
else if (pocetKusu >= 201)
{document.body.innerHTML += "Vaše cena je: " + (200 * pocetKusu) + " Kč";}
else if (pocetKusu >= 50)
{document.body.innerHTML += "Vaše cena je: " + (250 * pocetKusu) + " Kč";}
else if (pocetKusu < 50)
{document.body.innerHTML += "Vaše cena je: " + (300 * pocetKusu) + " Kč";}