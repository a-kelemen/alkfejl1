﻿# Alkalmazások fejlesztése beadandó


#### Madarász Gergely
#### Kelemen András
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

## Használati eset diagram
![usecase](https://github.com/a-kelemen/alkfejl1/blob/master/usecase.png)

## Adatbázis
![adatbazis](https://github.com/a-kelemen/alkfejl1/blob/master/database.png)

## Végpontok

* NoteGroup
	- GET /notegroups Jegyzetcsoportok lekérése
	- POST /notegroups Új jegyzetcsoportot hozhatunk létre	
	- PUT /notegroups Jegyzetcsoport nevének megváltoztatása
	- DELETE /notegroups Jegyzetcsoport törlése
	- GET /notegroups/{id}/notes Jegyzetcsoporthoz tartozó jegyzetek lekérése
* Note
	- POST /notes Új jegyzet felvétele
	- PUT /notes Jegyzet módosítása
	- DELETE /notes Jegyzet végleges törlése
	- GET /notes/{id}/labels Jegyzethez tartozó cimkék lekérése
	- POST /notes/{id}/labels Új cimke felvétele a jegyzethez
	- PUT /notes/{id}/labels
* User
	- GET /users Felhasználók lekérése
	- POST /users/register Új felhasználó regisztrálása
	- POST /users/login Bejelentkezés
* Label
	- GET /labels Összes cimke lekérése
	- POST /labels/{id}
	- PUT /labels/{id}
	- DELETE /labels/{id}
	
## Könyvtárstruktúra
![konyvtarstruktura](https://github.com/a-kelemen/alkfejl1/blob/master/konyvtarszerkezet.jpg)

## Osztálydiagram
![uml_diagram](https://github.com/a-kelemen/alkfejl1/blob/master/uml.png)

## Képernyőtervek
* Login képernyő
![login](https://github.com/a-kelemen/alkfejl1/blob/master/login.PNG)
* Regisztráció
![register](https://github.com/a-kelemen/alkfejl1/blob/master/register.PNG)
* Főoldal
![main](https://github.com/a-kelemen/alkfejl1/blob/master/mainpage.PNG)
* Új jegyzet / Módosítás
![neweditpage](https://github.com/a-kelemen/alkfejl1/blob/master/neweditpage.PNG)
