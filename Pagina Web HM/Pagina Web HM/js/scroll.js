// scroll.js - Versión mínima (como la actual)
$(document).ready(function() {
  $('.navbar-nav .nav-link').on('click', function(e) {
    e.preventDefault();
    const targetClass = {
      "Inicio": "slider_section",
      "Nosotros": "about_section", 
      "Servicios": "service_section",
      "Contáctanos": "contact-footer"
    }[$(this).text().trim().replace(' (current)', '')];
    
    if (targetClass) {
      const targetPos = $(`.${targetClass}`).offset().top - ($('.custom_nav-container').outerHeight() || 80);
      $('html, body').animate({scrollTop: targetPos}, 800);
      
      $('.nav-item').removeClass('active');
      $(this).parent().addClass('active');
    }
  });
});