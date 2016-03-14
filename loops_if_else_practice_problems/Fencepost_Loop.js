var n = 9;
var str = '';
var tempStr='';
var i=1;
while (i<=n) {
	if (i!==n) {
		if (i%2===0) {
			tempStr="<p class='even'>" + i + "</p><hr>";
		}
		else {
			tempStr="<p class='odd'>" + i + "</p><hr>";
		}
	}
	else {
	 	if (i%2===0) {
			tempStr="<p class='even'>" + i + "</p>";
		}
		else {
			tempStr="<p class='odd'>" + i + "</p>";
		}
	}
	str=str+tempStr;
	i++;
}
console.log(str);
document.querySelector("p").innerHTML=str;