var keyboard =  {
				'0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
				'1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
				'2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
				'length': 3
			}

var hash = {
	'q':'qq.com','b':'bilibili.com','t':'taobao.com','z':'zhihu.com','d':'didiaokan.com','w':'weibo.com'
}



generateKeyboard(keyboard,hash);

listenEvents(hash);

function listenEvents(hash){
	document.onkeypress = function(keyDown){
		var key = keyDown['key'];
	//	var whichButton = document.querySelector(`button[id="${key}"]`);
	//	var whichKey = whichButton.parentNode;
	//	whichKey.classList.add('playing');
		var hashInlocalStorage = JSON.parse(localStorage.getItem('websites') || 'null');
		if (hashInlocalStorage) {
			hash = hashInlocalStorage;
		}
		var website = hash[key];

		if (website!= undefined) {
			window.open('http://'+website,'_blank');
		}
		else
		{
			alert('It is empty, please edit');
		}
	}	
}

function generateKeyboard(keyboard,hash){
	for (var i = keyboard.length - 1; i >= 0; i--) {
		var div = document.createElement('div');
		div.className = 'row';
		main.appendChild(div);

		var row = keyboard[2-i];
		for (var j = 0; j < row.length; j++) {
			var span = createSpan(row[j]);
			var button = createButton(row[j]);
			var kbd = document.createElement('kbd');
			kbd.className = 'sound';
			kbd.appendChild(button);
			kbd.appendChild(span);
			div.appendChild(kbd);	


		}
	}


}

function createSpan(content){
	var span = document.createElement('span');
	span.textContent = content;
	span.className = "text";
	return span;
}

function createButton(content){
	var button = document.createElement('button');
	button.id = content;
	button.className = 'button';
	button.textContent = 'Edit';
	button.onclick = function(event){
		var buttonDown = event.target;
		var key = buttonDown.id;
		var x = prompt('give a website');
		hash[key] =  x;
		localStorage.setItem('websites',JSON.stringify(hash));
		};
	return button;
}