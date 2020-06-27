$(document).ready(function() {

    //progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#2d84e7',
        strokeWidth: 10,
        duration: 3000,
        from: { color: '#ff0000' },
        to: { color: '#2d84e7' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 150);

            circle.setText(value);

        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#2d84e7',
        strokeWidth: 10,
        duration: 3500,
        from: { color: '#ff0000' },
        to: { color: '#2d84e7' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 200);

            circle.setText(value);

        }

    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#2d84e7',
        strokeWidth: 10,
        duration: 4000,
        from: { color: '#ff0000' },
        to: { color: '#2d84e7' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 10);

            circle.setText(value);

        }

    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#2d84e7',
        strokeWidth: 10,
        duration: 4500,
        from: { color: '#ff0000' },
        to: { color: '#2d84e7' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5240);

            circle.setText(value);

        }

    });

    // incio do loder quando chegar no elemento

    let dateAreaOffset = $("#data-area").offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if (scroll > (dateAreaOffset.top - 800) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;

        };
    });

    // paralax

    setTimeout(function() {

        $('#data-area').parallax({ imageSrc: 'img/fundo.jpg' });
        $('#apply-area').parallax({ imageSrc: 'img/company.jpg' });

    }, 250);

    // filtro do portifolho

    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box')

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if (type == 'deck-btn') {
            eachBoxes('deck', boxes)
        } else if (type == 'bedroom-dtn') {
            eachBoxes('bedroom', boxes)
        } else if (type == 'living-room-btn') {
            eachBoxes('living-room', boxes)
        } else if (type == 'kitchen-btn') {
            eachBoxes('kitchen', boxes)
        } else {
            eachBoxes('all', boxes)
        }

    });

    function eachBoxes(type, boxes) {

        if (type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if (!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }

    // scroll para seleção

    //selecianado a barra de navegação
    let navBtn = $('.nav-item');

    // varievel referente as seções
    let bannerSection = $('main');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portifolioSection = $('#portifolio-area');
    let contactrSection = $('#contact-area');

    // mapeamento de um click na barra de nevegação e essa variavel vai dizer qual sectiom ir

    // a variavel que diz pra onde navegar, eva vai começãr vazia
    let scrollTo = '';

    // quando clicar em um iten da nav bar, utilizando o id do botão, a função ira dizer qual section ir
    // evento de clique
    $(navBtn).click(function() {
        //descobrir id do botao clicado
        let btnId = $(this).attr('id');
        // ver o id clicado
        console.log(btnId);

        // seção de if qu vai mapear pr onde vai o botão
        if (btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if (btnId == 'services-menu') {
            scrollTo = servicesSection;
        } else if (btnId == 'team-menu') {
            scrollTo = teamSection;
        } else if (btnId == 'portifolho-menu') {
            scrollTo = portifolioSection;
        } else if (btnId == 'contact-menu') {
            scrollTo = contactrSection;
        } else {
            scrollTo = bannerSection;
        }

        // animação de loragem( esse evento esta atrelado ao evento de click)
        $([document.documentElement, document.body]).animate({
            // tamnaos dos espaços 
            scrollTop: $(scrollTo).offset().top - 70
                //tempo de duração em mille/segundo
        }, 1500);
    });



});