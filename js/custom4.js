$(function(){
    let baseline = -300;
    let pos1 = $("#box1").offset().top + baseline;
    let pos2 = $("#box2").offset().top + baseline;
    let pos3 = $("#box3").offset().top + baseline;
    let pos4 = $("#box4").offset().top + baseline;
    let pos5 = $("#box5").offset().top + baseline;

    $(window).on("scroll",function(){
        let scroll = $(this).scrollTop();

        if (scroll >= pos1 && scroll < pos2) {
            $("#navi li").removeClass("on");
            $("#navi li").eq(0).addClass("on");
            $("#wrap>div").removeClass("on");
            $("#wrap>div").eq(0).addClass("on");
        } else if (scroll >= pos2 && scroll < pos3) {
            $("#navi li").removeClass("on");
            $("#navi li").eq(1).addClass("on");
            $("#wrap>div").removeClass("on");
            $("#wrap>div").eq(1).addClass("on");
            
            $(".bar2").stop().animate({width:"87%"})
            $(".bar3").stop().animate({width:"90%"})
            $(".bar4").stop().animate({width:"89%"})
            $(".bar5").stop().animate({width:"82%"})
        } else if (scroll >= pos3 && scroll < pos4) {
            $("#navi li").removeClass("on");
            $("#navi li").eq(2).addClass("on");
            $("#wrap>div").removeClass("on");
            $("#wrap>div").eq(2).addClass("on");
        } else if (scroll >= pos4 && scroll < pos5) {
            $("#navi li").removeClass("on");
            $("#navi li").eq(3).addClass("on");
            $("#wrap>div").removeClass("on");
            $("#wrap>div").eq(3).addClass("on");
        } else {
            $("#navi li").removeClass("on");
            $("#navi li").eq(4).addClass("on");  
            $("#wrap>div").removeClass("on");
            $("#wrap>div").eq(4).addClass("on");
        };
    });
    $("#navi li").on("click",function(){
        let target = $(this).children("a").attr("href");
        //alert(target);
        let pos = $(target).offset().top;
        //alert(pos);
        $("html,body").stop().animate({scrollTop:pos},1000)
        
    });

    /*Project*/
    let total = $(".main1 li").length;
    //alert(total);
    let u = 0;

    start();

    function panel () {
        $(".main1 li").stop().fadeOut();
        $(".main1 li").eq(u).stop().fadeIn();
        $(".navi1 li").removeClass("on");
        $(".navi1 li").eq(u).addClass("on");
    }
    function start() {
        time = setInterval(function(){
            if ( u == total - 1 ) {
                u = 0;
            } else {
                u = u + 1;
            }
            panel();
        },2000);
    }

   
    $(".next").on("click",function(){
        clearInterval(time);
        if ( u == total - 1 ) {
            u = 0;
        } else {
            u ++;
        }
        panel();
        start();
    });

    $(".prev").on("click",function(){
        clearInterval(time);
        if ( u == 0 ) {
            u = total - 1;
        } else {
            u --;
        }
        panel();
        start();
        
    })
    $(".navi1 li").on("click", function () {
        clearInterval(time);
        u = $(this).index();
        panel();
        start();
    });

    /*포스터*/
    let i;
    $(".but li").on("click",function(){
        i = $(this).index();
        $(".but li").removeClass("on");
        $(".but li").eq(i).addClass("on");
        $(".bo li").fadeOut();
        $(".bo li").eq(i).fadeIn();
    });

    /*popup*/

    $(".btn1").on("click",function(){
        $(".popup1").show();
    });
    $(".popup1 .close-btn").on("click",function(){
        $(".popup1").hide();
    });

    $(".btn2").on("click",function(){
        $(".popup2").show();
    });
    $(".popup2 .close-btn").on("click",function(){
        $(".popup2").hide();
    });

    $(".btn3").on("click",function(){
        $(".popup3").show();
    });
    $(".popup3 .close-btn").on("click",function(){
        $(".popup3").hide();
    });

    $(".btn4").on("click",function(){
        $(".popup4").show();
    });
    $(".popup4 .close-btn").on("click",function(){
        $(".popup4").hide();
    });

    $(".btn5").on("click",function(){
        $(".popup5").show();
    });
    $(".popup5 .close-btn").on("click",function(){
        $(".popup5").hide();
    });

    $(".btn6").on("click",function(){
        $(".popup6").show();
    });
    $(".popup6 .close-btn").on("click",function(){
        $(".popup6").hide();
    });
});
