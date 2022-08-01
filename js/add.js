
    function addvalidation() {
      
        var pattern = /^[A-Za-z ]+$/
        var Pattern1 = pattern.test(document.getElementById("moviename").value[0]);
        var Pattern2 = document.getElementById("moviename").value;


        
        if (!Pattern1) {

            document.getElementById("Add").innerHTML="Invalid TV Show Name";
            Add.classList.remove('true');
            Add.classList.add('false');

        } 
        
        else {

            document.getElementById("Add").innerHTML= Pattern2 + " has been added"
            Add.classList.remove('false');
            Add.classList.add('true');
        }
 
        return Pattern1; 
    }

//disabled="disabled"

