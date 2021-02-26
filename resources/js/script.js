/* $ е за начало на код, който касае jquery, тя ще промени всичко по css-a */
/*
Here is the response from the Backets Support team. Това решава проблема с отчитането на jquery реквизитите като грешка в .js файла

JSLint is a static code analysis tool used in software development for checking if JavaScript source code complies with coding rules. You may want to address them for better compliance with JavaScript coding standards.
However, if you are sure that your code doesn't contain other errors and you don't want to be bothered by linting errors, you can disable JSLint by:-
1. Click on  Debug > Open Preferences File .
2. Disable JSLint by adding the following line as preference to the brackets.json preferences file (opened in right pane)-  "linting.enabled": false,  . In case you add this preference as the last line, make sure you don't add the comma at the last.
Now, you should not be bothered by Linting errors. Later, if you want to re-enable JSLint, you can either set the linting.enabled preference to true or just delete the preference to apply the default linting preference.

Now that I understand a bit better where to look. Here is the relevant Brackets manual entry:
https://github.com/adobe/brackets/wiki/Preferences-System

?????  */



$(document).ready(function () {
    /* като кликнем в/у елемент с характеристики h1 ще се случи функцията, която сме дефинирали тук
        
        var waypoints = $('#handler-first').waypoint(function(direction) {
      notify(this.element.id + ' hit 25% from top of window') 
    },{
      offset: '25%'
    })  - това ще помогне навигацията а изчезва на hero page и да се появява на другите
    */




    /* Това е за sticky навигацията */
    $(".js--section-features").waypoint(function (direction /* отчита на къде скролва юзъра*/ ) {
        if (direction == "down") {

            $('nav').addClass('sticky'); /* след това махаме този клас от nav в HTML-a */


        } else {

            $('nav').removeClass('sticky');

        }

    }, {
        offset: '60px;' /* показва nav-бара 60 пиксела по-рано преди да навлезе в section */
    });


    /* Това е за главния бутон */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1500);
    }); /* това означава, че имаме анимация, която се придвижва до началото на section-plans със скорост от 1.5 сек */
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });


    /* Навигация */


    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything. Кодът е от тук https://css-tricks.com/snippets/jquery/smooth-scrolling/   Указва на връзка къде да заведе. за да стане- към № прибавяме име, и създаваме на местата, на които ще се ходи, id със същото име.
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /*  Aнимации */

    $('.js--wp-1').waypoint(function (direction) {

        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        /* за този ефект трябва да се направи промяна и в css-а и в HTML-a, в нова под точка Анимации под футъра и в кода*/
    }, {
        offset: '50%' /* показва анимацията по-рано*/

    });

    $('.js--wp-2').waypoint(function (direction) {

        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
        /* за този ефект трябва да се направи промяна и в css-а, в нова под точка Анимации под футъра */
    }, {
        offset: '50%' /* показва анимацията по-рано*/

    });

    $('.js--wp-3').waypoint(function (direction) {

        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
        /* за този ефект трябва да се направи промяна и в css-а, в нова под точка Анимации под футъра */
    }, {
        offset: '50%' /* показва анимацията по-рано*/

    });

    $('.js--wp-4').waypoint(function (direction) {

        $('.js--wp-4').addClass('animate__animated animate__pulse');
        /* за този ефект трябва да се направи промяна и в css-а, в нова под точка Анимации под футъра */
    }, {
        offset: '50%' /* показва анимацията по-рано от зададения момент*/

    });



    /* Мобилна навигация*/


    /* $('.js--nav-icon').click(function () {
         var nav = $('.js--main-nav');
         var icon = $('.js--nav-icon ion icon'); от тук започваме промяната на бутоните при натиснато меню 
         nav.slideToggle(200); /* за колко време да отвори менюто */


    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        nav.slideToggle(200);

        /* if (icon.hasClass('hide')) {
             icon.toggleClass('hide')
         }*/


        if (icon.attr("name") === 'logo-firebase') {
            icon.attr("name", 'close-outline');
        } else {
            icon.attr("name", 'logo-firebase');
        }


    });


});
