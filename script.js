window.onload() = function() {
    //alert("script made by g4o2")
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('button{height:60px;width:150px;background:darkgrey;border-radius:10px;border:solid 3px orange;color:orange;}', sheet.cssRules.length);
    let btn = document.createElement("button");
    btn.innerHTML = "SUPER SPEED";
    btn.onclick = function hack() {

    }
    var myHoverInterval = null;
    btn.addEventListener("click", function () {
        if (myHoverInterval != null) {
            return;
        }
        myHoverInterval = setInterval(function () {
            let text = document.querySelector(".highlight").textContent + " ";
            document.querySelector("input").value = text
            var inputEvent = new InputEvent("input");
            document.querySelector("input").dispatchEvent(inputEvent)
        }, 1);
    });
    document.body.appendChild(btn);
}