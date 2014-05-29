
 $(document).ready(function () {
        //we bind the effect of mouseover and mouseenter on the food-box wrapper.
        $(".menu_popup").bind("mouseover, mouseenter", function () {
            //this will change the user name to white text as we apply this class
            $(this).find(".menu_hover").addClass(".menu_hover");
 
            //this will find the child food-box-transparentbg div and slide/show the hidden box 
            $(this).find(".food-box-transparentbkgrd").slideDown(300);
 
            //we bind when the effect of mouseout and mouseleave on the food-box wrapper
        }).bind("mouseout, mouseleave", function () {
            //this will find the child food-box-transparentbg div and hide the hidden box 
            $(this).find(".food-box-transparentbkgrd").slideUp(300);
 
            //this will remove the class white-text we add before and will make the color back to its original color
            $(this).find(".menu_hover").removeClass(".menu_hover");
        });
 