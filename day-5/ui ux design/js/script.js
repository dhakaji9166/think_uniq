function detail(evt, customerName) {
    var i, cust_dtl, btns;
    cust_dtl = document.getElementsByClassName("tab-detail");
    for (i = 0; i < cust_dtl.length; i++) {
        cust_dtl[i].style.display = "none";
    }
    btns = document.getElementsByClassName("btn");
    for (i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(" active", "");
    }
    document.getElementById(customerName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
