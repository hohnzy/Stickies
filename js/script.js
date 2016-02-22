$(document).ready(function() {
    
    /*
    //brání odeslání formuláře při stisku Enteru a zároveň vytváří nový stickie a čistí pole input-text
    $("#new_stickie").focus().keydown(function(event) {
        if(event.keyCode == 13) {
            $("#main_area").append("<div class='stickie'>" + $('#new_stickie').val() + "</div>");
            $("#new_stickie").val("");
            // dočasný X button
            $("#main_area").append("<button class='delete_stickie'>X</button>");
            event.preventDefault();
            return false;
        }
    }); 
    */
    
    //při kliknutí na button přidá nový stickie s textem, který prevezme z textového inputu
    $("#button_add").click(function() {
        
        if ($('#new_stickie').text().trim().length != 0) 
        {
            $("#main_area").append(
            "<div class='stickie_container'>" + 
                "<div class='stickie'>" + $('#new_stickie').text() + "</div>" +
                "<div class='stickie_panel'>" + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + "</div>" +
                "<div>" + 
                    "<div class='btn-info glyphicon glyphicon-pencil stickie_panel edit_button'></div>" +
                    "<div class='btn-info glyphicon glyphicon-remove stickie_panel delete_stickie'></div>" + 
                "</div>" + 
            "</div>");
            
            
            //$("#main_area").append("<div class='stickie'>" + $('#new_stickie').text() + "</div>");
            $("#new_stickie").text("");

        }
    });
    
    // po kliknutí na X se smaže daný stickie
    $("#main_area").on("click", ".delete_stickie", function() {
        $(this).parent().parent().remove();
    });
    
    
    // po kliknuti na "tuzticku" povoli moznost upravy
    $("#main_area").on("click", ".edit_button", function(){
 $(this).parent().prev().prev().attr("contenteditable","true").focusout(function(){
			$(".stickie").attr("contenteditable","false")
		});
        
    });


});