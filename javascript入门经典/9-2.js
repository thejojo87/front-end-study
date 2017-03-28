/**
 * Created by thejojo on 2017/3/22.
 */

function cleardesc() {
    d = document.getElementById("description");
    d.innerHTML = "";

}

function hover(e) {
    if (!e) var e = window.event;
    whichlink = (e.target)? e.target.id : e.srcElement.id;
    if (whichlink == "order") desc = "Order a product";
    else if (whichlink == "email") desc = "Send us a message";
    else if (whichlink == "complain") desc = "Insult us";

    d = document.getElementById("description");
    d.innerHTML = desc;
}

orderlink = document.getElementById("order");
emaillink = document.getElementById("email");
complainlink = document.getElementById("complain");
orderlink.onmouseover=hover;
emaillink.onmouseover=hover;
complainlink.onmouseover=hover;
orderlink.onmouseout = cleardesc;
emaillink.onmouseout = cleardesc;
complainlink.onmouseout = cleardesc;
