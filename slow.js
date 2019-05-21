$(document).ready(function() {
  var counter = 0;
  var score = 0;

  $("#next, .choices, #question, #count, #continue").hide();

  var quizQuestions = [{
  question:".... you like him?",
  choices:["Does", "Do", "Doing","Doesn\'t"],
  answer: 1
},
{
  question:"He .... go home sometimes.",
  choices:["Does", "Do", "Doing","Doesn\'t"],
  answer: 0 
},
{
  question:"They .... finished their homework",
  choices:["has", "having", "have", "has not"],
  answer: 2
},
{
  question:"They will .... eating when we arrive",
  choices:["be", "been", "being", "are"],
  answer: 0
},
{
  question:"I .... not see her",
  choices:["does", "did", "doing","doesn\'t"],
  answer: 1
},
{
  question:"..... he arrived yet?",
  choices:["Have", "Had", "Does","Has"],
  answer: 3
},

]
  
  $("#next , #Start").on("click", function(){
        
    $(".choices, .questions").empty();
	$("#Start, h2").hide();
	$("#next, .choices ,h3, #count").show();
	$(".quiz-app").css("background-image","none");

    function incrementCounter(){
        $(
                    "#count").text(counter+1);
          
    
      };    
      
        
      if(quizQuestions[counter]){
          $(".questions").append("<h2>" + quizQuestions[counter].question + "</h2>")
            
  for(var i = 0 ; i < quizQuestions[counter].choices.length;i+=1){
    $(".choices").append( "<ul>" + "<input type='radio' name='radio' value=' " + i + " '/>" + quizQuestions[counter].choices[i] + "</ul>");
  } 
                incrementCounter();
counter++
            }
        else //no more question, show total
        {
			$("#question, #count, #next").hide();
			$("#continue").show();
            $("#score").text(" You have scored: " + score+ " out of 6");
            $(".quiz-app").css("background-image","url('../image/aptitudebg.jpg')");

            if(score >= 0 && score <= 5){
				$("#level").text("Oops, you are unfortunately not ready to proceed to the next level");
				
				
				$("#continue").on("click", function(){
					window.location.replace("../html/slowmain.html");
				});
            }
			else{
				$("#level").text("Congratulations, you passed this level");
			}
           
        }


});

    $("body").on("click","input", function() {

          $("input[type='radio']:checked").val();

          var $selectedText=$("input[type='radio']:checked").val();
         
  if($selectedText==quizQuestions[counter-1].answer) {
            score +=1;
          }
      
        
          
    });
  
});