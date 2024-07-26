function toggleMenu(){
  const menu = document.querySelector('.menu-links');
  const menuIcon = document.querySelector('.hamburger-icon');
  menu.classList.toggle("open");
  menuIcon.classList.toggle("open");
}

var typed = new Typed('.profile-jobs-hobbies',{
  strings: ["Software Engineer", "Data Analyst", "Dog Lover", "Student"],
  typeSpeed: 150, 
  backSpeed: 150, 
  loop: true 
});