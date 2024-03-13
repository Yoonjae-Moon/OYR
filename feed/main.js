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