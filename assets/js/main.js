$(window).ready(function() {
    $('#magazine').turn({
                        display: 'double',
                        acceleration: true,
                        gradients: !$.isTouch,
                        elevation:50,
                        when: {
                            turned: function(e, page) {
                                /*console.log('Current view: ', $(this).turn('view'));*/
                            }
                        }
                    });
});


$(window).on('keydown', function(e) {
    // Check if the pressed key is the left or right arrow key
    if (e.keyCode === 37) {
        $('#magazine').turn('previous');
        // Prevent the default action of the left arrow key (scrolling the page)
        e.preventDefault();
    } else if (e.keyCode === 39) {
        $('#magazine').turn('next');
        // Prevent the default action of the right arrow key (scrolling the page)
        e.preventDefault();
    }
});

const initialWidth = window.innerWidth;
const initialHeight = window.innerHeight;

window.addEventListener('resize', () => {
  if (window.innerWidth !== initialWidth || window.innerHeight !== initialHeight) {
    window.location.reload();
  }
});
