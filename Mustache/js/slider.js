//automatically switch content of carousal every 3 seconds below the header
$(window).load(function() {
    var cnt = 0,
    $texts = $('.textContent');

    function slide() {
        if (cnt >= $texts.length) cnt = 0;
        $('#textMessage').html($texts.get(cnt++));
        $('#textMessage')
          .fadeIn('slow').animate({
            opacity: 1.0
          }, 3000).fadeOut('slow',
            function() {
              return slide()
            }
          );
      }

    slide()
  });