function addSpan (event) {
    event.srcElement.parentElement.insertAdjacentHTML('beforeend', "<span> new span</span>");
}
function addDiv (event) {
    event.srcElement.parentElement.insertAdjacentHTML('beforeend', "<div>new div</div>");
}



