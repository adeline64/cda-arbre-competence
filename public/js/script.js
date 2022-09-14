function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
apprenants = httpGet('http://localhost:3000/apprenants')
apprenants = JSON.parse(apprenants)

/*
apprenants.forEach(function(e){

    var tag = document.createElement("li");
    var text = document.createTextNode(e.nom);
    tag.appendChild(text);
    var element = document.getElementById("test");
    element.appendChild(tag);

})*/

apprenants.forEach(function(e){

    var td = document.createElement("td");
    var td0 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var tr = document.createElement("tr");
    
    var content = document.createTextNode(e.nom);
    var content2 = document.createTextNode(e.prénom)
    var content4 = document.createTextNode(e.competence)
    var content5 = document.createElement("input")
    content5.setAttribute("type", "button")
    content5.style.background = "green";
    var content6 = document.createElement("input")
    content6.setAttribute("type", "button")
    content6.style.background = "red";

    td.appendChild(content)
    td0.appendChild(content2)
    td2.appendChild(content4)
    td3.appendChild(content5)
    td4.appendChild(content6)

    tr.appendChild(td)
    tr.appendChild(td0)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    var element = document.getElementById("tableau");
    element.appendChild(tr);

    //var tag = document.createElement("li");
    //var text = document.createTextNode(`${e.id} ${e.nom} ${e.prénom}`);
    //text.className = "aze";
    //tag.appendChild(text);
    arbre = httpGet(`http://localhost:3000/arbre?apprenant=${e.id}`)
    arbre = JSON.parse(arbre)

    var element = document.getElementById("test");
    for (let i in arbre) {
        competence = httpGet(`http://localhost:3000/competences?numero=${arbre[i].competence}`)
        competence = JSON.parse(competence)
        var tag1 = document.createElement("li");
        var text4 = document.createTextNode(competence[0].titre);
        tag1.appendChild(text4);
        //element.appendChild(tag1);
     }

    //element.appendChild(tag);
})

function Back()
{
    window.history.back()
}
