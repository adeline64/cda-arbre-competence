function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function SendData(url,data) {

        return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
            .then((json) => {
                console.log(json);
                return json;
            })
}
competences = httpGet('http://localhost:3000/competences')
competences = JSON.parse(competences)
competences.forEach(function(e){
    var td = document.createElement("td");
    var td0 = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var tr = document.createElement("tr");
    var content = document.createTextNode(e.titre);

    var radio0 = document.createElement("input");
    radio0.setAttribute("type","radio")
    radio0.setAttribute("name",e.numero)
    radio0.setAttribute("value","0")

    var radio1 = document.createElement("input");
    radio1.setAttribute("type","radio")
    radio1.setAttribute("name",e.numero)
    radio1.setAttribute("value","1")

    var radio2 = document.createElement("input");
    radio2.setAttribute("type","radio")
    radio2.setAttribute("name",e.numero)
    radio2.setAttribute("value","2")

    var radio3 = document.createElement("input");
    radio3.setAttribute("type","radio")
    radio3.setAttribute("name",e.numero)
    radio3.setAttribute("value","3")




    td.appendChild(content)
    td0.appendChild(radio0)
    td1.appendChild(radio1)
    td2.appendChild(radio2)
    td3.appendChild(radio3)

    tr.appendChild(td)
    tr.appendChild(td0)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    var element = document.getElementById("compt");

    element.appendChild(tr);
})

let xhr = new XMLHttpRequest();
xhr.open("POST", " http://localhost:3000/apprenants");
let apr = httpGet('http://localhost:3000/apprenants')
apr = JSON.parse(apr)
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);



//xhr.send(data);

function logSubmit(event) {

    let dataArbre
   let dataAprenants = `{ 
  "nom": "${form[1].value}",
  "prénom": "${form[2].value}",
  "photo": "wsdsd"
}`;
    const r = SendData("http://localhost:3000/apprenants",dataAprenants).then(function(r){
        console.log(r.id)


        for(let i = 3;i<62;i++){
            if(form[i].checked && form[i].value != "0"){
                dataArbre =     `{
             "apprenant": ${parseInt(r.id)},
             "competence": "${form[i].name}",
             "niveau":  ${form[i].value}
         }`
                SendData("http://localhost:3000/arbre", dataArbre).then(r => console.log(r))
            }

        }


    })

    event.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);


function Back()
{
    window.history.back()
}
