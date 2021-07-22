function Accommodation(accomName, contract_Length = "", budget_Limit = "",actualRent="", locationOfAccom = "", ensuite = "", size = "", noOfRooms) {
    this.accomName = accomName;
    this.contract_Length = contract_Length;
    this.budget_Limit = budget_Limit;
    this.actualRent = actualRent;
    this.locationOfAccom = locationOfAccom;
    this.ensuite = ensuite;
    this.size = size;
    this.noOfRooms = noOfRooms;
}

//UNDERGRAD ACCOM OBJECTS
let AV = new Accommodation("Arthur Vick", "35 weeks", "expensive", "£193", "central", "yes", "small", "396");
let Bluebell = new Accommodation("Bluebell", "40 weeks", "expensive", "£208", "central", "yes", "medium", "505");
let Claycroft = new Accommodation("Claycroft", "40 weeks", "mid", "£144", "central", "no", "big", "679");
let CryfieldApartments = new Accommodation("Cryfield Apartments","40 weeks","expensive", "£191", "cryfield", "yes", "small", "142");
let CryfieldStandard = new Accommodation("Cryfield Standard","40 weeks","low", "£102", "cryfield", "no", "small", "254");
let CryfieldTownhouses = new Accommodation("Cryfield Townhouses","40 weeks","expensive", "£182", "cryfield", "yes", "big", "648");
let Heronbank = new Accommodation("Heronbank","40 weeks","mid", "£160", "lakeside", "yes", "big", "701");
let JackMartin = new Accommodation("Jack Martin","35 weeks","expensive", "£180", "central", "yes", "small", "425");
let Lakeside = new Accommodation("Lakeside","40 weeks","mid", "£162", "lakeside", "yes", "big", "596");
let Rootes = new Accommodation("Rootes","40 weeks","low", "£108", "central", "no", "big", "927");
let Sherbourne = new Accommodation("Sherbourne","40 weeks","expensive", "£180", "lakeside", "yes", "big", "794");
let Tocil = new Accommodation("Tocil","44 weeks","low", "£114", "central", "no", "big", "574");
let Westwood = new Accommodation("Westwood","40 weeks","low", "£114", "westwood", "no", "small", "440");
let Whitefields = new Accommodation("Whitefields","40 weeks","low", "£81", "central", "no", "small", "195");

//POSTGRAD ACCOM OBJECTS
let Benefactors = new Accommodation("Benefactors", "50 weeks", "expensive", "£217", "central", "yes", "small", "37");
let Claycroft_Post = new Accommodation("Claycroft","50 weeks", "mid", "£144", "central", "no", "big", "679");
let CryfieldApartments_Post = new Accommodation("Cryfield Apartments","50 weeks", "expensive", "£191", "cryfield", "yes", "small", "142");
let CryfieldStudios = new Accommodation("Cryfield Studios","40 weeks", "expensive", "£231", "cryfield", "yes", "small", "38");
let CryfieldTownhouses_Post = new Accommodation("Cryfield Townhouses","50 weeks", "expensive", "£185", "cryfield", "yes", "big", "648");
let Heronbank_Post = new Accommodation("Heronbank","50 weeks", "mid", "£160", "lakeside", "yes", "big", "701");
let Lakeside_Post = new Accommodation("Lakeside","50 weeks", "mid", "£162", "lakeside", "yes", "big", "596");
let Tocil_Post = new Accommodation("Tocil","44 weeks", "low", "£114", "central", "no", "big", "574");
let Westwood_Post = new Accommodation("Westwood","50 weeks", "low", "£114", "westwood", "no", "small", "440");
let Whitefields_Post = new Accommodation("Whitefields","50 weeks", "low", "£81", "central", "no", "small", "195");



let undergraduateAccomArray = [
    AV,
    Bluebell,
    Claycroft,
    CryfieldApartments,
    CryfieldStandard,
    CryfieldTownhouses,
    Heronbank,
    JackMartin,
    Lakeside,
    Rootes,
    Sherbourne,
    Tocil,
    Westwood,
    Whitefields
];

let postgraduateAccomArray = [
    Benefactors,
    Claycroft_Post,
    CryfieldApartments_Post,
    CryfieldStudios,
    CryfieldTownhouses_Post,
    Heronbank_Post,
    Lakeside_Post,
    Tocil_Post,
    Westwood_Post,
    Whitefields_Post
];


