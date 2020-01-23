function  checkFloat(ValueNumeric)
	{

		//check for numeric characters
 
		if(isNaN(ValueNumeric.value))
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	


function checkEmail(txtEmail) {

    var filter = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (txtEmail.value.search(filter) == -1) {
    return false;
 	}else
	{
		return true;
	}
}


function phonenumber(inputtxt){
	
	var phoneno = /^\(?([0-9]{3})\)??([0-9]{4})?([0-9]{4})$/;
	
	if (inputtxt.value.match(phoneno))
		{
		   return true;  
        }  
      else  
        {  
        return false;  
        }  
}  


function tab1chk(form, plan) {
     // Check each field has a value
 
 if ( plan.value == 1 )
     {
		alert('Plan Emeraude non-disponible pour le moment'); 
		return 0;
	 }

 
 if ( plan.value == 2 )
     {
		alert('Plan Or non-disponible pour le moment'); 
		return 0;
	 }


 if ( plan.value == 3 )
     {
		alert('Plan Argent non-disponible pour le moment'); 
		return 0;
	 }


 if ( plan.value == 4 )
     {
		alert('Plan Bronze non-disponible pour le moment'); 
		return 0;
	 }


return 1;
}// JavaScript Document


function tab2chk(form, fname, gender, email, occupation, phone1, phone2, address, refname, refphone, depotname, prodqty, amount) {
     // Check each field has a value
if ( fname.value == '')
     {
        alert('Il y manque le nom complet');
        return 0;
     } 

if ( gender.value == '')
     {
        alert('Il y manque le sexe');
        return 0;
     } 


if ( email.value == '')
     {
        alert("Il y manque l'email adresse");
        return 0;
     } else
	 
	 {
		 if (!checkEmail(email))
		 {
			 alert('L\'adresse email est incorrecte. Verifier a nouveau');
			 return 0;
		 }
	 }
	 
if ( occupation.value == '')
     {
        alert("Il y manque l'occupation");
        return 0;
     } 

if ( phone1.value == '')
     {
		if (phone2.value == '')
			{
        	alert('Soumettez au moins un numero de telephone.');
        	return 0;
			}
     } else
	 {
		 if (!phonenumber(phone1))
		{ 
			alert('Numero de telephone incorrecte. Ex. 50945253531'); return 0;
		}

	 }
	 	

if ( address.value == '')
     {
        alert('Soumettez votre adresse.');
        return 0;
     } 

if ( refname.value == '')
     {
        alert('Une personne comme reference.');
        return 0;
     } 

if ( refphone.value == '')
     {
        alert('Telephone de votre reference est obligatoire.');
        return 0;
     } 

if ( deponame.value == '')
     {
        alert('Choisissez un nom pour votre depot');
        return 0;
     } 
	 
if ( deponame.value == 'depo3')
	 {
	 	alert('Le nom (Depo3) ne peut pas etre utilisé.');
		return 0;
	 }

if ( prodqty.value == '')
     {
        alert('Choisissez un interval pour le nombre de produits.');
        return 0;
     } 

if ( amount.value == '')
     {
        alert('l\'estimation du prix de revient est obligatoire');
        return 0;
     }else
	 {
		if (!checkFloat(amount))
		{
		alert('Une valeur decimal est necessaire.');
		return 0;
		}
	 }

return 1;
}// JavaScript Document


function page2ready(form, fname, gender, email, occupation, phone1, phone2, address, refname, refphone, depotname, prodqty, amount) {
     // Check each field has a value
if ( fname.value == ''
	|| gender.value == ''
	|| email.value == ''
	|| occupation.value == ''
	|| phone1.value == ''
	|| address.value == ''
	|| refname.value == ''
	|| refphone.value == ''
	|| depotname.value == ''
	|| prodqty.value == ''
	|| amount.value == '')

	{
	return 0;
	}// JavaScript Document

return 1;
}




