$(document).ready(function() {

    // pokud je plocha prázdná, je vidět pouze plusButton
    $("#plusButton").on("click",function(){
        $(this).fadeOut(0);
        $("#newStickieHeader").fadeIn(1000);
        $("#newStickieBody").fadeIn(1000);
    $("#addButton").fadeIn(1000);
    
})
    
    // při kliknutí na button přidá nový stickie s textem, který prevezme z textového inputu
    $("#addButton").click(function() {
        
        // pokud je formulář na vyplnění nového stickie prázdný, tak se nic nestane
        if ($('#newStickieHeader').text().trim().length != 0) 
        {
            
              // sortable
            $("#stickieArea").sortable();
    
            
            // vytvoření struktury stickie
            $("#stickieArea").append(
            "<div class='stickieContainer'>" +
                "<div class='stickieHeader'>" +
                    $('#newStickieHeader').html() +
                "</div>" +
                
                "<div class='stickieBody'>" +
                    $('#newStickieBody').text() +
                "</div>" +
                
                "<div class='stickiePanel'>" + 
                    "<span class='stickieDate'>" +
                        new Date().toLocaleDateString() /*+ " - " + new Date().toLocaleTimeString()*/ +
                    "</span>" +
                    "<div class='btn-info glyphicon glyphicon-pencil editStickieButton'></div>" +
                    "<div class='btn-info glyphicon glyphicon-remove deleteStickieButton'></div>" + 
                    "<div class='btn-info glyphicon glyphicon-chevron-right makeFontBigger'></div>" + 
                    "<div class='btn-info glyphicon glyphicon-chevron-left makeFontSmaller'></div>" + 
                "</div>" +
                
                // změna barev
                "<div class='stickieColor'>" +
                    "<div class='colorYellow changeColor'> </div>" +
                    "<div class='colorBlue changeColor'> </div>" +
                    "<div class='colorRed changeColor'> </div>" +
                    "<div class='colorGreen changeColor'> </div>" +
                    "<div class='colorWhite changeColor'> </div>" +
                "</div>" +
            "</div>");
            
            // Po vytvoření stickie se vymaže text ve formuláři
            $("#newStickieHeader").text("");
            $("#newStickieBody").text("");
            
        }
        
    });
    
    // po kliknutí na X se smaže daný stickie
    $("#mainArea").on("click", ".deleteStickieButton", function() {
        $(this).closest(".stickieContainer").remove();
    });
    
    
    // po kliknuti na "tuzticku" povoli moznost upravy
    $("#mainArea").on("click", ".editStickieButton", function(){
        
        $(this).closest(".stickieContainer").children(".stickieBody").attr("contenteditable", "true");
        $(this).closest(".stickieContainer").children(".stickieBody").focus();
        $(this).closest(".stickieContainer").children(".stickieBody").focusout(function(){
 			$(".stickieBody").attr("contenteditable", "false");
        });
        
//         $(this).closest(".stickieContainer").children(".stickie").attr("contenteditable", "true").focusout(function(){
// 			$(".stickie").attr("contenteditable", "false");
// 		});
		
    });
    
       // po kliknuti na "<" se zmenší písmo 1px (zatim nevím jak to udělat aby se aplikovalo pouze na 1 stickie)
        $("#mainArea").on("click", ".makeFontSmaller", function(){
            
            var fontSize = parseInt($(".stickieBody").css("font-size"));
            fontSize = fontSize - 1 + "px";
            console.log(fontSize);
            $(this).closest(".stickieContainer").children(".stickieBody").css({'font-size':fontSize});
    });
    
    
       // po kliknuti na "<" se zmenší písmo o 1px (zatim nevím jak to udělat aby se aplikovalo pouze na 1 stickie)
       
       // zkus dát před selektor toto: (this).closest(".stickieContainer").children
       
        $("#mainArea").on("click", ".makeFontBigger", function(){
            
            var fontSize = parseInt($(".stickieBody").css("font-size"));
            fontSize = fontSize + 1 + "px";
            
            $(this).closest(".stickieContainer").children(".stickieBody").css({'font-size':fontSize});
    });
    
        // Změna barev
    $("#mainArea").on("click", ".changeColor", function (){
        var stickieColor = $(this).css("background-color");
        var panelColor = $(this).css("color");
        $(this).closest(".stickieContainer").children(".stickieHeader").css(  {
                                                                        'background-color': stickieColor,
                                                                        'border-top-color': panelColor,
                                                                        'border-left-color': panelColor,
                                                                        'border-right-color': panelColor
                                                                        }
        );
        $(this).closest(".stickieContainer").children(".stickieBody").css(  {
                                                                        'background-color': stickieColor,
                                                                        'border-left-color': panelColor,
                                                                        'border-right-color': panelColor
                                                                        }
        );
        $(this).closest(".stickieContainer").children(".stickiePanel").css('background-color', panelColor);
        $(this).closest(".stickieContainer").children(".stickieColor").css('background-color', panelColor);
    });
    
    
    
    
    
    // pokusy s řazením stickies
    /*
    var colCount = 0;
    var colWidth = 270;
    var margin = 20;
    var windowWidth = 0;
    var blocks = [];

    function setupBlocks() {
        windowWidth = $("#mainArea").width();
        //console.log(windowWidth);
        //colWidth = $(".stickieContainer", document).outerWidth();
        //console.log(colWidth);
        colCount = Math.floor(windowWidth / (colWidth + margin));
        //console.log(colCount);
        for(var i = 0; i < colCount; i++) {
            blocks.push(margin + $("mainArea").height());
        }
        console.log(blocks);
        positionBlocks();
    }
    
    function positionBlocks() {
        $(".stickieContainer").each(function(){
            var min = Array.min(blocks);
            var index = $.inArray(min, blocks);
            var leftPos = margin+(index*(colWidth+margin));
            $(this).css({
                'left':leftPos+'px',
                'top':min+'px'
            });
            blocks[index] = min + $(this).outerHeight() + margin;
            console.log(blocks);
        });
    }
    
    Array.min = function(array) {
        return Math.min.apply(Math, array);
    };
    
    $(window).resize(setupBlocks());
    */

});