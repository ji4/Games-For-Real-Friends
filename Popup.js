var info;

function FillGameInfo(id) {

}

function popup(event){
    document.getElementsByClassName("Base")[0].width = "68vw";
    document.getElementsByClassName("Wrapper_Info")[0].opacity = 1;
    document.getElementsByClassName("blackMask")[0].opacity = 0.4;
}

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'file.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

// Call to function with anonymous callback
loadJSON(function (response) {
    info = JSON.parse(response);
});