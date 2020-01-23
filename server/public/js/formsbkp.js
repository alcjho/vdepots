//MVC banner
function bannerUpload(form, thebanner) {
    // Create a new element input, this will be our hashed password field. 
if ( thebanner.value == '')
     {
        alert('Charger le nouveau Bandrole - L x H doivent être 882 x 170');
        return false;
     } 
	 
    // Finally submit the form. 
    form.submit();
}

function bgUpload(form, thebg) {
    // Create a new element input, this will be our hashed password field. 
if ( thebg.value == '')
     {
        alert('Vous devez fournir une image pour le nouveau fond - taille maximum : 2000 x 2000');
        return false;
     } 
	 
    // Finally submit the form. 
    form.submit();
}

function logoUpload(form, thelogo) {
    // Create a new element input, this will be our hashed password field. 
if ( thelogo.value == '')
     {
        alert('Vous devez fournir une image pour le nouveau logo - taille maximum : 500 x 300 - redimensionnement: 120 x 80');
        return false;
     } 
	 
    // Finally submit the form. 
    form.submit();
}




function prodformchk(form, depo, pcat, pname, pmark, pmodel, pprice, pdesc, faceshot, backshot, accept) {
     // Check each field has a value
if ( pname.value == '')
     {
        alert('Soumettez le titre du produit');
        return false;
     } 
 
 if ( pmark.value == '')
     {
        alert('Soumettez la marque de ce produit. pou pwodwi san mak yo rantre NA.');
        return false;
     } 

 if ( pmodel.value == '')
     {
        alert("Soumettez un model pour ce produit. pour un model ki n'\existe pas inserer marque.");
        return false;
     } 
	 
 if ( pprice.value == '')
     {
        alert('Soumettez un prix pour ce produit.');
        return false;
     } 

if ( pdesc.value == '')
     {
        alert("Soumettez une breve description pour ce produit.");
        return false;
     } 

if (faceshot.value == '')
     {
        alert("Soumettez au moins une photo de face.");
        return false;
     } 

if (backshot.value == '')
     {
        alert("Soumettez au moins une photo de dos.");
        return false;
     } 

if ( !accept.checked )
     {
        alert("Vous ne pouvez continuer avant d'\avoir accepté les conditions");
        return false;
     } 
	 
	 

	 
	form.submit();
    return true;
}// JavaScript Document




function catformchk(form, catname, desc, catlimit) {
     // Check each field has a value
if ( catname.value == '')
     {
        alert('Tanpri soumet non kategori a');
        return false;
     } 
 
 if ( desc.value == '')
     {
        alert('Tanpri soumet yon deskripsyon pou kategori sa.');
        return false;
     } 	 
	 
	 
	 if (catlimit.value == "")
	{
	
        alert('Tanpri fikse yon limit pou Kategori sa.');
	}

	 
if (!catlimit.value === parseInt(catlimit.value, 10))
	{
	
        alert('Limit kategori ap tann yon nonb antye.');
	}

	 
	form.submit();
    return true;
}// JavaScript 



function accformhash(form, email, password, conf){
	
    var email = form.email.value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		 
	if(email.value==''){
		alert('une adresse email est obligatoire');
		return false;
	}
	

    if (!filter.test(form.email.value)) {
    alert("Votre addresse email n'est pas valide");
    email.focus;
    return false;
	 }
	
	if(password.value.length < 6){
        alert('Le mot de passe est obligatoire et doit contenir au moins 6 charactères.');
        form.password.focus();
        return false;
	}

	
    if (password.value != conf.value) {
        alert('les valeurs saisies pour le mot de passe et la confirmation sont differentes.');
        form.password.focus();
        return false;
    }
	
	$('#p').val(SHA512($('#password').val()));
	$('#password').val("");
 	
    // Make sure the plaintext password doesn't get sent. 
    password.value = "";
    conf.value = "";
 
    // Finally submit the form. 
    form.submit();
    return true;


}


