function Accommodation(accomName, contract_Length = "", budget_Limit = "", actualRent = "", locationOfAccom = "", ensuite = "", size = "", noOfRooms) {
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
let CryfieldApartments = new Accommodation("Cryfield Apartments", "40 weeks", "expensive", "£191", "cryfield", "yes", "small", "142");
let CryfieldStandard = new Accommodation("Cryfield Standard", "40 weeks", "low", "£102", "cryfield", "no", "small", "254");
let CryfieldTownhouses = new Accommodation("Cryfield Townhouses", "40 weeks", "expensive", "£182", "cryfield", "yes", "big", "648");
let Heronbank = new Accommodation("Heronbank", "40 weeks", "mid", "£160", "lakeside", "yes", "big", "701");
let JackMartin = new Accommodation("Jack Martin", "35 weeks", "expensive", "£180", "central", "yes", "small", "425");
let Lakeside = new Accommodation("Lakeside", "40 weeks", "mid", "£162", "lakeside", "yes", "big", "596");
let Rootes = new Accommodation("Rootes", "40 weeks", "low", "£108", "central", "no", "big", "927");
let Sherbourne = new Accommodation("Sherbourne", "40 weeks", "expensive", "£180", "lakeside", "yes", "big", "794");
let Tocil = new Accommodation("Tocil", "44 weeks", "low", "£114", "central", "no", "big", "574");
let Westwood = new Accommodation("Westwood", "40 weeks", "low", "£114", "westwood", "no", "small", "440");
let Whitefields = new Accommodation("Whitefields", "40 weeks", "low", "£81", "central", "no", "small", "195");

//POSTGRAD ACCOM OBJECTS
let Benefactors = new Accommodation("Benefactors", "50 weeks", "expensive", "£217", "central", "yes", "small", "37");
let Claycroft_Post = new Accommodation("Claycroft", "50 weeks", "mid", "£144", "central", "no", "big", "679");
let CryfieldApartments_Post = new Accommodation("Cryfield Apartments", "50 weeks", "expensive", "£191", "cryfield", "yes", "small", "142");
let CryfieldStudios = new Accommodation("Cryfield Studios", "40 weeks", "expensive", "£231", "cryfield", "yes", "small", "38");
let CryfieldTownhouses_Post = new Accommodation("Cryfield Townhouses", "50 weeks", "expensive", "£185", "cryfield", "yes", "big", "648");
let Heronbank_Post = new Accommodation("Heronbank", "50 weeks", "mid", "£160", "lakeside", "yes", "big", "701");
let Lakeside_Post = new Accommodation("Lakeside", "50 weeks", "mid", "£162", "lakeside", "yes", "big", "596");
let Tocil_Post = new Accommodation("Tocil", "44 weeks", "low", "£114", "central", "no", "big", "574");
let Westwood_Post = new Accommodation("Westwood", "50 weeks", "low", "£114", "westwood", "no", "small", "440");
let Whitefields_Post = new Accommodation("Whitefields", "50 weeks", "low", "£81", "central", "no", "small", "195");

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

//uncheck all form elements
const uncheckAll = (document_name) => {
  var ele = document.getElementsByName(document_name);
  for (var i = 0; i < ele.length; i++)
    ele[i].checked = false;
}

//hide form so you can show the resulting accom
const hideForm = () => {
  let x = document.getElementById("box-wrapper-hide");
  x.innerHTML = ""
}

//remove empty strings from object
const filterEmptyStringObj = (obj) => {
  let result = {};
  for (let key in obj) {
    if (obj[key] !== '') {
      result[key] = obj[key];
    }
  }
  return result;
};

function formChanged() {

  // first extract all the inputs that the user selected:
  elem = document.querySelector('input[name="degreeLevel"]:checked');
  degreeLevel = (elem) ? elem.value : "";

  elem = document.querySelector('input[name="budgetLimit"]:checked');
  budget_Limit = (elem) ? elem.value : "";

  elem = document.querySelector('input[name="ensuite"]:checked');
  ensuite = (elem) ? elem.value : "";

  elem = document.querySelector('input[name="contractLength"]:checked');
  contract_Length = (elem) ? elem.value : "";

  elem = document.querySelector('input[name="location"]:checked');
  locationOfAccom = (elem) ? elem.value : "";

  elem = document.querySelector('input[name="size"]:checked');
  size = (elem) ? elem.value : "";

  // if the degree level isn't selected, reset everything and force user to select it
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
  window.scrollTo(0, 0);

  //put all the extracted parameters in an object
  let parameters = { budget_Limit, ensuite, contract_Length, locationOfAccom, size };



  let chosenObject = filterEmptyStringObj(parameters); //remove empty parameters

  //while showing results, shows the user which parameters they chose
  let chosenObjectText = '';
  for (key in chosenObject) {
    switch (key) {
      case "contract_Length":
        key = "Length Of Contract";
        break;
      case "budget_Limit":
        key = "Budget Limit";
        break;
      case "locationOfAccom":
        key = "Location";
        break;
      case "ensuite":
        key = "Ensuite";
        break;
      case "size":
        key = "Size";
        break;
    }
    chosenObjectText += "<span style='color:#D81B29'>" + key + "</span>" + ', ';
  }

  const showChosenParameters = () => {
    let x = document.getElementById("chosenParameters");
    x.innerHTML = "Showing accommodations based on: <br> " + chosenObjectText;
    x.style.fontSize = "1.6em";
  }

  const filterAndShowAccom = (whichAccomArray) => {
    console.log(undergraduateAccomArray);

    const handleFilter = (obj) => {
      //ctr variabile counts how many properties matched
      let ctr = 0;
      for (let key in obj) {
        if (obj[key] === chosenObject[key]) {
          //if the properity from the chosenObject matches the one in the object then the counter increments
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

    let filteredArray = whichAccomArray.filter(handleFilter)

    //if no accom is found for current parameters, show text below
    if (filteredArray.length == 0) {
      let x = document.getElementById("box-wrapper-hide");
      x.innerHTML = `<br> <br>There are no accommodations with the chosen parameters, please try again.`;
      x.style.fontSize = "1.8em";
    }

    let x = document.getElementById("box-wrapper-hide");

    const handleForEach = (arrayItem) => {
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

        switch (key) {
          case "contract_Length":
            usedKey = key;
            key = "Length Of Contract (weeks)";
            break;

          case "budget_Limit":
            break;

          case "actualRent":
            usedKey = key;
            key = "Weekly Rent";
            break;

          case "locationOfAccom":
            usedKey = key;
            key = "Location";
            break;

          case "ensuite":
            usedKey = key;
            key = "Ensuite";
            break;

          case "size":
            break;

          case "noOfRooms":
            usedKey = key;
            key = "Total Number Of Rooms";
            break;
        }

        let node = document.createElement("LI");                 // Create a <li> node
        let eachText = `<span> ${key}: <span class="highlighted-text">${arrayItem[usedKey]}</span> </span>`;
        node.insertAdjacentHTML('afterbegin', eachText);
        ulNode.appendChild(node);                                // Append <li> to <ul> with 
      }
    }

    filteredArray.forEach(handleForEach);
  }

  showChosenParameters();
  
  if (degreeLevel == "undergraduate") {
    filterAndShowAccom(undergraduateAccomArray)
  }

  if (degreeLevel == "postgraduate") {
    filterAndShowAccom(postgraduateAccomArray)
  }
}





