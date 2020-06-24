function makeBasicInfo(basic_info_dict){
		
	var div = document.createElement('div');
	div.id = "b_div";
	
	// Div del item
	var itemdiv = document.createElement('div');
	
	// Nombre
	var name = document.createElement('h1');
	name.appendChild(document.createTextNode(basic_info_dict[0]));
	name.id = "name";
			
	// Info basica: Email, Telefono, Dirección
	var info_div = document.createElement('div');
	info_div.id = "info_div";
	info_div.appendChild(document.createTextNode(basic_info_dict[2]));
	info_div.appendChild(document.createElement('br'));
	info_div.appendChild(document.createTextNode(basic_info_dict[1]));
	info_div.appendChild(document.createElement('br'));
	info_div.appendChild(document.createTextNode(basic_info_dict[3]));
	info_div.appendChild(document.createElement('br'));
	
	// Perfil
	var profile = document.createElement('p');
	var b = document.createElement('b');
	b.appendChild(document.createTextNode("Perfil"));
	b.id = "bd";
	profile.appendChild(b);
	profile.appendChild(document.createElement('br'));
	profile.appendChild(document.createTextNode(basic_info_dict[4]));
	profile.id = "profile";
	
	// Agrega elementos al div del item
	itemdiv.appendChild(name);
	itemdiv.appendChild(info_div);
	itemdiv.appendChild(profile);
	
	div.appendChild(itemdiv);
	
	return div;
}

function makeSections(sections_dict){
	
	var div = document.createElement('div');
	div.id = "s_div";
	
	for (var k1 in sections_dict){
		
		// Sección
		var section_div = document.createElement('div');
		var header = document.createElement('h2');
		header.appendChild(document.createTextNode(k1));
		section_div.appendChild(header);
		section_div.appendChild(document.createElement('hr'));
		
		// Lista
		var list = document.createElement('ul');

		for (var k2 in sections_dict[k1]){
			
			// Item específico de la lista
			var item = document.createElement('li');			
					
			// Div del item	
			var itemdiv = document.createElement('d');
			itemdiv.id = "itemdiv";
			
			// Titulo
			var title = document.createElement('p');
			title.appendChild(document.createTextNode(sections_dict[k1][k2][0]));
			title.id = "title";
			
			// Subtitulo
			var subtitle = document.createElement('p');
			subtitle.appendChild(document.createTextNode(sections_dict[k1][k2][1]));
			subtitle.id = "subtitle";
			
			// Fechas
			var datediv = document.createElement('div');				
			var d_sec1 = document.createElement('div');
			var d_sec2 = document.createElement('div');
			d_sec1.appendChild(document.createTextNode(sections_dict[k1][k2][2]));
			d_sec2.appendChild(document.createTextNode(sections_dict[k1][k2][3]));
			d_sec1.id = "L_date";
			d_sec2.id = "R_date";
			datediv.append(d_sec1);
			datediv.append(d_sec2);
			itemdiv.id = "datediv";

			// Detalles
			var details = document.createElement('p');
			details.appendChild(document.createTextNode(sections_dict[k1][k2][4]));
			details.id = "details";	
			
			// Agrega elementos al div del item
			itemdiv.appendChild(title);
			itemdiv.appendChild(subtitle);
			itemdiv.appendChild(datediv);
			itemdiv.appendChild(details);
			
			// Agrega item a la lista
			item.appendChild(itemdiv);
			list.appendChild(item);
			
		}
		// Agrega lista a la sección
		section_div.appendChild(list);
		div.appendChild(section_div);
	}
	
	return div;
}

function reset() {
	var element1 = document. getElementById("b_div");
	element1.parentNode.removeChild(element1);
	var element2 = document. getElementById("s_div");
	element2.parentNode.removeChild(element2);
	
}