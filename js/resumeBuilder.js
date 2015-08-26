/*
This file contains all of the code that is used for the resume information.
*/

var bio = {
	"name" : "Joseph Hospodka",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "707-301-7663",
		"email" : "hospodka1@comcast.net",
		"github" : "hospodka",
		"twitter" : "@hospodka_joseph",
		"location" : "Snohomish, Wa"
	},
	"welcomeMessage" : "The only place success comes before work is in the dictionary. Vince Lombardi",
	"skills" : [ "Dedicated","Motivated ","Self Starter ","Dependable"
	],
	"bioPic" : "images/picture_of_me.jpg"
};

var education = {
	"schools": [
	{
		"name": "American Public University",
		"degree": "Bachelor of Science",
		"location": "Monroe, Wa",
		"major" : "Information Technology",
		"dates" : 2015
	}
	],
	"onlineCourses": [
		{
		"school": "Udacity",
		"title": "Front-End Web Developer Nanodegree",
		"location": "Snohomish, Wa",
		"dates": "July 2015 - August 2015",
		"url": "https://www.udacity.com/nanodegree"
		}
	]
};

var work = {
	"jobs": [
	{
		"employer": "AT&T",
		"title": "Senior Network Support",
		"dates": "October 1997 - present",
		"description": "Responsible for SS7 signaling for all of AT&T Mobility customers. Transport expert with all optical levels. In charge, and SME, on Cisco 7609 routers as well as Tekelec Eagle platform.",
		"location": "Bothell, Wa"
	},
	{
		"employer": "Pizza Place",
		"title": "Delivery Boy",
		"location": "Dixon, Ca",
		"dates": "Childhood - October 1997",
		"description": "Responsible for delivering fresh hot pizza's to exotic locations."
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "Sample Project 1",
		"dates": "2015",
		"description": "Project 1",
		"images": [ "images/project_image.jpg" , "images/fry.jpg"]
	},
	{
		"title": "Sample Project 2",
		"dates": "2015",
		"description": "Project 2",
		"images": [ "images/project_image.jpg" , "images/fry.jpg"]
	}
	]
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic).append(formattedMessage);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  	$("#topContacts").append(formattedMobile).append(formattedEmail).append(formattedTwitter).append(formattedGithub).append(formattedLocation);
  	$("#footerContacts").append(formattedMobile).append(formattedEmail).append(formattedTwitter).append(formattedGithub).append(formattedLocation);
	if (bio.skills.length > 0)
    {
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills)
    {
     var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
     $("#skills").append(formattedSkills);
     }
  }
}

work.display = function(){
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").prepend(formattedLocation);
}
}

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}

}

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").prepend(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for (var course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	}
}

$(document).click(function(loc) {
 	var x = loc.pageX;
 	var y = loc.pageY;
 	logClicks(x,y);
});

function locationizer(work_obj) {
	locationArray = [];
	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

function inName(name) {
	name = $("#name").text();
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
	name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();
console.log(locationizer(work));