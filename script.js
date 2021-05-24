var captcha_version = 11;
var captcha_done = false;
var captcha_label = document.currentScript.getAttribute('label');
var captcha_enemies = parseInt(document.currentScript.getAttribute('zombies'));
if( !captcha_enemies ){
    captcha_enemies = 4;
}

var captcha_html = '';
if( captcha_label ){
    captcha_html = '<p>' + captcha_label + '<br>';
}

captcha_html += '<iframe id="captcha" src="captcha.html?countdown=' + document.currentScript.getAttribute('countdown') + '&zombies=' + captcha_enemies + '&sound=' + document.currentScript.getAttribute('sound') + '" style="width:300px;height:150px;border:2px black solid;" ></iframe>';

if( captcha_label ){
    captcha_html += '</p>';
}

document.write(captcha_html);


window.addEventListener('message', function(e){
    captcha_done = true;
    document.getElementById('captcha').style.borderColor = 'black';
}, false);


document.getElementById('captcha').parentNode.parentNode.addEventListener('submit', function(){
    if ( !captcha_done ) {
        document.getElementById('captcha').style.borderColor = 'red';
        event.preventDefault();
        return;
    }
});
