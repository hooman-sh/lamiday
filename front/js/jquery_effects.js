/**
 * Created by hooman on 10/9/16.
 */


$(document).ready(function(){


    $("[data-toggle=popover]").popover();
    $("[data-toggle='tooltip']").tooltip();

    var flag=false;
    $('.leftcollapse').click(function(){
        if(flag === false) {
            $('#collapsed').animate({
                width:'+=193px'
            }, 1000,'linear',function(){
                $('.khaste').fadeToggle(100);
            });

            flag=true;


        }
        else if(flag===true) {
            $('#collapsed').animate({
                width:'-=193px'
            },1000,'linear');

            flag = false;
            $('.khaste').fadeToggle('fast','linear');

        }
    });

    $(".job").mouseenter(function(){
        $(this).children('div').fadeIn(200);
    }).mouseleave(function(){
        $(this).children('div').fadeOut(200);
    });

    $('.baner').animate({
        width:'+=100%'
    },1500,'linear', function () {
            $(".P1").fadeIn('slow',function () {
                $(".P2").fadeIn('slow');
            });
    });

    $('#help1').click(function() {
        $('.lamiday-help').fadeOut('slow', function () {
            $('#big1').fadeIn('slow');
        });
    });
    $('#help2').click(function() {
        $('.lamiday-help').fadeOut('slow', function () {
            $('#big2').fadeIn('slow');
        });
    });
    $('#help3').click(function() {
        $('.lamiday-help').fadeOut('slow', function () {
            $('#big3').fadeIn('slow');
        });
    });
    $('.help-back').click(function(){
        $('.help-big').fadeOut('slow',function(){
            $('.lamiday-help').delay(600).fadeIn('slide');
        });

    });
    // $('#left-job').hover(function () {
    //     $('.pix2')
    //         .transition({zIndex:'+100'},'fast','ease')
    //     .transition({opacity:0.8},100)
    //         .transition({backgroundColor:"grey"},100);
    // },function(){
    //     $('.pix2')
    //         .transition({backgroundColor:"inherit"},100)
    //         .transition({opacity:1},100)
    //         .transition({zIndex:'-1'},100);
    // });
    // $('#right-job').hover(function () {
    //     $('.pix1')
    //         .transition({zIndex:'+100'},'fast','ease')
    //     .transition({opacity:0.8},100)
    //         .transition({backgroundColor:"grey"},100);
    // },function(){
    //     $('.pix1')
    //         .transition({backgroundColor:"inherit"},100)
    //         .transition({opacity:1},100)
    //         .transition({zIndex:'-1'},100);
    // });
    var $clickedelem=null;
    $('.link-detail').click(function(){
        if($clickedelem != null && $clickedelem!== $(this)) {
            $clickedelem.transition({
                borderRightStyle: 'none'
            });
            $clickedelem.children('p').transition({
                color: 'white'
            });
            $clickedelem.children('span').transition({
                color: 'white'
            });
        }
       $(this).transition({
           borderRightStyle: 'solid',
           borderRightWidth: 'thick',
           borderRightColor: '#58D2D2'
       });
        $(this).children('p').transition({
            color:'#58D2D2'
        });
        $(this).children('span').transition({
            color:'#58D2D2'
        });
        $clickedelem = $(this);
    });

    $('.paid-img').hover(function(){
        $(this).transition({
            scale:1.5,
        },'easeInCirc');
    },function () {
        $(this).transition({
            scale:1,
        },'easeOutCirc');
    });

    $('#myTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })


});

AOS.init({
    duration:1000,
    easing:'ease-in-out'
});

