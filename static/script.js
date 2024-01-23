// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});


function preloadImage(url) {
    var img = new Image();
    img.src = url;
}


console.clear();
class GERADOR {
	constructor() {
		this.visivel = [true, true, true];
		this.all_styles = [
			{ // Parte 3
				h_mobi: 1,
				estado: [[ // Sol, brilho
					{
						url: "/static/img/F-3200-125.png",
						w: 46,
						h: 46,
						x: 2,
						y: 0
					},
					{
						url: "/static/img/F-3200-101.png",
						w: 108,
						h: 103,
						x: -31,
						y: -28
					}
				],
			 	[ // Terra, brilho
					{
						url: "/static/img/F-3200-146.png",
						w: 43,
						h: 43,
						x: 4,
						y: 3
					},
					{
						url: "/static/img/F-3200-67.png",
						w: 140,
						h: 140,
						x: -48,
						y: -48
					}
				],
				[ // Lua, brilho
					{
						url: "https://lh3.google.com/u/0/d/0B1-7FySnIgnJY1ZnNnlnbnloRUk=w923-h639-iv1",
						w: 43,
						h: 43,
						x: 4,
						y: 3
					},
					{
						url: "https://lh3.google.com/u/0/d/0B1-7FySnIgnJM1NmdnNrUGtaN28=w923-h639-iv1",
						w: 140,
						h: 140,
						x: -48,
						y: -48
					}
				]]
			},
			{ // Parte 2
				h_mobi: 1.8,
				estado: [[ // Polvo
					{
						url: "https://lh3.google.com/u/0/d/0B1-7FySnIgnJcndkNm1hZHUtX00=w923-h639-iv1",
						w: 57,
						h: 111,
						x: -1,
						y: 33
					},
					{
						url: "https://lh3.google.com/u/0/d/0B1-7FySnIgnJeXdGMTVpTk1ZTTA=w923-h639-iv1",
						w: 76,
						h: 106,
						x: -2,
						y: -8
					},
					{
						url: "https://goo.gl/L4y2af",
						w: 76,
						h: 106,
						x: -2,
						y: -13
					},
					{
						url: "https://goo.gl/Fx8jYZ",
						w: 76,
						h: 106,
						x: -5,
						y: -7
					}
				],
			 	[ // Águia
					{
						url: "https://bit.ly/2uG0YET",
						w: 80,
						h: 86,
						x: -18,
						y: 32
					},
					{
						url: "https://goo.gl/VJ3ESV",
						w: 76,
						h: 106,
						x: 13,
						y: -18
					},
					{
						url: "https://goo.gl/7rNytS",
						w: 76,
						h: 106,
						x: 9,
						y: -21
					},
					{
						url: "https://goo.gl/LqCq4s",
						w: 76,
						h: 106,
						x: 11,
						y: -18
					}
				],
				[ // ??
					{
						url: "https://bit.ly/2fsIxlh",
						w: 59,
						h: 101,
						x: -3,
						y: 32
					},
					{
						url: "https://goo.gl/FMu4Ji",
						w: 76,
						h: 106,
						x: -7,
						y: -16
					},
					{
						url: "https://goo.gl/D5gNBe",
						w: 76,
						h: 106,
						x: 0,
						y: -12
					},
					{
						url: "https://goo.gl/jjFmTj",
						w: 76,
						h: 106,
						x: -6,
						y: -9
					}
				]]
			},
			{ // Parte 1
				h_mobi: 1.3,
				estado: [[ // Pé polvo
					{
						url: "https://lh3.google.com/u/0/d/0B1-7FySnIgnJQ3IwbjhDZlNOOVk=w923-h639-iv1",
						w: 58,
						h: 79,
						x: 0,
						y: 88
					},
					{
						url: "https://bit.ly/2uFIcxo",
						w: 115,
						h: 121,
						x: -32,
						y: -61
					},
					{
						url: "https://bit.ly/2vm0uFU",
						w: 115,
						h: 121,
						x: -32,
						y: -61
					},
					{
						url: "https://goo.gl/LwctYo",
						w: 115,
						h: 121,
						x: -32,
						y: -61
					}
				],
			 	[ // Pé águia
					{
						url: "https://bit.ly/2fsmFXe",
						w: 57,
						h: 76,
						x: 2,
						y: 88
					},
					{
						url: "https://bit.ly/2uFIcxo",
						w: 115,
						h: 121,
						x: -32,
						y: -61
					},
					{
						url: "https://bit.ly/2vm0uFU",
						w: 115,
						h: 121,
						x: -32,
						y: -61
					},
					{
						url: "https://goo.gl/LwctYo",
						w: 115,
						h: 121,
						x: -32,
						y: -61
					}
				],
				[ // Pé ??
					{
						url: "https://lh3.google.com/u/0/d/0B1-7FySnIgnJRUI0elptcHplZHM=w923-h639-iv1",
						w: 56,
						h: 78,
						x: 3,
						y: 88
					},
					{
						url: "https://bit.ly/2uFIcxo",
						w: 115,
						h: 121,
						x: -32,
						y: -61
					},
					{
						url: "https://bit.ly/2vm0uFU",
						w: 115,
						h: 121,
						x: -32,
						y: -61
					},
					{
						url: "https://goo.gl/LwctYo",
						w: 115,
						h: 121,
						x: -32,
						y: -61
					}
				]]
			}
		];
		this.style_sele = [0, 0, 0];
		this.luz = 0;
		this.fundo = 0;
	};
	
