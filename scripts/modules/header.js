export default function header (){
    
      $(document).ready(function() {
        let header = $(".header-container");
        let headerHeight = header.outerHeight(); 
        let isFixed = false;
      
        function updateHeaderStyle() {
          let scrollTop = $(window).scrollTop();
      
          if (scrollTop > headerHeight && !isFixed) {
            header.addClass("fixed");
            
            isFixed = true;
          } else if (scrollTop <= headerHeight && isFixed) {
            header.removeClass("fixed");
           
            isFixed = false;
          }
        }
      
        updateHeaderStyle();
        $(window).scroll(updateHeaderStyle);
      });
      
}