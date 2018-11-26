
// --pop-up--
$(document).ready(function () {
  $('.main__chart-table-booking').click(function (event) {
    event.preventDefault();
    var tds = $(this).siblings('div');
    var row = [];
    $.each(tds, function (i, c) {
      row.push($(c).text());
    });
    $('#goal').text(row.join(' - '));
    $('#overlay').fadeIn(400,
      function () {
        $('#modal_form').css('display', 'block').animate({
          opacity: 1,
          top: '50%'
        }, 200);
      });
    $('#modal_close, #overlay, #btn').click(function () {
      $('#modal_form')
        .animate({
            opacity: 0,
            top: '45%'
          }, 200,
          function () {
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
          }
        );
    });
  });
});

var countClick = 0;

$(document).ready(function () {
  $('h2').click(function (event) {

    $('#flight, #flight1, #flight2, #flight3, #flight4').fadeIn('slow').css('display', 'flex');
    if (countClick < 1) {
      $('.main__chart-button a').fadeIn(3000).css('display', 'flex');
    }
    countClick = 1;
  });
});

// --flight-chart--
$(document).ready(function () {
  $('.main__chart-button a').click(function (event) {
    event.preventDefault();
    countClick++;
    if (countClick < 3) {
      $('#flight5, #flight6, #flight7, #flight8, #flight9').fadeIn('slow').css('display', 'flex');
    } else {
      $('#flight10, #flight11, #flight12, #flight13, #flight14').fadeIn('slow').css('display', 'flex');
      $('.main__chart-button a').fadeOut(3000);
      countClick = 1;
    };
  });
});

$(document).ready(function () {
  $('#charters').click(function (event) {
    event.preventDefault();
    $('#menuLinks').fadeToggle('slow').css('display', 'flex');
  });
});

$(document).ready(function () {
  $('#emptyLegs').click(function (event) {
    event.preventDefault();
    $('.header__description, .main__banner-items, .main__chart ').fadeToggle('slow').css('display', 'flex');
    $('.header__animation').fadeToggle('slow').css('display', 'flex');
  });
});


$(document).ready(function () {
  $('#charters1').click(function (event) {
    event.preventDefault();
    $('#subMenuTablet').fadeToggle('slow').css('display', 'block');
  });
});

$(document).ready(function () {
  $('#emptyLegs1').click(function (event) {
    event.preventDefault();
    $('.header__description, .main__banner-items, .main__chart ').fadeToggle('slow').css('display', 'flex');
    $('.header__animation').fadeToggle('slow').css('display', 'flex');
  });
});
