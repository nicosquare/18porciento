$(document).ready(function() {

	var nstd = "";
	var nspc = "";
	var nprm = "";
	var ntotal = 0;
	
	var selectedPack = 0;
	var nphotos = 0;
	
	var array_precios_std = [45000,40000,35000,30000,25000,20000,15000,10000];
	var array_precios_spc = [60000,55000,50000,45000,40000,35000,30000,25000];
	var array_precios_prm = [90000,85000,80000,75000,70000,65000,60000,55000];
	
	$("#q-std, #q-spc, #q-prm").attr("disabled", true);
	
	$("#q-std, #q-spc, #q-prm").focusout(function(e) 
	{
		
		var range = 0;
		
		if(isNaN($("#q-std").val()) || $("#q-std").val() == "") nstd = 0
		else nstd = $("#q-std").val();
		
		if(isNaN($("#q-spc").val()) || $("#q-spc").val() == "") nspc = 0;
		else nspc = $("#q-spc").val();
		
		if(isNaN($("#q-prm").val()) || $("#q-prm").val() == "") nprm = 0;
		else nprm = $("#q-prm").val();
		
		//console.log(nstd+" - "+nspc+" - "+nprm);
		ntotal = parseInt(nstd)+parseInt(nspc)+parseInt(nprm);
		
		//console.log(ntotal);
		
		if(ntotal>0 && ntotal<=10) range = 0;
		if(ntotal>10 && ntotal<=30) range = 1;
		if(ntotal>30 && ntotal<=50) range = 2;
		if(ntotal>50 && ntotal<=100) range = 3;
		if(ntotal>100 && ntotal<=300) range = 4;
		if(ntotal>300 && ntotal<=500) range = 5;
		if(ntotal>500 && ntotal<=1000) range = 6;
		if(ntotal>1000 && ntotal<=3000) range = 7;
		
		//console.log(range);
		
		if(nstd != 0) $("label[name = p-std]").text(array_precios_std[range]);
		else $("label[name = p-std]").text("---");
		
		if(nspc != 0) $("label[name = p-spc]").text(array_precios_spc[range]);
		else $("label[name = p-spc]").text("---");
		
		if(nprm != 0) $("label[name = p-prm]").text(array_precios_prm[range]);
		else $("label[name = p-prm]").text("---");
		
		var ptotal = parseInt(array_precios_std[range])*parseInt(nstd)+parseInt(array_precios_spc[range])*parseInt(nspc)+parseInt(array_precios_prm[range])*parseInt(nprm) 
		
		if((parseInt(selectedPack) - parseInt(nstd) - parseInt(nspc) - parseInt(nprm)) < 0)
		{
			alert("Recuerda que el paquete que escogiste tiene "+selectedPack+" fotos :)");	
			
			if(e.target.id == "q-std") 
			{	
				nstd = parseInt(selectedPack) - parseInt(nspc) - parseInt(nprm);
				$("#q-std").val(nstd);	
			}
			if(e.target.id == "q-spc") 
			{
				nspc = parseInt(selectedPack) - parseInt(nstd) - parseInt(nprm);
				$("#q-spc").val(nspc);
			}
			if(e.target.id == "q-prm") 
			{
				nprm = parseInt(selectedPack) - parseInt(nstd) - parseInt(nspc);
				$("#q-prm").val(nprm);
			}
		}
		
		nphotos = parseInt(selectedPack) - parseInt(nstd) - parseInt(nspc) - parseInt(nprm);
		
		$("#q-photo").text(nphotos);	
		$("#total").text(ptotal);	
	});
	
	
	$("#p1, #p2, #p3, #p4, #p5, #p6, #p7, #p8 ").change(function() 
	{
		
		selectedPack = $(this).val();
		
		$("#q-std, #q-spc, #q-prm").attr("disabled", false);
		
		if(isNaN($("#q-std").val()) || $("#q-std").val() == "") nstd = 0
		else nstd = $("#q-std").val();
		
		if(isNaN($("#q-spc").val()) || $("#q-spc").val() == "") nspc = 0;
		else nspc = $("#q-spc").val();
		
		if(isNaN($("#q-prm").val()) || $("#q-prm").val() == "") nprm = 0;
		else nprm = $("#q-prm").val();
		
		nphotos = parseInt(selectedPack) - parseInt(nstd) - parseInt(nspc) - parseInt(nprm); ;
		
		$("#q-photo").text(nphotos);
		
		/*if(!parseInt()) 
		{
			$("input[name='p20-cause']").attr("disabled", false);
			$("input[name='p20-cause']").prop('required', true);
		}
		else
		{
			$("input[name='p20-cause']").attr("disabled", true);
			$("input[name='p20-cause']").prop('required', false);
		}*/
		
	});

});
