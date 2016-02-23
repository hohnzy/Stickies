$(".newNote").on("click",function(){
   $(".newNote").fadeOut(0);
   $("input").fadeIn(0)
})

$("input").keypress(function(event){
    if(event.which === 13){
		var stickie = $(this).val();
		$(this).val("");
		$(".noteList").append("<div class='notes'>" +stickie + "</div>");
	}
   })
