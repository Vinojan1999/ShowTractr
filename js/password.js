 $(document).ready(function(){

	    $('#password').focusout(function(){
	      email_validate();
	    });

			function email_validate() {

			  var pattern =;
			  var email = $('#password').val();
        
				if(email !== '') {
				  if(pattern.test(email)) {
				  $('#lbl3').css('color','green');
				  $('#password').css('border','2px solid green'); 
				  $('#success3').css('display','block');
				  $('#error3').css('display','none');
				  $('#span5').css('display','none');
				  $('#span6').css('display','none');
				  $('#warning3').css('display','none');
				  }
				  else {
				  $('#lbl3').css('color','#a94442');
				  $('#password').css('border','2px solid #a94442'); 
				  $('#error3').css('display','block');
				  $('#success3').css('display','none');
				  $('#span5').css('display','block');
				  $('#span6').css('display','none');
				  $('#warning3').css('display','none');
				  }
				}
			  else {
			    $('#span6').css('display','block');
			    $('#lbl3').css('color','#a94442');
			    $('#password').css('border','2px solid #a94442'); 
			    $('#error3').css('display','none');
			    $('#success3').css('display','none');
			    $('#warning3').css('display','block');
			    $('#span5').css('display','none');
			  }
			}
		});