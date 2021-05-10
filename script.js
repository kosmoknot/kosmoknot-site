function display(obj){
    var content = obj.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
}
function search(){
  var input = document.getElementById("searchBox");
  var filter = input.value.toUpperCase();
  links =document.getElementsByClassName("link_dump");
  for(var i=0; i< links.length ; i++){
    content_url=links[i].getElementsByTagName("a")[0];
    content_tag=links[i].getElementsByTagName("i")[0];
    var search_url = content_url.innerHTML.toUpperCase();
    var search_tag = content_tag.innerHTML.toUpperCase();
    if(search_url.indexOf(filter)!=-1 || search_tag.indexOf(filter)!=-1){
      links[i].style.display="";
    }else{
      links[i].style.display="none";
    }
  }
}

function onHover() {
  let image = document.getElementById('icon');
  image.src = '/images/logo2.png';
}

function onOut() {
  let image = document.getElementById('icon');
  image.src = '/images/logo.png';
}