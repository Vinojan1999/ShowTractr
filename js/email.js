
 $(document).ready(function(){

	    $('#emailid').focusout(function(){
	      email_validate();
	    });

			function email_validate() {

			  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			  var email = $('#emailid').val();
        
				if(email !== '') {
				  if(pattern.test(email)) {
				  $('#lbl2').css('color','green');
				  $('#emailid').css('border','2px solid green'); 
				  $('#success2').css('display','block');
				  $('#error2').css('display','none');
				  $('#span3').css('display','none');
				  $('#span4').css('display','none');
				  $('#warning2').css('display','none');
				  }
				  else {
				  $('#lbl2').css('color','#a94442');
				  $('#emailid').css('border','2px solid #a94442'); 
				  $('#error2').css('display','block');
				  $('#success2').css('display','none');
				  $('#span3').css('display','block');
				  $('#span4').css('display','none');
				  $('#warning2').css('display','none');
				  }
				}
			  else {
			    $('#span4').css('display','block');
			    $('#lbl2').css('color','#a94442');
			    $('#emailid').css('border','2px solid #a94442'); 
			    $('#error2').css('display','none');
			    $('#success2').css('display','none');
			    $('#warning2').css('display','block');
			    $('#span3').css('display','none');
			  }
			}
		});