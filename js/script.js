var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
     a = li[i].getElementsByTagName("button")[0];
     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
     } else {
        li[i].style.display = "none";
     }
  }
  }

  function Totop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }