(function() 
 {
  var allQuestions = [{
    question: "If your lover asks you to do something morally questionable, what would you do?",
    options: ["Which lover?...", "Lifeline: Let me turn to the Gods", "If I love them, I would do it. Ride or die babyyy", "Nah, I only do that for myself", "Maybe, I'm ambiguous", "Depends on whether they have wrong me"],
    answer: 2
  }, {
    question: "What would be your ancient Greek weapon of choice to dispose of a loved one?",
    options: ["Two words: heavy cloth and axe", "Sacrifice to the Gods", "Knife and Heartlessness", "I'd get someone else to do it for me", "Haven't really given it a thought" , "The most expensive poison"],
    answer: 3
  }, {
    question: "What do you think about foreigners?",
    options: ["I don't really care unless she was connected to my husband...", "I dislike them, especially Trojans", "I don't see anything wrong with them","They can have tendencies of barbarians", "I think they're great!", "I don't really care..."],
    answer: 1
  },{
    question: "How much do you love your children?",
    options: ["Very much so. I would KILL anyone that messes with them...", "My duties to my country are more important", "Revenge is more important", "Power and money is more important", "Yes, they will be my heirs", "We started pretty rockily but now we get along well"],
    answer: 0
  }, {
    question: "What is your main goal?",
    options: ["Revenge because someone I loved was wrong", "Defeating my enemies", "Revenge because I was wronged", "Power and wealth", "To have a worthy heir", "Revenge until I realized I was wrong and now making sure that my husband doesn't find out that his new son's real dad is a god"],
    answer: 1
  },{
    question: "How do you expect your lover to help you in achieving your goals?",
    options: ["By dying", "By ignoring that I sacrificed my own daughter", "By suffering in grief", "By doing absolutely everything for me", "By helping me raise our child", "By not realizing that his new child is not his own"],
    answer: 0
  },{
    question: "What do you do after committing a crime?",
    options: ["Loudly boast about it to the witnesses", "Pretend like it never happened", "Flying away on a chariot pulled by dragons", "Make the most out of it", "I'm the king so I can do anything", "Hide the evidence and don't tell anyone"],
    answer: 0
  },{
    question: "Which Greek God would you ask for support from?",
    options: ["Nemesis", "Artemis", "Themis", "Aphrodite", "Apollo", "Athena"],
    answer: 3
  },{
    question: "What do you look for in a partner?",
    options: ["Someone who shares the same goals as me", "Someone willing to sacrifice thing (people) for the greater cause", "Someone who loves me back ;-;", "Someone with a high status in society", "Someone to make my (literal) queen", "I'm not picky"],
    answer: 2
  },{
    question: "Date idea?",
    options: ["Soaked in blood with a crowd of shocked old men. Need I say more?", "After a long war, enjoying a peaceful night at home where nothing bad is definitely going to happen", "Dismembering my brother and my fiance's uncle", "Me ruling the country and you're counting my gold ", "Touring the land I conquereds", "Shopping for expensive poisons"],
    answer: 0
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        var mf = 1;
        var m = 0;
        var item;
        for (var i=0; i<selectOptions.length; i++)
        {
          for (var j=i; j<selectOptions.length; j++)
          {
            if (selectOptions[i] == selectOptions[j])
              m++;
            if (mf<m)
            {
              mf=m; 
              item = selectOptions[i];
            }
          }
          m=0;
        }
        if(item == 0) {
          score.append('<center><img src="https://pbs.twimg.com/profile_images/1194332510735355904/W_B1ffGQ_400x400.jpg" style="width:50%"></center>');
          score.append('<center><h2>You are Clytemnestra!</h2></center>');
          score.append('<center>Your husband decided to sacrifice your daughter to fight in a war. You are pissed and kill him. Good new though, the lover that you took while your husband was gone understands you and still love you for who you are (not to mention he also had a grudge against your husband). Hope you do not have to kill your new husband.</center>');
        }
        if(item == 1) {
          score.append('<center><img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/MaskOfAgamemnon.jpg" style="width:50%"></center>');
          score.append('<center><h2>You are Agamemnon!</h2></center>');
          score.append('<center>You had to kill your daughter to fight against the Trojans. Now your wife is pissed and you know she is just going to kill you when uyou get home. Little do you know it was literally. Maybe picking up a mistress along the way was not a good idea.</center>');
        }
        if(item == 2) {
          score.append('<center><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Frederick_Sandys_-_Medea%2C_1866-1868.jpg/220px-Frederick_Sandys_-_Medea%2C_1866-1868.jpg" style="width:50%"></center>');
          score.append('<center><h2>You are Medea!</h2></center>');
          score.append('<center>You loved your husband dearly and gave everything for him, even hacking up your own brother so he can escape safely. However, he want to marry a princess for the power and wealth. He refuses to hold the promise he back back when you first met each other to be together. You decide the only way to hurt him as much as he hurt you is to kill the princess and your children. You flying into the sky on a chariot, deranged and believing you got the last laugh.</center>');
        }
        if(item == 3) {
          score.append('<center><img src="http://powersenglish6.weebly.com/uploads/3/7/9/6/37964767/5748690_orig.jpg" style="width:50%"></center>');
          score.append('<center><h2>You are Jason!</h2></center>');
          score.append('<center>You just want to be king like you should have been but that uncle of yours had to take over. Now your stuck with your annoying wife who does not let you marry the princess to achive your dreams of power. Ugh, a real lover would have understood. But your shocked and tramatized when she kills the princess and your own children and snears off into the sunset. "How will I become king now?," you mourn.</center>');
        }
        if(item == 4) {
          score.append('<center><img src="https://cdn.britannica.com/71/21771-050-099E3131/marble-herm-Euripides-original-Greek-Museo-Archeologico-330-bce.jpg" style="width:50%"></center>');
          score.append('<center><h2>You are Xuthus!</h2></center>');
          score.append('<center>You are the king of Athens and you are proud of your achivement, despite the fact that the Athenians are super racism. However, you and your wife have been having trouble havinng kids. You go to the Temple of Apollo at Delphi and you meet a young man who is apparently your son! You are confused how that works but happy to have a heir. Your wife and him seem to despise each other at first but they warm up and start getting along.</center>');
        }
        if(item == 5) {
          score.append('<center><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Cr%C3%A9%C3%BCse_fuyant_Troie.jpeg/220px-Cr%C3%A9%C3%BCse_fuyant_Troie.jpeg" style="width:50%"></center>');
          score.append('<center><h2>You are Kreousa!</h2></center>');
          score.append('<center>You and your husband are having trouble havin a baby. You go to the temple of Apollo to seek help. Some smug kid is there and he is apparently the child of your husband. "That a**hole must have cheated", you think. You and the kid try to kill each other but then Athena comes down and says that he is your and Apollos child. Immediately apologises to your son and you both decide to keep this hush-hush from your father. </center>');
        }
        return score;
  }
})();