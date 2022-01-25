import Starters from './restaurant_starters.csv';
import Mains from './restaurant_mains.csv';
import Sides from './restaurant_sides.csv';

export default function menuPage() {
    const container = document.createElement('div');
	container.classList.add('menu-container');

	const title = document.createElement('h1');
	title.innerText = "Menu";
	container.appendChild(title);
	
	let menuSections = [Starters, Mains, Sides];
	let menuSubtitles = ["Starters", "Mains", "Sides"];

	for (let i = 0; i < menuSections.length; i++) {
		const subtitle = document.createElement('h2');
		subtitle.classList.add('menu-subtitle');
		subtitle.innerText = menuSubtitles[i];
		container.appendChild(subtitle);

		for (let j = 0; j < menuSections[i].length; j++) {
			const menuCard = document.createElement('div');
			menuCard.classList.add('menu-card');
			
			const dishName = document.createElement('h2');
			dishName.innerText = menuSections[i][j][0];
			menuCard.appendChild(dishName);
	
			const dishDescription = document.createElement('p');
			dishDescription.innerText = menuSections[i][j][1];
			menuCard.appendChild(dishDescription);
	
			const dishPrice = document.createElement('p');
			dishPrice.classList.add('price');
			dishPrice.textContent = menuSections[i][j][2];
			menuCard.appendChild(dishPrice);
	
			container.appendChild(menuCard);
		}
	};

	return container;
}