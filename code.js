console.log("I'm code")
var intersected = false;

function debugShowAll(){
  showAllByClassName('text1');
  showAllByClassName('text2');
  showAllByClassName('text3');
}


function showAllByClassName(className){
  var els = document.getElementsByClassName(className);
  var i = 0;
  for(var el of els){
    el.style.display = '';
  }
}

function handleIntersect(){
  var boxElement = document.querySelector("#box");
  if(!intersected && boxElement.style.display != 'none'){
    console.log('intersected')
    window.setTimeout(function(){
      showAllByClassName('text3');
    }, 1000)
    intersected = true;
  }
}


function createObserverFunctionTotallyNotCopiedFromMDN() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  var boxElement = document.querySelector("#box");
  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}


function doThings(){
  // debugShowAll();
  attachButton1ClickEventToShowTheAmazingText();
  createObserverFunctionTotallyNotCopiedFromMDN();
  attachDataAddingEventToButton();
  attachInputEventForAnswerInput();
}

function attachButton1ClickEventToShowTheAmazingText(){
  document.getElementById('button1').addEventListener('click', function(ev){
    ev.preventDefault();
    var els = document.getElementsByClassName('text1');
    var i = 0;
    for(var el of els){
      window.setTimeout(function(i, el){
        el.style.display = 'block';
      }, i*1000, i, el)
      i++;
    }
  })
}


function attachDataAddingEventToButton(){
  document.getElementById('button2').addEventListener('click', function(ev){
    ev.preventDefault();
    var table = document.getElementById('table1');
    if(table.tBodies[0].children.length >= 4){
      showAllByClassName('text2');
      document.getElementById('button2').style.display = 'none';
      return;
    }
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    cell1.innerHTML = "More data"
    var cell2 = document.createElement("td");
    cell2.innerHTML = "More data"
    row.appendChild(cell1)
    row.appendChild(cell2)
    table.tBodies[0].appendChild(row)
  })
}

function handleInputs(ev){
  if(ev.target.value.length >= 3){
    document.querySelector('#result').innerHTML = "Yes, you are human!"
    showAllByClassName('text4')
  }
}


function attachInputEventForAnswerInput(){
  document.querySelector('#answer').addEventListener('input', handleInputs)
}


window.onload = doThings;