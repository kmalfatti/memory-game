function initialize() {
  // your code here

var matches = 0;
var select = [];

  var divs = document.querySelector('div').getElementsByTagName("div");
  for (var i= 0; i<divs.length; i++) {
    divs[i].className = 'cards';
    divs[i].setAttribute("data-answer", [i]);
    var img = document.createElement('img');
    divs[i].appendChild(img);
    img = document.createElement('img');
    divs[i].appendChild(img);
  }

getImg = document.getElementsByTagName('img');
for ( var k = 0; k<getImg.length; k+=2){
  getImg[k].setAttribute('src', 'fox-white.png');
  getImg[k].style.visabilty = 'visable';
  getImg[k].className = 'front';
  getImg[k].addEventListener('click', callback);
}

for ( var j = 1; j<getImg.length; j+=2){
  getImg[j].style.display = 'none';
  getImg[j].className = "back";
  getImg[j].addEventListener('click', callback);
}


char = ["thunderboltz", "thunderboltz", "theboss", "theboss", "snake", "snake", "eva", "eva", "end", "end", "sorrow", "sorrow", "fury", "fury", "ocelot", "ocelot"];
charShuffle = _.shuffle(char);
var back = document.getElementsByClassName('back');
for ( var z = 0; z<charShuffle.length; z++){
   back[z].setAttribute('src', charShuffle[z] + '.jpg');
}

function callback(e){
  if (e.target.style.visabilty === 'visable' ) {
      e.target.setAttribute('src', e.target.nextSibling.getAttribute('src'));
      select.push(e.target);
      console.log(select);
      }
      if ( "thunderboltz.jpg" == e.target.getAttribute('src')) {
        getImg[0].removeEventListener('clcik', callback);
        console.log(e.target);
      }
function time (){
      e.target.setAttribute('src', 'fox-white.png');
    }
}

document.getElementsByTagName('button')[0].addEventListener('click', reset);
function reset(){
  //Failed atempt
  
  // matches = 0;
  // (_.shuffle(char));
  // var rset = document.getElementsByClassName('front');
  // for ( var r = 0; r<rset.length; r++){
  //     rset[r].setAttribute('src', 'fox-white.png');
      window.location.reload();
// }
}


}
window.onload = initialize;