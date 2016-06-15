var info;
var currentID;

function FillGameInfo(ids) {
    ids = parseInt(ids);
    console.log("Current: " + currentID + ", Passed in ID: " + ids);
    
    if(info[ids].id != ids){
        alert("Ids don't match!");
        reutrn;
    }
    currentID = ids;
    console.log("Current: " + currentID + ", Passed in ID: " + ids);
    console.log(info);
     
    document.getElementsByClassName("gameTitle")[0].innerHTML = info[ids].Title;
    document.getElementsByClassName("gameDescription")[0].innerHTML = info[ids].Description;
    document.getElementsByClassName("Genre")[0].innerHTML = info[ids].Genre;
    document.getElementsByClassName("RDate")[0].innerHTML = info[ids].ReleaseDate;
    document.getElementsByClassName("Lang")[0].innerHTML = info[ids].Language;
    document.getElementsByClassName("gamePreview")[0].setAttribute("src", info[ids].ImageURL);
    

}

function popup(event){
    popReset();
    document.getElementsByClassName("Base")[0].style.visibility = "visible";
    
    FillGameInfo(event.target.getAttribute("data-game"));
    document.getElementsByClassName("Base")[0].style.width = "68vw";
    document.getElementsByClassName("Wrapper_Info")[0].style.opacity = 1;
    document.getElementsByClassName("blackMask")[0].style.pointerEvents = "all";
    document.getElementsByClassName("blackMask")[0].style.opacity = 0.4;
}

function popReset(){
    document.getElementsByClassName("Wrapper_Info")[0].style.opacity = 0;
    document.getElementsByClassName("blackMask")[0].style.opacity = 0;;
    document.getElementsByClassName("blackMask")[0].style.pointerEvents = "none";
    document.getElementsByClassName("Base")[0].style.width = 0;    
}

function popSwitch(event){
    console.log("current: " + currentID);
    if (event.target.className=="ChevronLeft") FillGameInfo((currentID - 1)>=0? (currentID - 1):currentID);
    else if (event.target.className=="ChevronRight")FillGameInfo((currentID + 1)>info.length? currentID:(currentID+1));
}

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'gameinfo.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

function InitJSON(){// Call to function with anonymous callback
    loadJSON(function (response) {
        info = JSON.parse(response);
});
    
}