	changeStyle(dir, style) {
		this.style_sele[style] += dir;
		if (this.style_sele[style] < 0)
			this.style_sele[style] = this.all_styles[style].estado.length - 1;
		else if (this.style_sele[style] >= this.all_styles[style].estado.length)
			this.style_sele[style] = 0;
		
		this.show();
	}
	
	update(element) {
		let checkboxes = document.querySelectorAll("#estilos input[type='checkbox']");
		this.visivel[0] = checkboxes[0].checked;
		this.visivel[1] = checkboxes[1].checked;
		this.visivel[2] = checkboxes[2].checked;
		if (!this.visivel[2]) {
			document.querySelector("#luz *[type='radio']").checked = true;
		}
		
		let cor = document.querySelectorAll("#luz input[type='radio']");
		for (let i = 0; i < cor.length; i++)
			if (cor[i].checked)
				this.luz = i;
		
		let fundo = document.querySelectorAll("#fundo input[type='radio']");
		for (let i = 0; i < fundo.length; i++)
			if (fundo[i].checked)
				this.fundo = i;
		
		let espe = document.querySelectorAll("#especiais input[type='radio']");
		for (let i = 0; i < espe.length; i++)
			if (espe[i] == element && espe[i].checked) {
				this.visivel = [1, 1, 1];
				switch (i) {
					case 0:
						this.style_sele = [0, 1, 1];
						this.luz = 1;
						break;
					case 1:
						this.style_sele = [1, 2, 2];
						this.luz = 2;
						break;
					case 2:
						this.style_sele = [2, 0, 0];
						this.luz = 3;
						break;
					case 3:
						this.style_sele = [1, 0, 1];
						this.luz = 2;
				}
			}
		
		return this;
	}
	
	updateRevert(element) {
		let checkboxes = document.querySelectorAll("#estilos input[type='checkbox']");
		checkboxes[0].checked = this.visivel[0];
		checkboxes[1].checked = this.visivel[1];
		checkboxes[2].checked = this.visivel[2];
		
		let cor = document.querySelectorAll("#luz input[type='radio']");
		for (let i = 0; i < cor.length; i++)
			cor[i].checked = this.luz == i;
		
		let fundo = document.querySelectorAll("#fundo input[type='radio']");
		for (let i = 0; i < fundo.length; i++)
			fundo[i].checked = this.fundo == i;
		
		let espe = document.querySelectorAll("#especiais input[type='radio']");
		espe[0].checked = this.visivel.equals([1, 1, 1]) && this.style_sele.equals([0, 1, 1]) && this.luz == 1;
		espe[1].checked = this.visivel.equals([1, 1, 1]) && this.style_sele.equals([1, 2, 2]) && this.luz == 2;
		espe[2].checked = this.visivel.equals([1, 1, 1]) && this.style_sele.equals([2, 0, 0]) && this.luz == 3;
		espe[3].checked = this.visivel.equals([1, 1, 1]) && this.style_sele.equals([1, 0, 1]) && this.luz == 2;

		return this;
	}
	
