// Animate smooth scroll

// grab on the id of view-work of our button
$('#view-work').on('click', function(){
  const images = $('#images').position().top;

  $('html, body').animate(
    {
    scrollTop: images
  }, 
  900
);
});

