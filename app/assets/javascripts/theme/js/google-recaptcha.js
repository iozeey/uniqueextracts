/*---------------------------------------*/
/*           Google Recaptcha            */
/*---------------------------------------*/
var enableBtn = function () {
    talkBtn.disabled = false;
}
var disableBtn = function () {
    talkBtn.disabled = true;
}

var recaptchaCallback = function () {
	if(document.getElementById('site-key')){
	    visibleRecaptcha = grecaptcha.render('google-recaptcha', {
	        'sitekey': document.getElementById('site-key').value,
	        'callback': enableBtn, 'expired-callback': disableBtn,
	        'hl': 'en'
	    });
	}
};