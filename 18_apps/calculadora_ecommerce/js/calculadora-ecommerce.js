$(document).ready(function() {

	$("input[id*='u_']").change(function() {
    
		// Price category 1
		var p_1_elements = document.getElementsByClassName("p_1");
		var p_1_q = 0;
		
		// Price category 2
		var p_2_elements = document.getElementsByClassName("p_2");
		var p_2_q = 0;
		
		// Price category 3
		var p_3_elements = document.getElementsByClassName("p_3");
		var p_3_q = 0;
		
		// Price category 4
		var p_4_elements = document.getElementsByClassName("p_4");
		var p_4_q = 0;
		
		// Price category 5
		var p_5_elements = document.getElementsByClassName("p_5");
		var p_5_q = 0;
		
		// Price category 6
		var p_6_elements = document.getElementsByClassName("p_6");
		var p_6_q = 0;
		
		// Check price category 1
		for(var i=0; i<p_1_elements.length; i++) {
			if(p_1_elements[i].checked) p_1_q ++;
		}
		
		// Check price category 2
		for(var i=0; i<p_2_elements.length; i++) {
			if(p_2_elements[i].checked) p_2_q ++;
		}
		
		// Check price category 3
		for(var i=0; i<p_3_elements.length; i++) {
			if(p_3_elements[i].checked) p_3_q ++;
		}
		
		// Check price category 4
		for(var i=0; i<p_4_elements.length; i++) {
			if(p_4_elements[i].checked) p_4_q ++;
		}
		
		// Check price category 5
		for(var i=0; i<p_5_elements.length; i++) {
			if(p_5_elements[i].checked) p_5_q ++;
		}
		
		// Check price category 6
		for(var i=0; i<p_6_elements.length; i++) {
			if(p_6_elements[i].checked) p_6_q ++;
		}
		
		var total_price = p_1_q*1000 + p_2_q*2000 + p_3_q*3000 + p_4_q*4000 + p_5_q*5000 + p_6_q*15000;
		
		$("#total").text(total_price);
    
    });
	
});
