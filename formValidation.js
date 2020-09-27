var error = document.getElementById('lblError');

function validateForm()
{
    var name = document.getElementById('txtName').value;
    var dob = document.getElementById('txtDOB').value;
    var email = document.getElementById('txtEmail').value;
    var address = document.getElementById('txtAddress').value;
    var password = document.getElementById('txtPassword').value;
    var male = document.getElementById('rbMale').checked;
    var female = document.getElementById('rbFemale').checked;
    var termCond = document.getElementById('termCond').checked;
    var skinType = document.getElementById('selectSkinType').value;

    if(name.length < 3)
    {
        error.innerHTML = "Name must be contains at least 3 letters";
    }
    else if(!dob)
    {
        error.innerHTML = "Date of birth cannot be empty";
    }
    else if(email.indexOf('@') == -1 || email.indexOf('@') == 0 || email.indexOf('@') != email.lastIndexOf('@') || email.indexOf('.') == -1 || email.endsWith(".com") == false )
    {
        error.innerHTML = "Email cannot be empty and must be in correct format. (ex: name@gmail.com)";
    }
    else if(skinType == 'default')
    {
        error.innerHTML = "Skin type must be selected";
    }
    else if(address.length < 1)
    {
        error.innerHTML = "Home address cannot be empty.";
    }
    else if(male == false && female == false)
    {
        error.innerHTML = "Please select a gender.";
    }
    else if(password.length < 8)
    {
        error.innerHTML = "Password must contains at least 8 characters.";
    }
    else if(!termCond)
    {
        error.innerHTML = "You must agree the terms and conditions to complete the registration";
    }
    else
    {
        error.innerHTML = "";

        if(male == true)
        {
            var tempGender = "Male";
        }
        else if(female == true)
        {
            var tempGender = "Female";
        }

        var txtConfirmAlert = "Name : "+name+"\nDate of Birth : "+dob+"\nEmail : "+email+"\nSkin Type : "+skinType+"\nHome Address : "+address+"\nGender : "+tempGender+"\nPassword : "+password+"\n\nClick 'OK' if your data is correct.";
        
        if (confirm(txtConfirmAlert))
        {
            alert("Register Success.");
            document.getElementById('formRegistration').reset();
        }
    }
}