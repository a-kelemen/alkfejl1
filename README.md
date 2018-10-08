# Alkalmazások fejlesztése beadandó

***

## Feladatleírás
Az alkalmazás jegyzetek tárolására, rendezésére és megosztására szolgál. A jegyzetek csoportokba,
ezek más csoportokba rendezhetőek. A felhasználók a saját jegyzeteikhez más felhasználóknak 
is hozzáférést biztosíthatnak.

## Funkcionális követelmények
* Regisztráció
* Bejelentkezés
* Bejelentkezett felhasználóknak
	- Új jegyzet felvitele
	- Jegyzet módosítása
	- Jegyzethez felhasználók hozzárendelése
	- Jegyzetek, jegyzet csoportok böngészése
	- Keresés a jegyzetek között 
	- Jegyzetek sorbarendezése fontosság szerint
	- Jegyzetek szűrése, listázása kategória (csoport) szerint

## Nem funkcionális követelmények
* Felhasználóbarát, ergonomikus elrendezés és kinézet.
* Gyors működés.
* Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés.

## Szakterületi fogalomjegyzék
* **Jegyzet**: egy rövid, szöveges emlékeztető. Tartozik hozzá: 
	- cím
	- fontosságát megadó szám 
	- a csoport neve, amiben benne van 
	- egyéb felhasználók nevei, akik hozzáférnek
	- az, hogy aktuális-e még a jegyzet

* **Jegyzetcsoport**: jegyzetek közti keresést könnyítő csoportok. A csoportokon belül 
	- jegyzetek
	- más csoportok lehetnek

* **Fontosság**: egy szám, ami a jegyzet fontosságát adja meg, értéke lehet 1, 2 vagy 3. Böngészésnél
a magasabb fontossággal rendelkező jegyzet előre van sorolva 

* **Aktualitás**: az üzenetek aktuálisak, vagy nem aktuálisak lehetnek, böngészésnél a nem aktuális 
jegyzetek hátra vannak sorolva

## Szerepkörök
* **Adminisztrátor**: Mindenhez hozzáfér
* **Felhasználó**: A saját jegyzeteit tudja olvasni és módosítani, illetve olyan jegyzeteket olvasni, 
amikhez hozzá lett rendelve

