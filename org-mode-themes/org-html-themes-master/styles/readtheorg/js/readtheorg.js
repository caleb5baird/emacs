
$(function() {
    $('div.info:not(:has(p.admonition-title))')
        .prepend("<p class='admonition-title info'>Info</p>");

    $('div.question:not(:has(p.admonition-title))')
        .prepend("<p class='admonition-title question'>Question</p>");

    $('div.answer:not(:has(p.admonition-title))')
        .prepend("<p class='admonition-title answer'>Answer</p>");

    $('div.note:not(:has(p.admonition-title))')
        .prepend("<p class='admonition-title note'>Note</p>");

    $('.seealso:not(:has(p.admonition-title))')
        .prepend("<p class='admonition-title seealso'>See also</p>");

    $('.warning:not(:has(p.admonition-title))')
        .prepend("<p class='admonition-title warning'>Warning</p>");

    $('.caution:not(:has(p.admonition-title))')
        .prepend("<p class='admonition-title caution'>Caution</p>");

    $('.attention:not(:has(p.admonition-title))')
        .prepend("<p class='admonition-title attention'>Attention</p>");

    $('.tip:not(:has(p.admonition-title))')
        .prepend("<p class='admonition-title tip'>Tip</p>");

    $('.important:not(:has(p.admonition-title))')
        .prepend("<p class='admonition-title important'>Important</p>");

    $('.hint:not(:has(p.admonition-title))')
        .prepend("<p class='admonition-title hint'>Hint</p>");

    $('.error:not(:has(p.admonition-title))')
        .prepend("<p class='admonition-title error'>Error</p>");

    $('.danger:not(:has(p.admonition-title))')
        .prepend("<p class='admonition-title danger'>Danger</p>");
});

$( document ).ready(function() {

    // Shift nav in mobile when clicking the menu.
    $(document).on('click', "[data-toggle='wy-nav-top']", function() {
      $("[data-toggle='wy-nav-shift']").toggleClass("shift");
      $("[data-toggle='rst-versions']").toggleClass("shift");
    });
    // Close menu when you click a link.
    $(document).on('click', ".wy-menu-vertical .current ul li a", function() {
      $("[data-toggle='wy-nav-shift']").removeClass("shift");
      $("[data-toggle='rst-versions']").toggleClass("shift");
    });
    $(document).on('click', "[data-toggle='rst-current-version']", function() {
      $("[data-toggle='rst-versions']").toggleClass("shift-up");
    });
    // Make tables responsive
    $("table.docutils:not(.field-list)").wrap("<div class='wy-table-responsive'></div>");
});

$( document ).ready(function() {
    $('#text-table-of-contents ul').first().addClass('nav');
                                        // ScrollSpy also requires that we use
                                        // a Bootstrap nav component.
    $('body').scrollspy({target: '#text-table-of-contents'});

    // DON'T add sticky table headers (Fix issue #69?)
    // $('table').stickyTableHeaders();

    // set the height of tableOfContents
    var $postamble = $('#postamble');
    var $tableOfContents = $('#table-of-contents');
    $tableOfContents.css({paddingBottom: $postamble.outerHeight()});

    // add TOC button
    var toggleSidebar = $('<div id="toggle-sidebar"><a href="#table-of-contents"><h2>Table of Contents</h2></a></div>');
    $('#content:not(:has(div#toggle-sidebar))').prepend(toggleSidebar);

    // add close button when sidebar showed in mobile screen
    var closeBtn = $('<a class="close-sidebar" href="#">Close</a>');
    $('#table-of-contents h2:not(:has(a.close-sidebar))').append(closeBtn);
});

window.SphinxRtdTheme = (function (jquery) {
    var stickyNav = (function () {
        var navBar,
            win,
            stickyNavCssClass = 'stickynav',
            applyStickNav = function () {
                if (navBar.height() <= win.height()) {
                    navBar.addClass(stickyNavCssClass);
                } else {
                    navBar.removeClass(stickyNavCssClass);
                }
            },
            enable = function () {
                applyStickNav();
                win.on('resize', applyStickNav);
            },
            init = function () {
                navBar = jquery('nav.wy-nav-side:first');
                win    = jquery(window);
            };
        jquery(init);
        return {enable : enable};
    }());
    return {StickyNav : stickyNav};
}($));


$(document).ready(()=> {
    $('#content:has(div#table-of-contents)').addClass('with-table-of-contents');
})
