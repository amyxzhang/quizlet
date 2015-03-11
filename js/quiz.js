var questions = [
				 {	
				 	question: 'Which family status or household best describes your situation?',
				 	answers: [
				 				{
				 					ans: 'Two Parents with Children',
				 					image: 'img/0-0.jpg',
				 					by: 'oakleyoriginals',
				 					url: 'https://www.flickr.com/photos/oakleyoriginals/8479540406'},
				 				{
				 					ans: 'Single Parent with One Child',
				 					image: 'img/0-1.jpg',
				 					by: 'mamchenkov',
				 					url: 'https://www.flickr.com/photos/mamchenkov/2978202186'},
				 				{
				 					ans: 'Living with a partner',
				 					image: 'img/0-2.jpg',
				 					by: 'freelancersunion',
				 					url: 'https://www.flickr.com/photos/freelancersunion/4910942510'},
				 				{
				 					ans: 'Living alone',
				 					image: 'img/0-3.jpg',
				 					by: 'pigpilot',
				 					url: 'https://www.flickr.com/photos/pigpilot/4963855714'},
				 					
				 				
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
				 					image: 'img/1-1.jpg',
				 					by: '48698930@N04',
				 					url: 'https://www.flickr.com/photos/48698930@N04/7637192644'},
				 				] },
				{	
				 	question: 'What is your housing situation?',
				 	answers: [
				 				{
				 					ans: 'Homeless',
				 					image: 'img/2-0.jpg',
				 					by: 'slrjester',
				 					url: 'https://www.flickr.com/photos/slrjester/6272470480'},
				 				{
				 					ans: 'Renter',
				 					image: 'img/2-1.jpg',
				 					by: 'milestonemanagement',
				 					url: 'https://www.flickr.com/photos/milestonemanagement/9392525901'},
				 				{
				 					ans: 'Homeowner',
				 					image: 'img/2-2.jpg',
				 					by: 'davidstanleytravel',
				 					url: 'https://www.flickr.com/photos/davidstanleytravel/15271914123'},
				 				{
				 					ans: 'Landlord',
				 					image: 'img/2-3.jpg',
				 					by: 'niexecutive',
				 					url: 'https://www.flickr.com/photos/niexecutive/15832074041'},
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
		content += '<div class="btn-group" data-toggle="buttons">';
		for (var j = 0; j < questions[i].answers.length; j++) {

			content += '<label class="btn btn-quiz" id="answer-' +i + '-' + j + '">';
			content += '<input type="radio" name="options" id="' +j + '">';
			if (questions[i].answers[j].image) {
				content += '<a href="' + questions[i].answers[j].url + '"><img class="img-rounded" src="' + questions[i].answers[j].image + '" data-toggle="tooltip" data-placement="top" title="Photo by ' + questions[i].answers[j].by + '" height="150"></a>';
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
		if (answers[0] == 2) {
			answer += '<p><h3>You live with your partner and no children.</h3> The fifth decile makes a median 27,200 a year, the top decile makes 88,500 or more and the bottom decile makes 13,300 a year.</p>';
		}
		if (answers[0] == 3) {
			answer += '<p><h3>You live alone.</h3> The fifth decile makes a median 17,600 a year, the top decile makes 60,500 or more and the bottom decile makes 8,600 a year.</p>';
		}
		if (answers[0]) {
			answer += '<p class="small">Source: "<a href="http://www.theguardian.com/money/2014/mar/25/uk-incomes-how-salary-compare">UK incomes: how does your salary compare?</a>", The Guardian, 25 March, 2014.<BR> Based on HM Treasury official document "<a href="https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/293738/budget_2014_distributional_analysis.pdf">Impact on households: distributional analysis to accompany Budget 2014</a>"</p>';
		}
		if (answers[1] == 0) {
			answer += '<p><h3>You\'re a student.</h3> Your fees have tripled under the Conservatives and Liberal Democrats - despite the Lib Dem election promise to resist <BR>tuition fee hikes. The cost of getting a degree has xxx, and the likelihood of getting a good job at the end of it is <BR>far lower than it once was. XX of xx graduates were employed after 12 months, and only xx were paid above xxx.</p>';
		}
		if (answers[2] == 0) {
			answer += '<p><h3>You\'re homeless.</h3> There are a lot more of homeless and precariously housed people like you in Britain in 2015 than there were in 2010.</p>';
		}
		if (answers[2] == 1) {
			answer += '<p><h3>You\'re a renter.</h3> You rent rather than own your home. But rents have been rising faster than wages, and gas, electricity and water bills <BR>have If you’re a renter, your disposable income - the money you have left after you’ve paid your rent and bills</p>';
		}
		if (answers[2] == 3) {
			answer += '<p><h3>You are a private landlord</h3> Congratulations! You are almost certainly richer now than you were in 2010. The housing crisis has fuelled an <BR>enormous rise in rent, and you can pick and choose your tenants.</p>';
		}
		
		$('#answer').html(answer);
		
		$('#ans-title').animatescroll();
		return false;
		
	});
	
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});
	
});