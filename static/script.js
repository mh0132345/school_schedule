//Display all lecture->courses
function displayCourses(){
	let request = new XMLHttpRequest();
	request.open("GET", "/courses/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send();
	allCourses = JSON.parse(request.responseText);
	console.log(allCourses);
	let selectElement = document.getElementById("courses");
	let i, options="";
	for(i = 0; i < allCourses.length; i++)
		options = options + "<option>" + allCourses[i].name + "/" + allCourses[i].code + "</option>";
	selectElement.innerHTML = options;
}

//Display all the group in groupstudys
function displayGroup(){
	let request = new XMLHttpRequest();
	request.open("GET", "/groupstudys/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send();
	allGroup = JSON.parse(request.responseText);
	console.log(allGroup);
	let group = document.getElementById("groups");
	let degree = document.getElementById("degree");
	let curriculum_group = document.getElementById("curriculum_group");
	let i, listGroup="", listDegree="";
	for(i = 0; i < allGroup.length; i++) {
		listGroup = listGroup + '<option value="' + allGroup[i].url + '">' + allGroup[i].code + "/" + allGroup[i].degreeprogram + "</option>";
		listDegree = listDegree + "<option>" + allGroup[i].degreeprogram + "</option>";
	}
	console.log(listGroup);
	group.innerHTML = listGroup;
	degree.innerHTML = listDegree;
	curriculum_group.innerHTML = listGroup;
}

//Display all curriculums
function displayCurriculums(){
	allCurriculums = getCurriculums();
	console.log(allCurriculums);
	let curriculums = document.getElementById("curriculums");
	let course_curriculums = document.getElementById("course_curriculums");
	let i, options="";
	for(i = 0; i < allCurriculums.length; i++){
		group = getGroup(allCurriculums[i].groupid);
		options = options + '<option value="' + allCurriculums[i].url + '">'  + group.code + "/" + group.degreeprogram + "</option>";
	}
	console.log(options);
	curriculums.innerHTML = options;
	course_curriculums.innerHTML = options;
}

//Get all Curriculums
function getCurriculums(){
	let request = new XMLHttpRequest();
	request.open("GET", "/curriculums/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send();
	allCurriculums = JSON.parse(request.responseText);
	return allCurriculums;
}

//Get a specific group for link
function getGroup(url){
	let request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send();
	group = JSON.parse(request.responseText);
	return group;
}

function addCourse(){
	let course_name = document.getElementById("course_name");
	let course_code = document.getElementById("course_code");
	let course_credit = document.getElementById("course_credit");
	let course_curriculums = document.getElementById("course_curriculums");
	let curriculum = course_curriculums.options[course_curriculums.selectedIndex].value;
	let jsonData = '{"code":' + JSON.stringify(course_code.value) + ',"name":' + JSON.stringify(course_name.value) + ',"credit":' + course_credit.value + ',"curriculumid":' + JSON.stringify(curriculum) + '}';
	console.log(jsonData);
	let request = new XMLHttpRequest();
	request.open("POST", "/courses/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send(jsonData);
	let array = JSON.parse(request.responseText);
	displayCourses();
	console.log(array);
}

function addGroup(){
	let group_code = document.getElementById("group_code");
	let group_degree = document.getElementById("group_degree");
	let jsonData = '{"code":' + JSON.stringify(group_code.value) + ',"degreeprogram":' + JSON.stringify(group_degree.value) + '}';
	let request = new XMLHttpRequest();
	request.open("POST", "/groupstudys/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send(jsonData);
	let array = JSON.parse(request.responseText);
	displayGroup();
	console.log(array);
}

function addCurriculum(){
	let curriculum_group = document.getElementById("curriculum_group");
	let group = curriculum_group.options[curriculum_group.selectedIndex].value;
	let jsonData = '{"groupid":' + JSON.stringify(group) + '}';
	let request = new XMLHttpRequest();
	request.open("POST", "/curriculums/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send(jsonData);
	let array = JSON.parse(request.responseText);
	displayCurriculums();
	console.log(array);
}

//Read cookie for csrftoken
function readCookie(name) {
	var nameEQ = encodeURIComponent(name) + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
	var c = ca[i];
	while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
	}
	return null;
}

displayCourses();
displayGroup();
displayCurriculums();
