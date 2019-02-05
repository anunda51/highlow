var output;
		var txtGuess;
		var btnAgain;

		var correct;
		var turns;
		var response;

		var guess;

		function tryAgain(){
			//initialize component
			output = document.getElementById("output");
			txtGuess = document.getElementById("txtGuess");
			btnAgain = document.getElementById("btnAgain");
			txtGuess.value = "";

			//hide again button
			btnAgain.style.display = "none";

			//generate random for correct answer
			correct = parseInt(Math.random()*100)

			//initialize count
			turns = 0;

			//initialize output
			output.innerHTML = "I'm thingking of a number between 0 and 100."
			output.innerHTML += "Guess my number, and I'll tell if you are too high, too low ,or correct."

			//make sure input text gets focus
			txtGuess.focus();
			console.log(correct);
		}

		function checkGuess(){
			//increment count
			turns++;

			//get guess from user
			guess = parseInt(txtGuess.value);

			if (guess < correct) {
				response = turns + ") Too Low :(";
			}else if(guess > correct){
				response = turns + ") Too High :o";
			}else if(guess == correct){
				response = turns + ") Correct!! :)";
				//show again button
				btnAgain.style.display = "block";
			}else{
				response += "Please enter a number "
			}
			output.innerHTML = response;
		}