document.addEventListener("DOMContentLoaded", function(){

  var memeForm = document.getElementById("meme-form");
  var listGallery = document.querySelector(".gallery");
  var generateBtn = document.getElementById('generate-btn');
  var topTextInput = document.getElementById('top-text');
  var bottomTextInput = document.getElementById('bottom-text');

  generateBtn.onclick = function(e){
    e.preventDefault();
    
    var imageInput = document.getElementById('image').value,
    src = imageInput,
    img = document.createElement('img');
    img.src = src;
  
    var topTextDiv = document.createElement('div');
    topTextDiv.classList.add("text", "top");
    topTextDiv.innerText = topTextInput.value;

    var bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add("text", "bottom");
    bottomTextDiv.innerText = bottomTextInput.value;

    var memeList = document.createElement('li');
    memeList.classList.add("memes");

    listGallery.appendChild(memeList);
    memeList.appendChild(img);
    memeList.appendChild(topTextDiv);
    memeList.appendChild(bottomTextDiv);

    memeForm.reset();

    function remove(e){
      e.target.parentNode.remove();
    }

    listGallery.addEventListener('click', remove, false);
  }});