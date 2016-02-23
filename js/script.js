$(document).ready(function() {
    
    // při kliknutí na button přidá nový stickie s textem, který prevezme z textového inputu
    $("#addButton").click(function() {
        
        // pokud je formulář na vyplnění nového stickie prázdný, tak se nic nestane
        if ($('#newStickie').text().trim().length != 0) 
        {
            
            // vytvoření struktury stickie
            $("#mainArea").append(
            "<div class='stickieContainer'>" +
                "<div class='stickie'>" +
                    $('#newStickie').text() +
                "</div>" +
                "<div class='stickiePanel'>" + 
                    "<span class='stickieDate'>" +
                        new Date().toLocaleDateString() /*+ " - " + new Date().toLocaleTimeString()*/ +
                    "</span>" +
                    "<div class='btn-info glyphicon glyphicon-pencil editStickieButton'></div>" +
                    "<div class='btn-info glyphicon glyphicon-remove deleteStickieButton'></div>" + 
                "</div>" +
            "</div>");
            
            // Po vytvoření stickie se vymaže text ve formuláři
            $("#newStickie").text("");

        }
    });
    
    // po kliknutí na X se smaže daný stickie
    $("#mainArea").on("click", ".deleteStickieButton", function() {
        $(this).closest(".stickieContainer").remove();
    });
    
    
    // po kliknuti na "tuzticku" povoli moznost upravy
    $("#mainArea").on("click", ".editStickieButton", function(){
        $(this).closest(".stickieContainer").children(".stickie").attr("contenteditable", "true").focusout(function(){
			$(".stickie").attr("contenteditable", "false")
		});
    });


});