//Display all lecture->courses
function displayCourses() {
	allCourses = getCourses();
	let courses = document.getElementById("courses");
	let table = "<thead><tr><th>ID</th><th>Course</th><th>Code</th></thead><tbody>";
	for(i = 0; i < allCourses.length; i++)
		table = table + "<tr><td>" + i + "</td><td>" + allCourses[i].name +"</td><td>" + allCourses[i].code + "</td></tr>";
	table += "</tbody>";
	courses.innerHTML = table;
}

//Display all the group in groupstudys
function displayGroup() {
	allGroup = getAllGroup();
	let group = document.getElementById("groups");
	let degree = document.getElementById("degree");
	let curriculum_group = document.getElementById("curriculum_group");
	let group_by_degree = document.getElementById("list_group_by_degree");
	let i, listGroup = "", listDegree = "";

	let setDegree = new Set();
	for(i = 0; i <allGroup.length; i++)
		setDegree.add(allGroup[i].degreeprogram)
	allDegree = Array.from(setDegree);
	for(i = 0; i <allDegree.length; i++)
		listDegree = listDegree + "<option>" + allDegree[i] + "</option>";

	let tableGroup = "<thead><tr><th>ID</th><th>Code</th><th>Degree Program</th></thead><tbody>";
	let tableDegree = "<thead><tr><th>ID</th><th>Degree Program</th></thead><tbody>";
	for(i = 0; i < allGroup.length; i++){
		tableGroup = tableGroup + "<tr><td>" + i + "</td><td>" + allGroup[i].code +"</td><td>" + allGroup[i].degreeprogram + "</td></tr>";
		tableDegree = tableDegree + "<tr><td>" + i + "</td><td>" + allGroup[i].degreeprogram + "</td></tr>";
		listGroup = listGroup + '<option value="' + allGroup[i].url + '">' + allGroup[i].code + "/" + allGroup[i].degreeprogram + "</option>";
	}
	tableGroup += "</tbody>";
	tableDegree += "</tbody>";
	group.innerHTML = tableGroup;
	degree.innerHTML = tableDegree;
	curriculum_group.innerHTML = listGroup;
	group_by_degree.innerHTML = listDegree;
}

//Display all curriculums
function displayCurriculums() {
	allCurriculums = getCurriculums();
	let curriculums = document.getElementById("curriculums");
	let course_curriculums = document.getElementById("course_curriculums");
	let i, options="";

	let tableGroup = "<thead><tr><th>ID</th><th>Code</th><th>Degree Program</th></thead><tbody>";
	for(i = 0; i < allCurriculums.length; i++){
		group = getGroup(allCurriculums[i].groupid);
		tableGroup = tableGroup + "<tr><td>" + i + "</td><td>" + group.code +"</td><td>" + group.degreeprogram + "</td></tr>";
		options = options + '<option value="' + allCurriculums[i].url + '">'  + group.code + "/" + group.degreeprogram + "</option>";
	}
	tableGroup += "</tbody>";
	curriculums.innerHTML = tableGroup;
	course_curriculums.innerHTML = options;
}

//Display all teachers to choose course
function displayTeacherCourse() {
	allTeacherCourse = getTeacherCourse();
	let teacher_course = document.getElementById("teacher_course");
	let i, options="";
	let teachers = new Set();
	for(i = 0; i <allTeacherCourse.length; i++)
		teachers.add(allTeacherCourse[i].teacher)
	teachers = Array.from(teachers);
	for(i = 0; i <teachers.length; i++){
		options = options + '<option value="' + i + '">'  + teachers[i] + "</option>";
	}
	teacher_course.innerHTML = options;
}

//Choose teacher to display course
function coursesByTeacher(){
	allTeacherCourse = getTeacherCourse();
	let teacher_course = document.getElementById("teacher_course");
	let teacher = teacher_course.options[teacher_course.selectedIndex].text;
	let courses = document.getElementById("list_course_by_teacher");
	let i, options="";
	for(i = 0; i <allTeacherCourse.length; i++){
		if (allTeacherCourse[i].teacher==teacher)
			options = options + '<li class="list-group-item">' + allTeacherCourse[i].course +'</li>'
	}
	courses.innerHTML = options;
}

//Chosee student to display course
function displayStudentCourse() {
	allStudentCourse = getStudentCourse();
	let student_course = document.getElementById("student_course");
	let i, options="";
	let groups = new Set();
	for(i = 0; i <allStudentCourse.length; i++)
		groups.add(allStudentCourse[i].group)
	groups = Array.from(groups);
	for(i = 0; i <groups.length; i++){
		options = options + '<option value="' + i + '">'  + groups[i] + "</option>";
	}
	student_course.innerHTML = options;
}

