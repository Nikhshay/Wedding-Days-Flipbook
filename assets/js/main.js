$(window).ready(function() {
    if (window.innerWidth > 768) { 
        $('#magazine').turn({
            display: 'double',
            acceleration: true,
            gradients: !$.isTouch,
            elevation: 50,
            when: {
                turned: function(e, page) {}
            }
        });

        $(window).on('keydown', function(e) {
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
        special5.addEventListener('click', function() {
            alert("Credit of this website creation goes to the Awesome human by the name of \n\n NIKHSHAY \n\n;)");
        });
    }
});

const initialWidth = window.innerWidth;

window.addEventListener('resize', () => {
  if (Math.abs(window.innerWidth - initialWidth) > 50) {
    // Only reload if WIDTH changes significantly
    window.location.reload();
  }
});

