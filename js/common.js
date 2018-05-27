$('#order-form').on('submit', submitForm);

  function submitForm (e) {
    console.log('+');
    e.preventDefault();

    var form = $(e.target),
        data = form.serialize(),
        type = form.attr('method'),
        url = form.attr('action');


    var request = $.ajax({
       type : type,
       url : url,
       data : data,
       dataType : 'JSON'
    });

    request.done(function(massage) {
      var mes = massage.mes,
          status = massage.status;

      if (status === 'OK') {
          $('.formPage').addClass('is-active');
      } else{
          form.append('<p class="error">' + mes + '</p>');
      }
  }).fail(function(jqXHR, textStatus) {
      alert("Request failed: " + textStatus);
  });

};

  var ajaxForm = function (form) {
      var data = form.serialize(),
          url = form.attr('action');

      return $.ajax({
          type: 'POST',
          url: url,
          dataType : 'JSON',
          data: data
      })
  };

  $('.order-link').last().on('click', function(e){
    e.preventDefault();
    //console.log(e);
    var orderLinkCls = e.target;
    if(e.target) {
      $('.formPage').removeClass('is-active');
    }
  });
