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
});

const initialWidth = window.innerWidth;
const initialHeight = window.innerHeight;
window.addEventListener('resize', () => {
  if (window.innerWidth !== initialWidth || window.innerHeight !== initialHeight) {
    window.location.reload();
  }
});
