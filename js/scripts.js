$(document).ready(function() {
  $('input').click(function() {

  var animal = $("input:radio[name=animal]:checked").val();
  if (animal === 'turtle') {
    $('#turtles').show();
    $('#snakes').hide();
    $('#insects').hide();
      }
  else if (animal ==='snake') {
    $('#snakes').show();
    $('#turtles').hide();
    $('#insects').hide();
  }
  else {
    $('#insects').show();
    $('#turtles').hide();
    $('#snakes').hide();
  }
});
});
