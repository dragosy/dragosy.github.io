
function hidePage(id){
	document.getElementById(id).style.display = "none";
}
function showPage(id){
	document.getElementById(id).style.display = "block";
}
function hideAllPages(){
	hidePage("home");
	hidePage("skills");
	hidePage("projects");
	hidePage("languages");
}

function showHome(){
	hideAllPages();
	showPage("home");
}

function showSkills(){
	hideAllPages();
	showPage("skills");
}

function showProjects(){
	hideAllPages();
	showPage("projects");
}

function showLanguages(){
	hideAllPages();
	showPage("languages");
}