function regformhash(form, fname, txtphone, addr, atype, email, password, conf, refname, refphone, sexe, year, month, day, occ, ville, pays) {
     // Check each field has a value
	var phoneno = /^\(?([0-9]{3})\)??([0-9]{4})?([0-9]{4})$/;
    var email = form.email.value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	 
	if(email.value==''){
		alert('une adresse email est obligatoire');
		return false;
	}
	

    if (!filter.test(form.email.value)) {
    alert("Votre addresse email n'est pas valide");
    email.focus;
    return false;
	 }
	
	if(password.value.length < 6){
        alert('Le mot de passe est obligatoire et doit contenir au moins 6 charactères.');
        form.password.focus();
        return false;
	}

	
    if (password.value != conf.value) {
        alert('les valeurs saisies pour le mot de passe et la confirmation sont differentes.');
        form.password.focus();
        return false;
    }
	
	 if(fname.value==''){
		alert('Nom Complet vide');
		return false;
	}
	
	 if(txtphone.value==''){
		alert('un numéro de telephone est obligatoire');
		return false;
	}
	
	 if(!txtphone.value.match(phoneno)) {
		alert("Votre numéro de téléphone est éronné. Ex: 50937111000");
		return false;
	 } 

	
	if(refname.value==''){
		alert('Le nom complet de votre référence est obligatoire');
		return false;
	}
	
	if(refphone.value==''){
		alert('Le téléphone de votre référence est obligatoire');
		return false;
	}
	
	if(!refphone.value.match(phoneno)) {
		alert("Numéro de téléphone référence est éronné.");
	return false;
	} 
	
	if(ville.value==''){
		alert('Une ville est obligatoire');
		return false;
	}
	
	if(addr.value==''){
		alert('Une adresse est obligatoire');
		return false;
	}
	
	var a = form.val1.value;
	var b = form.val2.value;
	var resp = form.response.value;
	var answer = (+a) + (+b);
	
	//alert(answer);
	if (resp != answer){
		alert("Mauvaise réponse pour l'addition!");
		form.val1.value = Math.floor(Math.random() * (100 - 10)) + 10;
		form.val2.value = Math.floor(Math.random() * (100 - 10)) + 10;
		form.response.focus();
		return false;
	}

	
	$('#p').val(SHA512($('#password').val()));
	$('#password').val("");
 	
    // Make sure the plaintext password doesn't get sent. 
    password.value = "";
    conf.value = "";
 
    // Finally submit the form. 
    form.submit();
    return true;
}


function quickReg(form, fname, txtphone, atype, email, password, conf, sexe, year, month, day) {
     // Check each field has a value
	var phoneno = /^\(?([0-9]{3})\)??([0-9]{4})?([0-9]{4})$/;
    var email = form.email.value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	 
	if(email.value==''){
		alert('une adresse email est obligatoire');
		return false;
	}
	

    if (!filter.test(form.email.value)) {
    alert("Votre addresse email n'est pas valide");
    email.focus;
    return false;
	 }
	
	if(password.value.length < 6){
        alert('Le mot de passe est obligatoire et doit contenir au moins 6 charactères.');
        form.password.focus();
        return false;
	}

	
    if (password.value != conf.value) {
        alert('les valeurs saisies pour le mot de passe et la confirmation sont differentes.');
        form.password.focus();
        return false;
    }
	
	 if(fname.value==''){
		alert('Nom Complet vide');
		return false;
	}
	
	if(txtphone.value==''){
		alert('un numéro de telephone est obligatoire');
		return false;
	}
	
	 if(!txtphone.value.match(phoneno)) {
		alert("Votre numéro de téléphone est éronné. Ex: 50937111000");
		return false;
	 } 
	
	
	
	var a = form.val1.value;
	var b = form.val2.value;
	var resp = form.response.value;
	var answer = (+a) + (+b);
	
	//alert(answer);
	if (resp != answer){
		alert("Mauvaise réponse pour l'addition!");
		form.val1.value = Math.floor(Math.random() * (100 - 10)) + 10;
		form.val2.value = Math.floor(Math.random() * (100 - 10)) + 10;
		form.response.focus();
		return false;
	}

	
	$('#p').val(SHA512($('#password').val()));
	$('#password').val("");
 	
    // Make sure the plaintext password doesn't get sent. 
    password.value = "";
    conf.value = "";
 
    // Finally submit the form. 
    form.submit();
    return true;
}