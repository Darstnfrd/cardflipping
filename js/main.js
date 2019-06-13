var main = function() {
        $('#home').click(function() {

        if($(this).hasClass('active')){

        }
        else{
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
            $('.card-main').slideUp();
            $("#card-home").slideToggle('slow');
        }
        });

        $('#features').click(function() {

        if($(this).hasClass('active')){

        }
        else{
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
            $('.card-main').slideUp();
            $("#card-features").slideToggle('slow');
        }
        });

        $('#pricing').click(function() {

        if($(this).hasClass('active')){

        }
        else{
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
            $('.card-main').slideUp();
            $("#card-pricing").slideToggle('slow');
        }    
        });     

        $('#Modal').modal(options);
        $('#scrollspy-body').scrollspy({target:'#sec-nav'});
        
        $('[data-spy="scroll"]').each(function () {
          var $spy = $(this).scrollspy('refresh');
        });

      };
      $(document).ready(main);