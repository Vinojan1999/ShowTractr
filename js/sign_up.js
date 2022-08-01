
	function validation() {

		var user = document.getElementById('username').value;
		var email = document.getElementById('emailid').value;
		var Password = document.getElementById('password').value;
		var auserdetails = "USER DETAILS"+"<br><br>"+"User Name: "+ user +"<br><br>"+ "User e-mail: "+ email +"<br><br>"+ "User Password: "+Password;
		document.getElementById('userdetailss').innerHTML = auserdetails;	

		if (user == '') {
			document.getElementById('usernameid').innerHTML = "Your username is required!!";
			return false;
		}
		if (email == '') {
			document.getElementById('emailids').innerHTML = "Your email address Is required.";
			return false;
		}
		if (Password == '') {
			document.getElementById('passwords').innerHTML = "Password Is required!!";
			return false;
		}
		else{
			document.getElementById('usernameid').innerHTML = "";
		}
		
	}



  function Hidep()
{
  var Password = document.getElementById('password');
  var passStatus = document.getElementById('pass-status');
 
  if (Password.type == 'password'){
    Password.type='text';
    passStatus.className='fa fa-eye-slash';
    
  }
  else{
    Password.type='password';
    passStatus.className='fa fa-eye';
  }
}
