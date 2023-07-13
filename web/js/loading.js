document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("#loading").style.visibility = "visible";
    } else {
        document.querySelector("#loading").style.display = "none";
    }
};
