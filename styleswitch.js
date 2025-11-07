/* Style Switcher */

window.console = window.console || (function($){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();

$(document).ready(function($){

var styleswitcherstr = ' \
	<h2>Color Switcher <a href="#"><img src="images/switcher.png"/></a></h2> \
    <div class="content"> \
		\
    <div class="switcher-box"> \
		<a id="default" class="styleswitch color"></a> \
		<a id="orange" class="styleswitch color"></a> \
		<a id="purple" class="styleswitch color"></a> \
		<a id="red" class="styleswitch color"></a> \
        <a id="yellow" class="styleswitch color"></a> \
        <a id="blue" class="styleswitch color"></a> \
        <a id="bridge" class="styleswitch color"></a> \
        <a id="cyan" class="styleswitch color"></a> \
        <a id="darkred" class="styleswitch color"></a> \
        <a id="green" class="styleswitch color"></a> \
        <a id="liteblue" class="styleswitch color"></a> \
        <a id="olive" class="styleswitch color"></a> \
    </div><!-- End switcher-box --> \
    <div class="clear"></div> \
    </div><!-- End content --> \
	';

$(".switcher").prepend( styleswitcherstr );

});


/* Skins Style */
$(document).ready(function($){

    var cookieName = 'default';

    function changeLayout(layout) {
    $.cookie(cookieName, layout);
    $('head link[data-name=skins]').attr('href', 'css/skins/' + layout + '.css');
    }
    if( $.cookie(cookieName)) {
    changeLayout($.cookie(cookieName));
    }
    $("#default").click( function(){ $
    changeLayout('default');
    });
    $("#orange").click( function(){ $
    changeLayout('orange');
    });
    $("#purple").click( function(){ $
    changeLayout('purple');
    });
    $("#red").click( function(){ $
    changeLayout('red');
    });
    $("#yellow").click( function(){ $
    changeLayout('yellow');
    });
    $("#blue").click( function(){ $
    changeLayout('blue');
    });
    $("#bridge").click( function(){ $
    changeLayout('bridge');
    });
    $("#cyan").click( function(){ $
    changeLayout('cyan');
    });
    $("#darkred").click( function(){ $
    changeLayout('darkred');
    });
    $("#green").click( function(){ $
    changeLayout('green');
    });
    $("#liteblue").click( function(){ $
    changeLayout('liteblue');
    });
    $("#olive").click( function(){ $
    changeLayout('olive');
    });


});


/* Reset Switcher */
$(document).ready(function(){

    // Style Switcher
    $('.switcher').animate({
        left: '-255px'
    });

    $('.switcher h2 a').click(function(e){
        e.preventDefault();
        var div = $('.switcher');
        console.log(div.css('left'));
        if (div.css('left') === '-255px') {
            $('.switcher').animate({
              left: '0px'
            });
        } else {
            $('.switcher').animate({
              left: '-255px'
            });
        }
    })
});
