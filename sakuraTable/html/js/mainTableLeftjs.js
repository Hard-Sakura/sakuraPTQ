$(document).ready(function () {
    //菜单特效
    // $(".menuTable ul li").on({
    //     mouseover: function () {
    //         //鼠标移入回调
    //         $(this).stop().animate({ top: "5px", "font-size": "21px" }, 500);
    //     },
    //     mouseout: function () {
    //         //鼠标移出回调
    //         $(this).stop().animate({ top: "0px", "font-size": "16px" }, 200);
    //     }
    // });

    //头像特效
    // $(".headBigBox").on({
    //     mouseover: function () {

    //     },
    //     mouseout: function () {

    //     }
    // });

    // 头像框点击
    $(".headPictureBox").click(function () {
        var dis = $(".bigHPBox").css("display");
        if (dis == "none") {
            $(".sakuraXZBox").hide();
            $(".bigHPBox").show();
            $(".headBigBox").stop().animate({ top: "3%" }, 500, function () {
                $(".bigHPBox").addClass("rotate360");
                $(".bigHPBox").stop().animate({ left: "225px" }, 200, function () {
                    $(".bigHPPicture").stop().animate({ width: "1080px" }, 2000, function () {
                        $(".infoBAC").show();
                    });
                });
            });
        } else {
            $(".infoBAC").hide();
            $(".bigHPPicture").stop().animate({ width: "100px" }, 1000, function () {
                $(".bigHPBox").removeClass("rotate360");
                $(".bigHPBox").stop().animate({ left: "19%" }, 200, function () {
                    $(".headBigBox").stop().animate({ top: "5%" }, 100, function () {
                        $(".bigHPBox").hide();
                        $(".sakuraXZBox").show();
                    });
                });
            });
        }
    });

    // 昵称点击事件
    $(".nikeNameBox").click(function () {
        $(".bigHPBox").show();
        $(".sakuraXZBox").hide();
        $(".headBigBox").stop().animate({ top: "3%" }, 500, function () {
            $(".bigHPBox").stop().animate({ left: "225px" }, 200, function () {
                $(".bigHPPicture").stop().animate({ width: "1080px" }, 2000, function () {
                    $(".infoBAC").show();
                });
            });
        });
    });

    // 收起点击事件
    $(".closeUp").click(function () {
        $(".infoBAC").hide();
        $(".bigHPPicture").stop().animate({ width: "100px" }, 1000, function () {
            $(".bigHPBox").stop().animate({ left: "19%" }, 200, function () {
                $(".headBigBox").stop().animate({ top: "3%" }, 100, function () {
                    $(".bigHPBox").hide();
                    $(".sakuraXZBox").show();
                });
            });
        });
    });

    //昵称特效
    $(".nikeNameBox").on({
        mouseover: function () {
            //鼠标移入回调
            document.getElementById("nikeName").style.color = '#FFE9E9';
        },
        mouseout: function () {
            //鼠标移出回调
            document.getElementById("nikeName").style.color = '#FFAAAA';
        }
    });

    //页面加载时获取菜单栏高度
    autodivheight();
})


//====tree的自适应高度start=====================
function autodivheight() { //函数：获取尺寸   
    //获取浏览器窗口高度  
    var winHeight = 0;
    if (window.innerHeight){
        winHeight = window.innerHeight;
    }
    else if ((document.body) && (document.body.clientHeight)){
        winHeight = document.body.clientHeight;
    }
    //通过深入Document内部对body进行检测，获取浏览器窗口高度  
    if (document.documentElement && document.documentElement.clientHeight){
        winHeight = document.documentElement.clientHeight;
    }
    //DIV高度为浏览器窗口的高度
    document.getElementById("tree").style.height = winHeight + "px";

    //  alert($("#tree").height() + ">"+winHeight);
    //  alert($("#tree").height()>winHeight);
    //当tree的高度超过屏幕高度的时候，设置滚动条  visible   auto
    // if ($("#tree").height() > winHeight) {
    //      $("#tree").css({"overflow": "auto"});
    //      console.log($("#tree").height()+"shang"+winHeight)
    //      console.log($("#tree").height() >= winHeight)
    // } else { 
    //      $("#tree").css({"overflow": "visible"});
    //      console.log($("#tree").height()+"xia"+winHeight)
    //      console.log($("#tree").height() >= winHeight)
    // }

    if (winHeight > 700) {
        document.getElementById("pliceText").style.display = 'block';
    } else {
        document.getElementById("pliceText").style.display = 'none';
    }
}
window.onresize = autodivheight;  //浏览器窗口发生变化时同时调用

// 菜单显示隐藏
$(".sakuraXZ").click(function () {
    var dis = $(".menuTable").css("opacity");
    if (dis == "0") {
        $(".sectionLeft").stop().animate({ left: "0px" }, 1000, function () {
            // $(".menu1").stop().animate({ left: "0px" }, 300);
            $(".menu1").addClass("menu1On");
            $(".menu2").addClass("menu2On");
            $(".menuTable").stop().animate({ opacity: 1 }, 300);
        });
        $(".waifu").stop().animate({ left:"300px"}, 1000);
    } else {
        $(".sectionLeft").stop().animate({ left: "-300px" }, 1000, function () {
            $(".menu1").removeClass("menu1On");
            $(".menu2").removeClass("menu2On");
            $(".menuTable").stop().animate({ opacity: 0 }, 0);
            $(".menu1").stop().animate({ left: "-100px" }, 0);
            $(".menu2").stop().animate({ left: "100px" }, 0);
        });
        $(".waifu").stop().animate({ left:"0px"}, 1000);
    }
});

// 个人信息文本框点击无边框
$(".userInfoUl li input").click(function () {
    $(this).css({"border":"none"});
});