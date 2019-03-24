function nextLetter(l, k){
	    if (l==' ')
	    	return ' ';
        var prev = l.charCodeAt(0);
        var next = prev+k;
        if (next > 122)
        	next = next - 122 + 96;
        if(next < 97)
        	next = next - 97 + 123 ;
        return 	String.fromCharCode(next);
    }


function encrypt()
{
	var text = document.getElementById('textarea1').value.toLowerCase();
	var crypt_num1 = document.getElementById('crypt_num1').value;

	console.log(text);
	console.log(crypt_num1);

	var out = '' ;
    for( var i=0;i< text.length;i++)
    {
    	out += nextLetter(text[i], parseInt(crypt_num1));
    }

    console.log(out);

    var res = 'Encrypted text for : ' + text + '\n';
    res += '<h4>'+out+'</h4>';

    document.getElementById('result').innerHTML = res;
}

function decrypt()
{
	var text = document.getElementById('textarea2').value.toLowerCase();
	var crypt_num1 = document.getElementById('crypt_num2').value;

	console.log(text);
	console.log(crypt_num1);

	var out = '' ;
    for( var i=0;i< text.length;i++)
    {
    	out += nextLetter(text[i], -1 * parseInt(crypt_num1));
    }

    console.log(out);

    var res = 'Decrypted text for : ' + text + '\n';
    res += '<h4>'+out+'</h4>';
    document.getElementById('result').innerHTML = res;
}


console.log('engine chalu');