	show(element) {
		this.updateRevert(element);
		
		let prev = document.getElementById("preview");
		prev.innerHTML = "";
		
		let bg_images = "",  bg_bland_mode = "", bg_size = "", bg_position = "", bg_repeat = "";
		let x = 161, y = 85;
		if (this.visivel[0]) {
			let this_x = x+this.all_styles[0].estado[this.style_sele[0]][0].x,
				this_y = y+this.all_styles[0].estado[this.style_sele[0]][0].y;
			
			bg_images += "url("+this.all_styles[0].estado[this.style_sele[0]][0].url+"), ";
			bg_bland_mode += "hard-light, ";
			bg_size += this.all_styles[0].estado[this.style_sele[0]][0].w+"px "+this.all_styles[0].estado[this.style_sele[0]][0].h+"px, ";
			bg_position += this_x+"px "+this_y+"px, ";
			bg_repeat += "no-repeat, ";
			
			bg_images += "url("+this.all_styles[0].estado[this.style_sele[0]][1].url+")";
			bg_bland_mode += "screen";
			bg_size += this.all_styles[0].estado[this.style_sele[0]][1].w+"px "+this.all_styles[0].estado[this.style_sele[0]][1].h+"px";
			bg_position += this_x+this.all_styles[0].estado[this.style_sele[0]][1].x+"px "+(this_y+this.all_styles[0].estado[this.style_sele[0]][1].y)+"px";
			bg_repeat += "no-repeat";
		}
		if (this.visivel[1]) {
			let this_x = x+this.all_styles[1].estado[this.style_sele[1]][0].x, this_y = y+this.all_styles[1].estado[this.style_sele[1]][0].y;
			if (this.visivel[0]) {
				bg_images += ", ";
				bg_bland_mode += ", ";
				bg_size += ", ";
				bg_position += ", ";
				bg_repeat += ", ";
			}
			if (Number(this.luz)) {
				bg_images += "url("+this.all_styles[1].estado[this.style_sele[1]][this.luz].url+"), ";
				bg_bland_mode += "screen, ";
				bg_size += this.all_styles[1].estado[this.style_sele[1]][this.luz].w+"px "+this.all_styles[1].estado[this.style_sele[1]][this.luz].h+"px, ";
				bg_position += (this_x+this.all_styles[1].estado[this.style_sele[1]][this.luz].x)+"px "+(this_y+this.all_styles[1].estado[this.style_sele[1]][this.luz].y)+"px, ";
				bg_repeat += "no-repeat, ";
			}
			bg_images += "url("+this.all_styles[1].estado[this.style_sele[1]][0].url+")";
			bg_bland_mode += "normal";
			bg_size += this.all_styles[1].estado[this.style_sele[1]][0].w+"px "+this.all_styles[1].estado[this.style_sele[1]][0].h+"px";
			bg_position += this_x+"px "+this_y+"px";
			bg_repeat += "no-repeat";
		}
		if (this.visivel[2]) {
			let this_x = x+this.all_styles[2].estado[this.style_sele[2]][0].x,
				this_y = y+this.all_styles[2].estado[this.style_sele[2]][0].y;
			if (this.visivel[0] || this.visivel[1]) {
				bg_images += ", ";
				bg_bland_mode += ", ";
				bg_size += ", ";
				bg_position += ", ";
				bg_repeat += ",";
			}
			if (Number(this.luz)) {
				bg_images += "url(https://bit.ly/2vml6ha), ";
				bg_bland_mode += "normal, ";
				bg_size += "44px 27px, ";
				bg_position += (x+3)+"px "+(y+98)+"px, ";
				bg_repeat += "no-repeat, ";
				
				bg_images += "url("+this.all_styles[2].estado[this.style_sele[2]][this.luz].url+"), ";
				bg_bland_mode += "screen, ";
				bg_size += this.all_styles[2].estado[this.style_sele[2]][this.luz].w+"px "+this.all_styles[2].estado[this.style_sele[2]][this.luz].h+"px, ";
				bg_position += (this_x+this.all_styles[2].estado[this.style_sele[2]][this.luz].x)+"px "+(this_y+this.all_styles[2].estado[this.style_sele[2]][this.luz].y)+"px, ";
				bg_repeat += "no-repeat, ";
			}
			bg_images += "url("+this.all_styles[2].estado[this.style_sele[2]][0].url+")";
			bg_bland_mode += "normal";
			bg_size += this.all_styles[2].estado[this.style_sele[2]][0].w+"px "+this.all_styles[2].estado[this.style_sele[2]][0].h+"px";
			bg_position += this_x+"px "+this_y+"px";
			bg_repeat += "no-repeat";
		}
		if (this.visivel[0] || this.visivel[1] || this.visivel[2]) {
			bg_images += ", ";
			bg_bland_mode += ", ";
			bg_size += ", ";
			bg_position += ", ";
			bg_repeat += ", ";
		}
		switch (Number(this.fundo)) {
			case 0:
				bg_images += "url(https://habboemotion.com/resources/generalscripts/generatorv2/img/piso.png)";
				break;
			case 1:
				bg_images += "linear-gradient(#fff, #fff)";
				break;
			case 2:
				bg_images += "linear-gradient(#f00, #f00)";
				break;
			case 3:
				bg_images += "linear-gradient(#0f0, #0f0)";
				break;
			case 4:
				bg_images += "linear-gradient(#00f, #00f)";
				break;
			case 5:
				bg_images += "linear-gradient(#000, #000)";
				break;
		}
		bg_bland_mode += "normal";
		bg_size += "32px";
		bg_position += "center";
		bg_repeat += "repeat";
		
		prev.style.backgroundImage = bg_images;
		prev.style.backgroundBlendMode = bg_bland_mode;
		prev.style.backgroundSize = bg_size;
		prev.style.backgroundPosition = bg_position;
		prev.style.backgroundRepeat = bg_repeat;
		
		return this;
	}
}

var gerador = new GERADOR();
for (let i = 0; i < gerador.all_styles.length; i++) {
	let x = gerador.all_styles[i];
	for (let j = 0; j < x.estado.length; j++) {
		let y = x.estado[j];
		for (let k = 0; k < y.length; k++) {
			preloadImage(y[k].url);
		}
	}
}
gerador.update().show();

var inputs = document.getElementsByTagName("input"); 
for (let i = 0; i < inputs.length; i++){
   inputs[i].onchange = () => gerador.update(inputs[i]).show(inputs[i]);
}