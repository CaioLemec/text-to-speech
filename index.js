const utterance = new SpeechSynthesisUtterance();

// CHANGE DE LANGUAGE?
//http://www.lingoes.net/en/translator/langcode.htm

utterance.lang = "en";
utterance.rate = 1.32;

function speak() {
	speechSynthesis.speak(utterance);
}

function stop() {
  speechSynthesis.cancel();
}

function setText(event) {
	utterance.text = event.target.innerText;
}