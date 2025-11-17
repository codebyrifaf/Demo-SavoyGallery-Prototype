// Savoy Gallery - Application Logic

// Header interactions will go here

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
