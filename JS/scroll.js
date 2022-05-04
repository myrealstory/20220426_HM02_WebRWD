// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//     if (scroll >= 500) {
//         $(".clearHeader").addClass("darkHeader");
//     } else {
//         $(".clearHeader").removeClass("darkHeader");
//     }
// });

$(window).scroll(function (e) {
        var scroll = $(window).scrollTop();
        if(scroll >=0 && scroll <= 1499){
            
            $("#bgcircle").removeClass("brred");
            $("#spancolor").removeClass("bgred");

        }else if (scroll >= 1500 && scroll <= 3014 ) {

            $("#bgcircle").addClass("brred");
            $("#spancolor").addClass("bgred");

        }else if(scroll >= 3015 && scroll <= 6779){

            $("#bgcircle").removeClass("brred");
            $("#spancolor").removeClass("bgred");

        }else if (scroll >= 6780) {

            $("#bgcircle").addClass("brred");
            $("#spancolor").addClass("bgred");
        }
        console.log(scroll);
    });