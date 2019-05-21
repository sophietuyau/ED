$(document).ready(function() {
  var counter = 0;
  var score = 0;

  $("#next, .choices, #question, #count, #continue").hide();

  var quizQuestions = [{
  question:"Noah ..... fly to Rodrigues tomorrow.",
  choices:["to going", "goes to", "is going to","go to"],
  answer: 2
},
{
  question:"I have English classes .....",
  choices:["on Saturday afternoons.", "in Saturday afternoons.", "at Saturday afternoons.","by Saturday afternoons."],
  answer: 0 
},
{
  question:"I wanted an orange car, but they only had .....",
  choices:["a one red.", "one red.", "a red one.", "a red."],
  answer: 2
},
{
  question:"She ..... dinner with us last Friday",
  choices:["hadn't", "had no", "didn't have got", "didn't have"],
  answer: 3
},
{
  question:"Have you ..... ?",
  choices:["got any friends in Mahebourg", "not got no friends in Mahebourg", "in Mahebourg any friends","friends in Mahebourg got"],
  answer: 0
},
{
  question:"Choose the correct sentence:",
  choices:["He never comes after 2:30", "He never after 2:30 comes", "He comes never after 2:30","After 2:30 he never comes"],
  answer: 0
},
{
  question:"The woman.... by the table is his sister, not his mother.",
  choices:["whose", "is standing", "standing","stands"],
  answer: 2
},
{
  question:"You can meet me ..... you like.",
  choices:["soon", "whenever", "always","whatever"],
  answer: 1
},
{
  question:"I wish I ..... paid more attention to my English teacher.",
  choices:["have", "would have", "had","had had"],
  answer: 2
},
{
  question:"What an amazing holiday! We should have done this...",
  choices:["years back", "for years", "since years","in years"],
  answer: 0
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
            $("#score").text(" You have scored: " + score+ " out of 10");
            $(".quiz-app").css("background-image","url('../image/aptitudebg.jpg')");

            if(score >= 0 && score <= 3){
				$("#level").text(" You are a Beginner");
				
				$("#continue").on("click", function(){
					window.location.replace("../html/slowmain.html");
				});
            }
            else if(score > 4 && score <= 6){
				$("#level").text(" You are an Intermediate Learner");
            }
            else{
				$("#level").text(" You are Advanced Learner");
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