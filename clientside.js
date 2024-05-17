
$(document).on('click', '.link_gnb',function(event){
	
	var ajax_url	= $(this).attr('url_code');
	var href = $(this).attr('href');
	var target = $(this).attr('target');
		
	if(target != '_blank'){
		event.preventDefault();	
	}
		
	if (ajax_url) {
		$.ajax({
			data: "section=" + ajax_url,
			type:"get",
			url:"/Log/topmenu_log",
			success:function(html){
				if(target != '_blank'){						
					$(location).attr('href' , href);
				}
					
			}
		});
	}	
});

$(document).on('click', '.main_log', function(event) {
	var nurl    = $(this).attr('href');
	var section = $(this).attr('section_code');
	var target = $(this).attr('target');

	if(target != '_blank'){
		event.preventDefault();	
	}
	
	if (section) {
		$.ajax({
			data: "section=" + section,
			type: "GET",
			url : "/Log/main_section",
			success: function(html) {
				if(target != '_blank'){
					$(location).attr('href' , nurl);
				}
			},
			error : function(data) {
				//alert('error');
			}
		});
	}
});

$(document).on('click', '.lately_log', function(event) {
	var nurl    = $(this).attr('href');
	var gallery_id = $(this).attr('section');
	var target = $(this).attr('target');

	if(target != '_blank'){
		event.preventDefault();	
	}
	
	if (gallery_id) {
		$.ajax({
			data: "gallery_id=" + gallery_id,
			type: "GET",
			url : "/Log/lately_log",
			success: function(html) {
				if(target != '_blank'){
					$(location).attr('href' , nurl);
				}
			},
			error : function(data) {
				//alert('error');
			}
		});
	}
});

$(document).on('click', '.busygall', function(event) {
	var nurl    = $(this).attr('href');
	var section = $(this).attr('section_code');
	var target = $(this).attr('target');

	if(target != '_blank'){
		event.preventDefault();	
	}
	
	if (section) {
		$.ajax({
			data: "section=" + section,
			type: "GET",
			url : "/Log/busygall_log",
			success: function(html) {
				if(target != '_blank'){
					$(location).attr('href' , nurl);
				}
			},
			error : function(data) {
				//alert('error');
			}
		});
	}
});
