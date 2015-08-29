'use strict';

// $("#first").attr('id', 'Second');

$(document).ready(function(){

$('button').on('click', function(){
    $(".input").text(' ');
    var displayed = $('.result').val();
    $().text('');

    if (displayed === null) {
      console.log('displayed is: '+displayed);
    }

    var input =  $(".input").val();
    console.log(input-1);
    var sum = displayed + input;
    $(".result").text(sum);

  });

});
