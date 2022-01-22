import './bootstrap.min.css';
import './style.css';
import IceCream from './homeimage.png';
import Scientist from './scientist.jpg';


function swapPage(pageName) {
	console.log(pageName);
}

function header() {
	const container = document.createElement('div');
	container.classList.add('container');

	const head = document.createElement('header');
	head.classList.add('d-flex', 'flex-wrap', 'justify-content-center', 'py-3', 'mb-4', 'border-bottom');

	const titlelink = document.createElement('a')
	titlelink.classList.add('d-flex', 'align-items-center', 'mb-3', 'mb-md-0', 'me-md-auto', 'text-dark', 'text-decoration-none');

	const pageTitle = document.createElement('span');
	pageTitle.classList.add('fs-4');
	pageTitle.innerText = 'Ice Emporium';
	titlelink.appendChild(pageTitle);
	head.appendChild(titlelink);

	const navbar = document.createElement('ul');
	navbar.classList.add('nav', 'nav-pills');

	// home nav option handled first to add 'active' class
	const navHome = document.createElement('li');
	navHome.classList.add('nav-item');
	const homeLink = document.createElement('a');
	homeLink.href = "#";
	homeLink.addEventListener('click', () => swapPage('Home'));
	homeLink.classList.add('nav-link', 'active');
	homeLink.textContent = "Home";
	navHome.appendChild(homeLink)
	navbar.appendChild(navHome);

	// loop through the rest of the nav pages
	let tabs = ['About', 'Menu', 'Contact'];
	tabs.forEach(pageName => {
		let navPage = document.createElement('li');
		navPage.classList.add('nav-item');
		let pageLink = document.createElement('a');
		pageLink.href = "#";
		pageLink.addEventListener('click', () => swapPage(pageName));
		pageLink.classList.add('nav-link');
		pageLink.innerText = pageName;
		navPage.appendChild(pageLink);
		navbar.appendChild(navPage);
	});

	head.appendChild(navbar);
	container.appendChild(head);

	return container;
}


// create fixed elements
document.body.appendChild(header());
const content = document.createElement('div');
content.classList.add('container');
document.body.appendChild(content);


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
	text.classList.add('text-container');

	const title = document.createElement('h1');
	title.classList.add('headline');
	//title.innerText = "Fancy \r\nIce Cream";
	title.innerText = "D-LISH Ice Cream";

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
	homeImage.classList.add('right-image');

	container.appendChild(text);
	container.appendChild(homeImage);

	return container;
}

function aboutPage() {
	const container = document.createElement('div');
	container.classList.add('page-container');

	const text = document.createElement('div');
	text.classList.add('text-container');

	const title = document.createElement('h1');
	title.classList.add('headline');
	title.innerText = "About you";

	const paragraph = document.createElement('p');
	paragraph.innerText = "Scientifically proven to deliver sugar!\nOur ethically-sourced ice cream has been determined to leave you wanting more with none of the extra chemical compounds found in other leading brands.";

	text.appendChild(title);
	text.appendChild(paragraph);

	const aboutImage = new Image();
  aboutImage.src = Scientist;
	aboutImage.classList.add('right-image');

	container.appendChild(text);
	container.appendChild(aboutImage);

	return container;
}

content.appendChild(homePage());
//content.appendChild(aboutPage());

//content.appendChild(component());

console.log("pre-flight check");