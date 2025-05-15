$(window).ready(function () {
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
        const savedPage = parseInt(localStorage.getItem('currentPage'), 10);

        $('#magazine').turn({
            display: 'double',
            acceleration: true,
            gradients: !$.isTouch,
            elevation: 50,
            when: {
                turned: function (e, page) {
                    localStorage.setItem('currentPage', page);
                }
            }
        });

        // Go to saved page after turn.js is initialized
        if (savedPage && !isNaN(savedPage)) {
            $('#magazine').turn('page', savedPage);
        }

        $(window).on('keydown', function (e) {
            if (e.keyCode === 37) {
                $('#magazine').turn('previous');
                e.preventDefault();
            } else if (e.keyCode === 39) {
                $('#magazine').turn('next');
                e.preventDefault();
            }
        });

    } else {
        // Mobile view
        $('#magazine').addClass('simple-scroll');
        $('html, body').css({
            'overflow-y': 'auto', // Enable vertical scrolling
            'overflow-x': 'hidden',
            'height': 'auto'
        });
    }

    const special5 = document.getElementById('specialCredit');
    if (special5) {
        special5.addEventListener('click', function () {
            alert("Credit of this website creation goes to the Awesome human by the name of \n\n NIKHSHAY \n\n;)");
        });
    }
});


// ✅ Improved resize logic (avoids reloading during fullscreen video)
let lastWidth = window.innerWidth;
let resizeTimeout;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const currentWidth = window.innerWidth;

        const isFullscreen = !!(
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        );

        if (!isFullscreen && Math.abs(currentWidth - lastWidth) > 100) {
            localStorage.setItem('currentPage', $('#magazine').turn('page'));
            window.location.reload();
        }

        lastWidth = currentWidth;
    }, 300);
});
