function openHamburger() {
    let header_mobile = $('.header__mobile');
    let header_mobile_background = $('.header__mobile-background');
    let header_hamburger_span = $('.header__hamburger > span');

    if (header_mobile.hasClass('header__mobile--active')) {
        header_mobile.removeClass('header__mobile--active');
        header_mobile_background.removeClass('header__mobile-background--active');
        header_hamburger_span.removeClass('cross');
        header_hamburger_span.css('background-color', '#0052cc'); // CHANGE IT TO THE REAL COLOR!
    } else {
        header_mobile.addClass('header__mobile--active');
        header_mobile_background.addClass('header__mobile-background--active');
        header_hamburger_span.css("background-color", 'transparent');
        header_hamburger_span.toggleClass('cross');
    }

    let dropdown_mobile = $('.dropdown-mobile');
    if (dropdown_mobile.hasClass("dropdown-mobile--activated")) {
        dropdown_mobile.removeClass("dropdown-mobile--activated");
    }

    let portfolio_arrow = $('.icon-portfolio-arrow');
    if (portfolio_arrow.hasClass("activated")) {
        portfolio_arrow.removeClass("activated");
    }
}

function openPortfolioSubmenu() {
    let dropdown_mobile = $('.dropdown-mobile');
    let portfolio_arrow = $('.icon-portfolio-arrow');

    if (dropdown_mobile.css("display") === "flex") {
        dropdown_mobile.removeClass("dropdown-mobile--activated");
        portfolio_arrow.removeClass('activated');
    } else {
        dropdown_mobile.addClass("dropdown-mobile--activated").animate({ opacity: 1 }, 750);
        portfolio_arrow.addClass('activated');
    }
}