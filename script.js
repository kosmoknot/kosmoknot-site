function display(obj) {
  var content = obj.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
function link_search() {
  var input = document.getElementById("searchBox");
  var filter = input.value.toUpperCase();
  links = document.getElementsByTagName("li");
  for (var i = 0; i < links.length; i++) {
    content_url = links[i].getElementsByTagName("a")[0];
    content_tag = links[i].getElementsByTagName("i")[0];
    var search_url = content_url.innerHTML.toUpperCase();
    var search_tag = content_tag.innerHTML.toUpperCase();
    if (search_url.indexOf(filter) != -1 || search_tag.indexOf(filter) != -1) {
      links[i].style.display = "";
    } else {
      links[i].style.display = "none";
    }
  }
}

function log_search() {
  var input = document.getElementById("searchBox");
  var filter = input.value.toUpperCase();
  var visible =[];
  var groups = document.getElementsByClassName("article");
  names = document.getElementsByClassName("collapsible");
  for (var i = 0; i < names.length; i++) {
    var name = names[i].getElementsByTagName("ins")[0];
    var search_name = name.innerHTML.toUpperCase();
    var group = names[i].parentNode.parentNode.parentNode.parentNode;
    var parent = names[i].parentNode;
    if (search_name.indexOf(filter) != -1) {
      names[i].style.display = "";
      parent.style.display = "";
      visible.push(group);
    } else {
      names[i].style.display = "none";
      parent.style.display = "none";
    }
  }

  for(var i=0;i<groups.length;i++){
    if(visible.includes(groups[i])==false){
      groups[i].style.display = "none";
    }else{
      groups[i].style.display = "";
    }
  }
}

function onHover() {
  let name = event.target.alt;
  let path= "/images/"+name+".gif"
  event.target.src = path;
}

function onOut() {
  let name = event.target.alt;
  let path= "/images/"+name+".png"
  event.target.src = path;
}
