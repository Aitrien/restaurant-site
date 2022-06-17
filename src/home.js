import IceCream from './homeimage.png';

export default function homePage() {
    const container = document.createElement('div');
	container.classList.add('page-container');

	const text = document.createElement('div');
	text.classList.add('text-container');

	const title = document.createElement('h1');
	title.classList.add('headline');
	title.innerText = "Fresh Ice Cream";

	const menuLink = document.createElement('a');
	menuLink.href = "#";
	menuLink.classList.add('menu-link');

	const subtitle = document.createElement('h4');
	subtitle.innerText = "Check out our flavours >";
	subtitle.addEventListener('click', () => {
		//swapPage("Menu")
		const menuNav = document.getElementById('menu-link');
		menuNav.click();
	});

	menuLink.appendChild(subtitle);
	text.appendChild(title);
	text.appendChild(menuLink);

	const homeImage = new Image();
  	homeImage.src = IceCream;
	homeImage.classList.add('right-image', 'hovering-image');

	container.appendChild(text);
	container.appendChild(homeImage);

	return container;
}