// addEventListner 활용
var heartIcon = document.getElementById('heartIcon');

heartIcon.addEventListener('click', function(){
    if (heartIcon.classList.contains('fa-regular')){
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('redHeart', 'fa-solid');
    } else{
        heartIcon.classList.remove('redHeart', 'fa-solid');
        heartIcon.classList.add('fa-regular');
    }
    
});

// modal 열기, onclick 사용
var modal = document.getElementById("myModal");
var icon = document.getElementById("myIcon");
var span = document.getElementById("close");

icon.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}