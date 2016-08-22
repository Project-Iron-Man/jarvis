var watson = require('watson-developer-cloud');
var creds = require('./credentials');
var Speaker = require('speaker');

var speaker = new Speaker({
	channels: 2,
	bitDepth: 16,
	sampleRate: 48000
})

var text_to_speech = watson.text_to_speech({
	username: creds.TTS_USERNAME,
	password: creds.TTS_PASSWORD,
	version: 'v1'
});

module.exports = {
	speak: function (input) {
		var params = {
			text: input,
			voice: 'en-US_MichaelVoice',
			accept: 'audio/l16; rate=48000; channels=2'
		}

		text_to_speech.synthesize(params).pipe(speaker);
	}
};
