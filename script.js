function initialize() {
  // your code here

  var matches = 0;
  var turn1 = true;
  var turn2 = false;
  var s1;
  var s2;

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
  }


  char = ["thunderboltz", "thunderboltz", "theboss", "theboss", "snake", "snake", "eva", "eva", "end", "end", "sorrow", "sorrow", "fury", "fury", "ocelot", "ocelot"];
  charShuffle = _.shuffle(char);
  var back = document.getElementsByClassName('back');
  for ( var z = 0; z<charShuffle.length; z++){
     back[z].setAttribute('src', charShuffle[z] + '.jpg');
  }

  function callback(e){
    if (turn1) {
      this.removeEventListener('click',callback);
      e.target.setAttribute('src', e.target.nextSibling.getAttribute('src'));
      s1 = e.target.parentNode;
      checkMatch();
      turn1 = false;
      turn2 = true;
        return;
    } if (turn2) {
        this.removeEventListener('click', callback);
        e.target.setAttribute('src', e.target.nextSibling.getAttribute('src'));
        s2 = e.target.parentNode;
        setTimeout(function(){
          checkMatch();
        },300);
      }
  }
  function checkMatch(){
    if(turn2){
      if (s1.firstChild.getAttribute('src') === s2.firstChild.getAttribute('src')) {
        matches++;
        if (matches === 8) {
          document.getElementById('win').style.textShadow = '1px 1px red';
          document.getElementById('win').innerText = "You're pretty good!";
        }
        s2.removeEventListener('click', callback);
        turn1 = true;
        turn2 = false;
      } else {
        s1.firstChild.setAttribute('src','fox-white.png');
        s1.firstChild.addEventListener('click', callback);
        s2.firstChild.setAttribute('src','fox-white.png');
        s2.firstChild.addEventListener('click', callback);
        turn1 = true;
        turn2 = false;
        }
    }
  }

  document.getElementsByTagName('button')[0].addEventListener('click', reset);
  function reset(){
    window.location.reload();
  }
}
window.onload = initialize;