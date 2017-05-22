/**
 * @file: main.js
 */


(function (){

    function blogBtn1() {
        $(".blogLink1")
            .colorbox({
                inline : "true",
                width : "386px",
                height: "292px"
            });
    }//blogBtn1

    function blogBtn2() {
        $(".blogLink2")
            .colorbox({
                inline : "true",
                width : "592px",
                height: "266px"
            });
    }//blogBtn2

    function blogBtn3() {
        $(".blogLink3")
            .colorbox({
                inline : "true",
                width : "536px",
                height: "390px"
            });
    }//blogBtn3

    function blogBtn4() {
        $(".blogLink4")
            .colorbox({
                inline : "true",
                width : "486px",
                height: "356px"
            });
    }//blogBtn4

    function blogBtn5() {
        $(".blogLink5")
            .colorbox({
                inline : "true",
                width : "390px",
                height: "388px"
            });
    }//blogBtn5

    function init() {
        blogBtn1();
        blogBtn2();
        blogBtn3();
        blogBtn4();
        blogBtn5();
    }//init

    window.addEventListener("load", init);

})();