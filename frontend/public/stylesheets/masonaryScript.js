function masonry(index, indexItem, gutter, col) {
    let g = document.querySelector(index)
    let gc = document.querySelectorAll(indexItem)
    let gcLength = gc.length
    let gHeight = 0
    let i;
    for (let i = 0; i < gcLength; i++) {
        gHeight+=gc[i].offsetHeight+parseInt(gutter);
    }
    g.style.height = gHeight/col + gHeight/(gcLength+1) + "px";
    console.log(gc)
}

["resize","load"].forEach(event => {
    window.addEventListener(event, function() {
        masonry(".categoryIndex",".categoryIndexItem", 8, 3)
    })
})