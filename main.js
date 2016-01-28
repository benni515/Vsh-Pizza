(function Init() {
	var Pizzas = [["Chill",["Anchove.png","Chilli.png"]],["Bahamas",["Basil.png"]],["Vegan-Pezz",["Parika.png", "Tomatos.png","Camelbert.png","Spinach.png","Basil.png","Chilli.png"]],["Pepp n Potaoes",["friedpotatoes.png","pepperoni.png"]],["Chick n Souce",["chicken.png"]],["NotEven Vegan",["Parika.png", "Tomatos.png","Camelbert.png","Spinach.png","Basil.png","Chilli.png","pepperoni.png","chicken.png"]],["Would you like fries with that?",["Camelbert.png","Fries.png"]],["CnC",["Chilli.png","Camelbert.png"]]];
	var createdPizzas = [];
	function CreatePizza(Name, Toppings) {
		this.n = Name;
		this.t = Toppings;
		this.load = function loadpizza() {
			var div = document.getElementById("Top");
			while(div.firstChild){
		    	div.removeChild(div.firstChild);
			}
			for (var i = 0; i < this.t.length; i++) {
				var img = document.createElement("img");
				img.className = "Toppingsself";
				img.src = "Topings/" + this.t[i];
				var src = document.getElementById("Top");
				src.appendChild(img);
			};
		}
		this.create = function button() {
			var topins = document.getElementById("Selection");
			var thediv = document.createElement("div");
			thediv.className = "Sele";
			thediv.onclick = this.load.bind(this);
			var header = document.createElement("h1");
			header.innerHTML = this.n;
			var description = document.createElement("h2");
			for (var i = 0; i < this.t.length; i++) {
				description.innerHTML += this.t[i].substring(0,this.t[i].length-4) + ", ";
			};
			description.innerHTML = description.innerHTML.substring(0, description.innerHTML.length -2);
			thediv.appendChild(header);
			thediv.appendChild(description);
			topins.appendChild(thediv);
		}
	}
	for (var i = 0; i < Pizzas.length; i++) {
		createdPizzas[i] = new CreatePizza(Pizzas[i][0],Pizzas[i][1]);
		createdPizzas[i].create();
	};
})();