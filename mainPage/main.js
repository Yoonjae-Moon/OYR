document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    const images = ['/photo1.png', '/photo2.png', '/photo3.png', '/photo4.png'];
    const slideshowElement = document.getElementById('slideshow');
  
    function changeImage() {
      slideshowElement.style.opacity = 0.5;
  
      setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        slideshowElement.src = images[currentImageIndex];
  
        slideshowElement.style.opacity = 1;
      }, 1000);
    }
  
    window.onload = () => { slideshowElement.style.opacity = 1; };
  
    setInterval(changeImage, 4000);
  });

  function handleLoginClick(){
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    validateMember(userId, password);
  }
 
const validateMember = (id , password) => {
		
  if(id === "OYR2024" && password === "1234"){
    window.location.href = '/feed';
    // main 페이지로 넘어감
  } else{
    alert('잘못된 아이디 또는 비밀번호입니다.');
    // 오류 메시지
  }
}
  