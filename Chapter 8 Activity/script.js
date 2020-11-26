function parseUserData() {
    var userInfo = document.getElementById("userInput").value;
    var res = document.getElementById("result");
    res.innerHTML = "";
    var indOf = userInfo.indexOf("g");
    res.innerHTML += "The Character 'g' Is At Index: " + indOf + "<br>";
    var chrAt = userInfo.charAt(5);
    res.innerHTML += "The Character At Index 7 Is: " + chrAt + "<br>"
    var chrCdAt = userInfo.charCodeAt(7); 
    res.innerHTML += "The Character Code At Index 9 Is: " + chrCdAt + "<br>";
    var str = userInfo.slice(-10, -2); 
    res.innerHTML += "The Character From The Slice Is: " + str + "<br>"; 
}
