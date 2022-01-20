import './bootstrap.min.css';
import './style.css';
import IceCream from './homeimage.png';

const content = document.getElementById('content');
content.classList.add('container');

// function creates a basic html element and returns it
function component() {
	const element = document.createElement('a');

	element.innerHTML = 'Content check';
	element.href = "#";
	element.classList.add('btn', 'btn-success');

	return element;
}

function homePage() {
	const container = document.createElement('div');
	container.classList.add('page-container');

	const text = document.createElement('div');

	const title = document.createElement('h1');
	title.classList.add('headline');
	title.innerText = "Fancy \r\nIce Cream";

	const menuLink = document.createElement('a');
	menuLink.href = "#";
	menuLink.classList.add('menu-link')

	const subtitle = document.createElement('h4');
	subtitle.innerText = "Check out our flavours >";

	menuLink.appendChild(subtitle);
	text.appendChild(title);
	text.appendChild(menuLink);

	const homeImage = new Image();
  homeImage.src = IceCream;
	homeImage.classList.add('home-image');

	container.appendChild(text);
	container.appendChild(homeImage);

	return container;
}

content.appendChild(homePage());

//content.appendChild(component());

console.log("pre-flight check");