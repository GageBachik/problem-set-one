function letterCapitalize(sentence){
	var words = sentence.split(' ');
	var uppercasedSentence = [];
	for(var i=0; i < words.length; i++){
		var endOfWord = words[i].slice(1);
		uppercasedSentence.push(words[i][0].toUpperCase() + endOfWord);
	}
	console.log(uppercasedSentence.join(' '));
}

// letterCapitalize(prompt('Please enter an arbitrary sentence'));

function wordCount(sentence){
	var words = sentence.split(' ');
	var count = 0;
	for(var i=0; i < words.length; i++){
		var endOfWord = words[i].slice(1);
		count++;
	}
	console.log(count);
}

// wordCount(prompt('Please enter an arbitrary sentence'));

function primeTime(num){
	if(num > 1){

		if( num !== 3 && num % 3 === 0){
			console.log(false);
		}else if(num !==2 && num % 2 === 0){
			console.log(false);
		}else{
			console.log(true);
		}

	}else{
		console.log(false);
	}
}

primeTime(2);
primeTime(3);
primeTime(5);
primeTime(7);
primeTime(11);
primeTime(13);
primeTime(17);
primeTime(19);
primeTime(23);
primeTime(29);
primeTime(31);
primeTime(37);
primeTime(41);
primeTime(3061);