$('.options li:not(.active)').addClass('hidden');
$('.options li.active').on('click', function() {
  $('options li').toggleClass('hidden');
});
