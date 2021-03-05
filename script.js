function onHover(){
  let image = document.getElementById('icon');
  let title = document.getElementById('title_content');
  image.src = '/images/projects_explosion.gif';
  title.style.color =  '#ffc107';
}

function onOut(){
  let image = document.getElementById('icon');
  let title = document.getElementById('title_content');
  image.src = '/images/projects_icon.png';
  title.style.color = 'white';
}
