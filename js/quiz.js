var questions = [
				 {	
				 	question: 'Are you a...?',
				 	answers: [
				 				{
				 					ans: 'Parent in a 2-parent family',
				 					image: 'img/0-0.jpg',
				 					by: 'oakleyoriginals',
				 					url: 'https://www.flickr.com/photos/oakleyoriginals/8479540406'},
				 				{
				 					ans: 'Single Parent',
				 					image: 'img/0-1.jpg',
				 					by: 'mamchenkov',
				 					url: 'https://www.flickr.com/photos/mamchenkov/2978202186'},
				 				{
				 					ans: 'Not a Parent',
				 					image: null},
				 				
				 				]},
				 {	
				 	question: 'Are you a student?',
				 	answers: [
				 				{
				 					ans: 'Yes',
				 					image: 'img/1-0.jpg',
				 					by: 'universbeeld',
				 					url: 'https://www.flickr.com/photos/universbeeld/5447907854'},
				 				{
				 					ans: 'No',
				 					image: null},
				 				] },
				];
		

     

$(document).ready(function(){
	
	content = '';
	for (var i = 0; i < questions.length; i++) {

		if (i %2 ==0) {
			content += '<div style="color: #ffffff; background-color: #35586C; position: relative; top: -42px; height: 105%;" class="wrapper">';
		} else {
			content += '<div style="position: relative; top: -42px; height: 105%;" class="wrapper">';
		}
		content += '<div  class="question-block" id="question-'  + i + '">';
		content += questions[i].question;
		content += '<br>';
		content += '<div class="btn-group-vertical" data-toggle="buttons">';
		for (var j = 0; j < questions[i].answers.length; j++) {

			content += '<label class="btn btn-quiz" id="answer-' +i + '-' + j + '">';
			content += '<input type="radio" name="options" id="' +j + '">';
			if (questions[i].answers[j].image) {
				content += '<a href="' + questions[i].answers[j].url + '"><img class="img-rounded" src="' + questions[i].answers[j].image + '" data-toggle="tooltip" data-placement="left" title="Photo by ' + questions[i].answers[j].by + '" width="200"></a>';
			}
			content += '<br><span class="ans">' + questions[i].answers[j].ans + '</span>';
			content += '</input></label>';
		}
		content += '</div></div></div>';
	}
	
	$('.hand').click(function() {
		$('#question-0').animatescroll();
	});
	
	$('#question-space').html(content);
	
	for (var i = 0; i < questions.length; i++) {
		for (var j = 0; j < questions[i].answers.length; j++) {
			$('#answer-' + i + '-' + j).click(function(e) {
				var k = parseInt(e.currentTarget.id.substring(7,8)) + 1;
				if (k == questions.length) {
					$('#answer-button').animatescroll();
				} else {
					$('#question-' +k).animatescroll();
				}
			});
			
		}
	}
	
	
	
	$('#submit-answer').click(function(e) {
		
		var answers = [];
		
		var answer = '';
		
		for (var i = 0; i<questions.length; i++) {
			var q = $("#question-" + i).find('.active');
			if (q.length > 0) {
				item = q.find('input')[0].id;
				answers.push(item);
			} else {
				answers.push(null);
			}
		}
		console.log(answers);
		if (answers[0] == 0 || answers[0] == 1) {
			answer += '<p><h3>You have 1 or more children.</h3> The costs of raising them have increased significantly under the Conservatives and Liberal Democrats. Not <BR>only has childcare xxx, child benefit has been cut by xxx, and with unemployment concentrated among the very young, <BR>it’s likely that you will have to continue supporting those children well into their adulthood.</p>';
		}
		if (answers[0] == 1) {
			answer += '<p><h3>On top of that, you\'re a single parent.</h3>There’s no doubt that life has got harder for you over the past five years. The cost of childcare <BR>has increased, single parents are now required to return to work sooner after the birth of their children, jobseeker’s <BR>allowance and housing benefit have been cut, and child benefit has been cut (?) in order to give <BR>tax allowances to married couples.The Tories and Liberal democrats have made no secret of the fact that <BR>their priority is  supporting married couples - but for single parents, that means more day-to-day struggle.</p>';
		}
		if (answers[1] == 0) {
			answer += '<p><h3>You’re a student.</h3> Your fees have tripled under the Conservatives and Liberal Democrats - despite the Lib Dem election promise to resist <BR>tuition fee hikes. The cost of getting a degree has xxx, and the likelihood of getting a good job at the end of it is <BR>far lower than it once was. XX of xx graduates were employed after 12 months, and only xx were paid above xxx.</p>';
		}
		
		$('#answer').html(answer);
		
		$('#ans-title').animatescroll();
		return false;
		
	});
	
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});
	
});