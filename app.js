// Savoy Gallery - Application Logic

// Header interactions will go here

// Future: render home screen dynamic content here

// Future: menu screen rendering and filters
const menuScreen = document.getElementById('screen-menu');
const menuCategoryButtons = document.querySelectorAll('.menu-categories button');

menuCategoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log("Category selected:", btn.dataset.cat);
    
    // Remove active class from all category buttons
    menuCategoryButtons.forEach(b => b.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
  });
});

// Bottom navigation handler
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#bottom-nav button').forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('Tab clicked:', btn.dataset.tab);
      
      // Remove active class from all buttons
      document.querySelectorAll('#bottom-nav button').forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
    });
  });
});
