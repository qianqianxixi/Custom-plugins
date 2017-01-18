  i = 0;
    count = 0;
var gameTime = 10;
//count down
// var showTime = function(){
//     totle = totle - 1;
//     console.log(totle);
//     if (totle == 0) {
//         // clearInterval(s);
//         clearInterval(t1);
//      } 
// };

var start1 = function(){
    
    i = i + 360/(gameTime);  //旋转的角度  90s 为 0.4  60s为0.6
    count = count + 1;
    // console.log(i);
    if(count <= (gameTime/2)){  // 一半的角度  90s 为 450
        $(".pie1").css("-o-transform","rotate(" + i + "deg)");
        $(".pie1").css("-moz-transform","rotate(" + i + "deg)");
        $(".pie1").css("-webkit-transform","rotate(" + i + "deg)");
    }else{
        $(".pie2").css("backgroundColor", "#d13c36");
        $(".pie2").css("-o-transform","rotate(" + i + "deg)");
        $(".pie2").css("-moz-transform","rotate(" + i + "deg)");
        $(".pie2").css("-webkit-transform","rotate(" + i + "deg)");
    }
};


  
    // MM = 0;
    // SS = gameTime;
    // MS = 0;
    // totle = (MM + 1) * gameTime * 10;
    // d = 180 * (MM + 1);
    // MM = "0" + MM;
    // showTime();
    // s = setInterval("showTime()", 100);

    // start1();
    t1 = setInterval("start1()", 1000);