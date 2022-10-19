fetch('../nav/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

fetch('../nav/nav_content_visual.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_inset-subnav-visual");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})


fetch('../nav/nav_content_copy.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_inset-subnav-copy");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

fetch('../nav/nav_content_components.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_inset-subnav-components");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})


fetch('../nav/nav_content_patterns.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_inset-subnav-patterns");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