function formChanged() {

    
    
    elem = document.querySelector('input[name="degreeLevel"]:checked');
    degreeLevel = (elem) ? elem.value : "";

    elem = document.querySelector('input[name="budgetLimit"]:checked');
    budget_Limit = (elem) ? elem.value : "";
    
    elem = document.querySelector('input[name="ensuite"]:checked');
    ensuite = (elem) ? elem.value : "";

    elem = document.querySelector('input[name="contractLength"]:checked');
    contract_Length = (elem) ? elem.value : "";

    elem = document.querySelector('input[name="location"]:checked');
    locationOfAccom= (elem) ? elem.value : "";

    elem = document.querySelector('input[name="size"]:checked');
    size = (elem) ? elem.value : "";

    if (degreeLevel == "") {
        alert("please choose degree level");
        uncheckAll("budgetLimit");
        uncheckAll("ensuite");
        uncheckAll("contractLength");
        uncheckAll("location");
        uncheckAll("size");
        return;
    }

    hideForm();
    window.scrollTo(0,0);

    // sizeOfAccom = document.querySelector('input[name="size"]:checked').value;



    let parameters = {budget_Limit, ensuite, contract_Length, locationOfAccom, size};


    const filterEmptyStringObj = obj => {
        let result = {};
        for (let key in obj) {
          if (obj[key] !== '') {
            result[key] = obj[key];
          }
        }
        return result;
      };

      let chosenObject = filterEmptyStringObj(parameters);
      console.log(chosenObject);

      let chosenObjectText = '';
      for (key in chosenObject) {
        if (key == "contract_Length") {
          key = "Length Of Contract";
        }

        if (key == "budget_Limit") {
          key = "Budget Limit";
        }

        if (key == "locationOfAccom") {
          key = "Location";
        }

        if (key == "ensuite") {
          key = "Ensuite";
        }

        if (key == "size") {
          key = "Size";
        }



        chosenObjectText += "<span style='color:#D81B29'>" +key + "</span>" +', ';
      }

      function createAccomImage(src) {
        var img = document.createElement('img');
        img.src = src;
    } 

    function uncheckAll(document_name) {
      var ele = document.getElementsByName(document_name);
      for(var i=0;i<ele.length;i++)
          ele[i].checked = false;
    }

    showChosenParameters();

    if (degreeLevel == "undergraduate") {
        console.log(undergraduateAccomArray);
      
        const handleFilter = obj => {
          //ctr variabile counts how many properties matched
            let ctr = 0;
          
            for (let key in obj) {
              if (obj[key] === chosenObject[key]) {
                //if the properity from the chosenObject matches the one in the obiect then the counter increments
                  ctr++;
              }
            }
          // if the number of properties matched equals the number of properties the chosenObject has then the object is good and we return true In order to tell the filter function to return the object
            if (ctr === Object.keys(chosenObject).length) {
              return true;
            }
            //else it means that the number of properties matched is not equal to the number of properties in the chosenObject
            return false;
          };
          
          console.log(undergraduateAccomArray.filter(handleFilter));
          let filteredArray = undergraduateAccomArray.filter(handleFilter)


          if (filteredArray.length == 0) {
            let x = document.getElementById("box-wrapper-hide");  
            x.innerHTML = `<br> <br>There are no accommodations with the chosen parameters, please try again.`; 
            x.style.fontSize = "1.8em";
          } else {
            let x = document.getElementById("box-wrapper-hide"); 
            
            filteredArray.forEach(function (arrayItem) {
              let accomDiv = document.createElement("DIV");
              accomDiv.className = "accomClassName";
              let ulNode = document.createElement("UL");
              accomDiv.appendChild(ulNode);
              x.appendChild(accomDiv);
              
              let usedKey;
              for (key in arrayItem) {
                

                if (key == "accomName") {
                  usedKey = key;
                  key = "Accommodation";
                  

                  let node = document.createElement("LI"); 

                  let nodeTitle = document.createElement("H1"); 

                  let textnode = document.createTextNode(arrayItem[usedKey]);         // Create a text node

                  nodeTitle.appendChild(textnode);

                  node.appendChild(nodeTitle);

                  ulNode.appendChild(node);
                  continue;

                }
                if (key == "contract_Length") {
                  usedKey = key;
                  key = "Length Of Contract (weeks)";
                }

                if (key == "budget_Limit") continue;

                if (key == "actualRent") {
                  usedKey = key;
                  key = "Weekly Rent";
                }

                if (key == "locationOfAccom") {
                  usedKey = key;
                  key = "Location";
                }

                if (key == "ensuite") {
                  usedKey = key;
                  key = "Ensuite";
                }

                if (key == "size") continue;

                if (key == "noOfRooms") {
                  usedKey = key;
                  key = "Total Number Of Rooms";
                }
                
                let node = document.createElement("LI");                 // Create a <li> node
                let eachText = `<span> ${key}: <span class="highlighted-text">${arrayItem[usedKey]}</span> </span>`;
                //let textnode = document.createTextNode(eachText);
                //textnode.innerHTML = "<span style='font-size:2rem;'" + eachText + "</span>";         // Create a text node
                node.insertAdjacentHTML('afterbegin', eachText);
                //node.appendChild(textnode);                              // Append the text to <li>
                ulNode.appendChild(node);                                // Append <li> to <ul> with 
                
                
              }
              
          });

            
          }
}
    if (degreeLevel == "postgraduate") {
      console.log(postgraduateAccomArray);
      
      const handleFilter = obj => {
        //ctr variabile counts how many properties matched
          let ctr = 0;
        
          for (let key in obj) {
            if (obj[key] === chosenObject[key]) {
              //if the properity from the chosenObject matches the one in the obiect then the counter increments
                ctr++;
            }
          }
        // if the number of properties matched equals the number of properties the chosenObject has then the object is good and we return true In order to tell the filter function to return the object
          if (ctr === Object.keys(chosenObject).length) {
            return true;
          }
          //else it means that the number of properties matched is not equal to the number of properties in the chosenObject
          return false;
        };
        
        console.log(postgraduateAccomArray.filter(handleFilter));
        let filteredArray = postgraduateAccomArray.filter(handleFilter)


        let pleaseTryAgain = "please try again"
        if (filteredArray.length == 0) {
          let x = document.getElementById("box-wrapper-hide");  
          x.innerHTML = `<br> <br>There are no accommodations with the chosen parameters, please try again.`; 
          x.style.fontSize = "1.8em";
        } else {
          let x = document.getElementById("box-wrapper-hide"); 
          
          filteredArray.forEach(function (arrayItem) {
            let accomDiv = document.createElement("DIV");
            accomDiv.className = "accomClassName";
            let ulNode = document.createElement("UL");
            accomDiv.appendChild(ulNode);
            x.appendChild(accomDiv);
            
            let usedKey;
            for (key in arrayItem) {
              

              if (key == "accomName") {
                usedKey = key;
                key = "Accommodation";
                

                let node = document.createElement("LI"); 

                let nodeTitle = document.createElement("H1"); 

                let textnode = document.createTextNode(arrayItem[usedKey]);         // Create a text node

                nodeTitle.appendChild(textnode);

                node.appendChild(nodeTitle);

                ulNode.appendChild(node);
                continue;

              }
              if (key == "contract_Length") {
                usedKey = key;
                key = "Length Of Contract (weeks)";
              }

              if (key == "budget_Limit") continue;

              if (key == "actualRent") {
                usedKey = key;
                key = "Weekly Rent";
              }

              if (key == "locationOfAccom") {
                usedKey = key;
                key = "Location";
              }

              if (key == "ensuite") {
                usedKey = key;
                key = "Ensuite";
              }

              if (key == "size") continue;

              if (key == "noOfRooms") {
                usedKey = key;
                key = "Total Number Of Rooms";
              }
              
              let node = document.createElement("LI");                 // Create a <li> node
              let eachText = `<span> ${key}: <span class="highlighted-text">${arrayItem[usedKey]}</span> </span>`;
              //let textnode = document.createTextNode(eachText);
              //textnode.innerHTML = "<span style='font-size:2rem;'" + eachText + "</span>";         // Create a text node
              node.insertAdjacentHTML('afterbegin', eachText);
              //node.appendChild(textnode);                              // Append the text to <li>
              ulNode.appendChild(node);                                // Append <li> to <ul> with 
              
              
            }
            
        });

          
        }
    }

    function hideForm() {
      let x = document.getElementById("box-wrapper-hide");  
        x.innerHTML = ""
    } 

    function showChosenParameters() {
      let x = document.getElementById("chosenParameters");
      x.innerHTML = "Showing accommodations based on: <br> " + chosenObjectText;
      x.style.fontSize = "1.6em";                                                      
    }
    


}





