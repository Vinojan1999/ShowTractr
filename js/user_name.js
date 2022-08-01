 $(document).ready(function(){

	    $('#username').focusout(function(){
	      user_validate();
	    });

			function user_validate() {

			  var pattern =;
			  var user = $('#username');
        
				if(user !== '') {
				  if(pattern.test(user)) {
				  $('#lbl').css('color','green');
				  $('#username').css('border','2px solid green'); 
				  $('#success').css('display','block');
				  $('#error').css('display','none');
				  $('#span1').css('display','none');
				  $('#span2').css('display','none');
				  $('#warning').css('display','none');
				  }
				  else {
				  $('#lbl').css('color','#a94442');
				  $('#username').css('border','2px solid #a94442'); 
				  $('#error').css('display','block');
				  $('#success').css('display','none');
				  $('#span1').css('display','block');
				  $('#span2').css('display','none');
				  $('#warning').css('display','none');
				  }
				}
			  else {
			    $('#span2').css('display','block');
			    $('#lbl').css('color','#a94442');
			    $('#username').css('border','2px solid #a94442'); 
			    $('#error').css('display','none');
			    $('#success').css('display','none');
			    $('#warning').css('display','block');
			    $('#span1').css('display','none');
			  }
			}
		});