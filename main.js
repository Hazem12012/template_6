//  challenge 101 in cors
let mainDiv = document.createElement("div");
let containerDiv = document.createElement("div");

// general style
containerDiv.style.paddingLeft= "15px";
containerDiv.style.paddingRight= "15px";
containerDiv.style.marginLeft= "auto";
containerDiv.style.marginRight= "auto";

// start header
let headerDiv = document.createElement("div");
let logoH2 = document.createElement("h2");
let logoH1 = document.createElement("h1");
let myContent = document.createElement("div");
let ulLIst = document.createElement("ul");
let li_1 = document.createElement("li");
let li_2 = document.createElement("li");
let li_3 = document.createElement("li");
let li_4 = document.createElement("li");
let allLi = document.querySelectorAll("li");

// classes
mainDiv.className = "content";
containerDiv.className = "container";
headerDiv.className = "header";

// Element content
logoH2.textContent = "code";
logoH1.textContent = "∞";
li_1.textContent = "Home";
li_2.textContent = "About";
li_3.textContent = "Service";
li_4.textContent = "content";

// Element style
headerDiv.style.backgroundColor= "white";

logoH2.style.fontSize = "35px";
logoH2.style.color = "#1d951d";
logoH2.style.display = "inline";
logoH2.style.fontFamily = "sans-serif";


logoH1.style.cssText = "font-size:40px; font-weight: bold; text-align: center; color:#1d951d ;";




ulLIst.style.color = "#1d951d";
ulLIst.style.listStyle = "none";
ulLIst.style.display = "flex";

li_1.style.paddingRight = "20px";
li_2.style.paddingRight = "20px";
li_3.style.paddingRight = "20px";
li_4.style.paddingRight = "20px";

myContent.style.display= "flex";
myContent.style.alignItems= "center";
myContent.style.justifyContent= "space-between";
myContent.style.marginRight = "40px";
myContent.style.marginLeft = "40px";


// Append
mainDiv.appendChild(headerDiv);
headerDiv.appendChild(containerDiv);
containerDiv.append(myContent);
myContent.append(logoH1);
logoH1.append(logoH2);
myContent.appendChild(ulLIst);
ulLIst.appendChild(li_1);
ulLIst.appendChild(li_2);
ulLIst.appendChild(li_3);
ulLIst.appendChild(li_4);



// Start body
let bodyDiv = document.createElement("div");
let containerBody = document.createElement("div");

// classes
bodyDiv.className = "bodyContent";


// Append
mainDiv.appendChild(bodyDiv);
bodyDiv.appendChild(containerBody);

for (number = 1; number <= 15; number++) {

	let childDiv = document.createElement("div");
  let span = document.createElement("span");

// Element content
	let mytext = document.createTextNode("Product");
	span.innerText = [number];

// Append
	containerBody.appendChild(childDiv);
	childDiv.appendChild(span);
	childDiv.appendChild(mytext);

// classes
	containerBody.className = "content";
  childDiv.className = "product";

// Element style
	containerBody.style.cssText =
		"display:flex; padding: 20px; margin:0px; min-height: calc(100vh - 142px); flex-wrap: wrap; justify-content: center; gap: 20px; box-sizing:border-box; background-color:#dbdbdb;";

	childDiv.style.cssText =
		"padding: 20px; background-color: rgb(255, 255, 255); border: 1px sold rgb(221, 221, 221); width:calc((100% - 40px) /3) ; box-sizing: border-box; text-align: center;  color: rgb(136, 136, 136); border-radius: 6px;";

	span.style.cssText =
		"font-size: 30px; font-weight: normal;color: black; display: block; margin-bottom: 10px;";
};20

// Start footer
let footerDiv = document.createElement("div");
let footerP = document.createElement("p");

// classes
footerDiv.className = "footer";

// Element content
footerP.textContent = "Training in js 2024";

// Element style
footerP.style.textAlign= "center";
footerP.style.color = "white";
footerP.style.fontFamily= "cursive";

footerDiv.style.backgroundColor = "#1d951d";
footerDiv.style.paddingTop = "10px";
footerDiv.style.paddingBottom= "10px";

// Append
mainDiv.appendChild(footerDiv);
footerDiv.appendChild(footerP);

// add All element



document.body.appendChild(mainDiv);
