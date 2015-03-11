var questions = [
				 {	
				 	question: 'Question 1',
				 	answers: [
				 				{
				 					ans: 'Answer 1-1',
				 					image: 'http://exmoorpet.com/wp-content/uploads/2012/08/cat.png'},
				 				{
				 					ans: 'Answer 2-1',
				 					image: 'http://exmoorpet.com/wp-content/uploads/2012/08/cat.png'},
				 				{
				 					ans: 'Answer 3-1',
				 					image: 'http://exmoorpet.com/wp-content/uploads/2012/08/cat.png'},
				 				
				 				]},
				 {	
				 	question: 'Question 2',
				 	answers: [
				 				{
				 					ans: 'Answer 1-2',
				 					image: 'http://exmoorpet.com/wp-content/uploads/2012/08/cat.png'},
				 				{
				 					ans: 'Answer 2-2',
				 					image: 'http://exmoorpet.com/wp-content/uploads/2012/08/cat.png'},
				 				{
				 					ans: 'Answer 3-2',
				 					image: 'http://exmoorpet.com/wp-content/uploads/2012/08/cat.png'},
				 				{
				 					ans: 'Answer 4-2',
				 					image: 'http://exmoorpet.com/wp-content/uploads/2012/08/cat.png'},
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
			content += '<img src="' + questions[i].answers[j].image + '" width="200" height=100>';
			content += questions[i].answers[j].ans;
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
		
		for (var i = 0; i<questions.length; i++) {
			var q = $("#question-" + i).find('.active');
			if (q.length > 0) {
				item = q.find('input')[0].id;
				answers.push(item);
			} else {
				answers.push(null);
			}
		}
		
		$('#answer').html(answers);
		
		return false;
		
	});
	
});