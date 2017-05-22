(function () {
    var path = 'assets/imgs/';


    index = 0,
        gPic			= document.getElementById("gPic"),
        prevBtn			= document.getElementById("prevBtn"),
        nextBtn			= document.getElementById("nextBtn"),
        pics			= ["newgallery1.JPG", "newgallery2.JPG",
            "newgallery3.jpg", "newgallery4.jpg", "newgallery5.JPG"]
    ;

    function bindBtns() {
        prevBtn.addEventListener("click", function(){
            moveGallery("prev");
        });
        nextBtn.addEventListener("click", function(){
            moveGallery("next");
        })
    }

    function moveGallery(direction) {

        if (direction === "next") {
            //next
            if (index < pics.length - 1) {
                index++;
            } else {
                index = 0;
            }
        } else {
            //prev
            if (index > 0) {
                index--;
            } else {
                index = pics.length - 1;
            }
        }// if direction
        gPic.src = path + pics[index];
    }

    window.onload = init;

    function init() {
        bindBtns();
    }
})();