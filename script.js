$(document).ready(function () { 
            $(".imag").click(function () { 
                $(".Outer").toggle("swing"); 
            }); 
			 $(".imagi").click(function () { 
                $(".morb").toggle("swing"); 
            });
			$(".imagie").click(function () { 
                $(".harold").toggle("swing"); 
            });
			$(".correct").click(function (){
				$(this).css("color", "green")();
			});
			$(".wrong").click(function (){
				$(this).css("color", "red")();
			});
        }); 
		
