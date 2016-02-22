$(document).ready(function() {
    // vim, ze se to takhle nepise ... ale funguje to
	// kod zacne s tim, ze skryje prvni sticker a male +button v pravem hornim rohu
  $("#small-add-section").hide();
	$(".sticker").hide();
	$(".small-input").hide();
	
	var $userValue
	var $userValue2
	

	$(".big-button").click(function() {
		 $userValue = $("input").val();
		
		if($userValue.length > 0 ) {
			$("#big-add-section").hide();
			$(".small-button").show();
			$(".delete-button").show();
			$(".sticker").show().html($userValue);
			$(".small-input").show();
			}
	});
	
	$(".small-button").click(function() {
		$userValue2 = $(".small-input").val();
		
		if($userValue2.length > 0 ) {
			$(".sticker").show().attr("contenteditable","true");
			$(".sticker-container").append("<div class='sticker'>" + $userValue2 + "</div>");
			$(".small-input").val("");
				}
	

	});
	
	$(".delete-button").click(function(){
		$(".sticker").remove();
		
	});
});