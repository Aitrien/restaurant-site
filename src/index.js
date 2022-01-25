import './bootstrap.min.css';
import './style.css';
import IceCream from './homeimage.png';
import Scientist from './scientist.jpg';
import Starters from './restaurant_starters.csv';
import Mains from './restaurant_mains.csv';
import Sides from './restaurant_sides.csv';


let currentPage = "Home";

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


function swapPage(pageName) {
	if (currentPage !== pageName) {
		// clear elements from content div
		while (content.firstChild) {
			content.removeChild(content.lastChild);
		}
		let navs = [...document.getElementsByClassName('nav-link')];
		navs.forEach(nav => {
			if (nav.innerText == pageName) {
				nav.classList.add('active');
			}
			else {
				nav.classList.remove('active')
			}
		});

		// add new page content
		switch (pageName) {
			case "Home":
				content.appendChild(homePage());
				break;
			case "About":
				content.appendChild(aboutPage());
				break;
			case "Menu":
				content.appendChild(menuPage());
				break;
			case "Contact":
				content.appendChild(contactPage());
				break;
		}
		currentPage = pageName;

	}

	console.log(pageName);
}

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
	title.innerText = "Fresh Ice Cream";

	const menuLink = document.createElement('a');
	menuLink.href = "#";
	menuLink.classList.add('menu-link')

	const subtitle = document.createElement('h4');
	subtitle.innerText = "Check out our flavours >";
	subtitle.addEventListener('click', () => swapPage("Menu"));

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
	title.innerText = "About us";

	const paragraph = document.createElement('p');
	paragraph.innerText = "Our world renowned scientists have made the biggest breakthrough of the century, finding the optimal ratio of ice to cream!\n\nOur ethically-sourced ice cream has been determined to leave you wanting more with none of the extra addiction compounds found in other leading brands.";

	text.appendChild(title);
	text.appendChild(paragraph);

	const aboutImage = new Image();
  	aboutImage.src = Scientist;
	aboutImage.classList.add('right-image');

	container.appendChild(text);
	container.appendChild(aboutImage);

	return container;
}

function menuPage() {
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

function contactPage() {
	const container = document.createElement('div');
	container.classList.add('page-container');

	//const 

	const map = document.createElement('iframe');
	map.id = "map";
	map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46396.57488298969!2d172.63187833589654!3d-43.38149993135463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d319167a4416f03%3A0x500ef8684797a90!2sKaiapoi!5e0!3m2!1sen!2snz!4v1643096656325!5m2!1sen!2snz";
	map.loading = "lazy";
	map.allowFullscreen = "";
	container.appendChild(map);

	return container
}

content.appendChild(homePage());
//content.appendChild(aboutPage());

//content.appendChild(component());

//console.log("pre-flight check");