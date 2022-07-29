# 10ff.net Script

Script for cheating in <a href="https://10ff.net">10ff.net</a> typing test
## How it works 
It basically is selecting the highlited text in the test (which is the current word that you are going to type) setting it to a variable<br />
and setting the input field's value to that variable
and dispatching the input event every 1 / 1000 of a second

## Basic version
Press <kbd>ctrl + shift + i</kbd> or <kbd>F12</kbd> and paste it in the console
```js
setInterval(function() {
    let text = document.querySelector(".highlight").textContent + " ";
    document.querySelector("input").value = text
    var inputEvent = new InputEvent("input");
    document.querySelector("input").dispatchEvent(inputEvent)
}, 1);
```

## Script with button

If you like always cheating, this script makes your life easier <br /> 
This script creates a button on the page so that you don't need to paste the script in everytime, 
you just need to press the button <br /> 
### Usage

Install a userscript extension like <a href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en">Tampermonkey</a><br>
Paste in this code 
```js
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://10ff.net
// @icon         https://www.google.com/s2/favicons?sz=64&domain=10fastfingers.com
// @grant        none
// ==/UserScript==

(function() {
    //alert("                  SCRIPT made by g4o2#5384 \n                  BUTTON is at the BOTTOM LEFT")
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('button{height:60px;width:150px;background:darkgrey;border-radius:10px;border:solid 3px orange;color:orange;}', sheet.cssRules.length);
    let btn = document.createElement("button");
    btn.innerHTML = "SUPER SPEED";
    btn.onclick = function hack() {

    }
    var myHoverInterval = null;
    btn.addEventListener("click", function() {
        if (myHoverInterval != null) {
            return;
        }
        myHoverInterval = setInterval(function() {
            let text = document.querySelector(".highlight").textContent + " ";
            document.querySelector("input").value = text
            var inputEvent = new InputEvent("input");
            document.querySelector("input").dispatchEvent(inputEvent)
		}, 1);
    });
    document.body.appendChild(btn);
})();
```