//Choose group to display course
function coursesByStudent(){
	allStudentCourse = getStudentCourse();
	let student_course = document.getElementById("student_course");
	let group = student_course.options[student_course.selectedIndex].text;
	let courses = document.getElementById("list_course_by_student");
	let i, options="";
	for(i = 0; i <allStudentCourse.length; i++){
		if (allStudentCourse[i].group==group)
			options = options + '<li class="list-group-item">' + allStudentCourse[i].course +'</li>'
	}
	courses.innerHTML = options;
}

function groupByDegree(){
	allGroup = getAllGroup();
	let group_by_degree = document.getElementById("list_group_by_degree");
	let degree = group_by_degree.options[group_by_degree.selectedIndex].text;
	let groups = document.getElementById("group_by_degree");
	let i, options="";
	for(i = 0; i <allGroup.length; i++)
		if (allGroup[i].degreeprogram==degree)
			options = options + '<li class="list-group-item">' + allGroup[i].code +'</li>'
	groups.innerHTML = options;
}

function displayTeacherDegree() {
	allTeacher = getTeacherDegree();
	let teacher_by_degree = document.getElementById("list_teacher_by_degree");
	let i, options="";
	let degree = new Set();
	for(i = 0; i <allTeacher.length; i++)
		degree.add(allTeacher[i].degree)
	degree = Array.from(degree);
	for(i = 0; i <degree.length; i++){
		options = options + '<option value="' + i + '">'  + degree[i] + "</option>";
	}
	teacher_by_degree.innerHTML = options;
}

function teacherByDegree(){
	allTeacher = getTeacherDegree();
	let teacher_by_degree = document.getElementById("list_teacher_by_degree");
	let degree = teacher_by_degree.options[teacher_by_degree.selectedIndex].text;
	let teachers = document.getElementById("teacher_by_degree");
	let i, options="";
	for(i = 0; i <allTeacher.length; i++)
		if (allTeacher[i].degree==degree)
			options = options + '<li class="list-group-item">' + allTeacher[i].teacherName +'</li>'
	teachers.innerHTML = options;
}

//Search courses by teacher
function getTeacherCourse() {
	let request = new XMLHttpRequest();
	request.open("GET", "/teachercourse/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send();
	allTeacherCourse = JSON.parse(request.responseText);
	return allTeacherCourse;
}

//Search courses by student
function getStudentCourse() {
	let request = new XMLHttpRequest();
	request.open("GET", "/studentcourse/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send();
	allStudentCourse = JSON.parse(request.responseText);
	return allStudentCourse;
}

//Search teacher by degree
function getTeacherDegree() {
	let request = new XMLHttpRequest();
	request.open("GET", "/teacherdegree/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send();
	allTeacherDegree = JSON.parse(request.responseText);
	return allTeacherDegree;
}

//Get all courses
function getCourses() {
	let request = new XMLHttpRequest();
	request.open("GET", "/courses/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send();
	allCourses = JSON.parse(request.responseText);
	return allCourses;
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
//Get all the group study
function getAllGroup(){
	let request = new XMLHttpRequest();
	request.open("GET", "/groupstudys/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send();
	allGroup = JSON.parse(request.responseText);
	return allGroup;
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

function getTeachers() {
	let request = new XMLHttpRequest();
	request.open("GET", "/teachers/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send();
	allCourses = JSON.parse(request.responseText);
	return allCourses;

}
function addCourse(){
	let course_name = document.getElementById("course_name");
	let course_code = document.getElementById("course_code");
	let course_credit = document.getElementById("course_credit");
	let course_curriculums = document.getElementById("course_curriculums");
	let curriculum = course_curriculums.options[course_curriculums.selectedIndex].value;
	let jsonData = '{"code":' + JSON.stringify(course_code.value) + ',"name":' + JSON.stringify(course_name.value) + ',"credit":' + course_credit.value + ',"curriculumid":' + JSON.stringify(curriculum) + '}';
	let request = new XMLHttpRequest();
	request.open("POST", "/courses/", false);
	request.setRequestHeader("Authorization", "Basic " + btoa("admin:password123"));
	request.setRequestHeader("X-CSRFToken", readCookie("csrftoken"));
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send(jsonData);
	let array = JSON.parse(request.responseText);
	displayCourses();
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
displayTeacherCourse();
coursesByTeacher();
displayStudentCourse();
coursesByStudent();
groupByDegree();
displayTeacherDegree();
teacherByDegree();