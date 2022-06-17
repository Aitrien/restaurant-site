import './bootstrap.min.css';
import './style.css';
import homePage from './home.js';
import aboutPage from './about.js';
import menuPage from './menu.js';
import contactPage from './contact.js';


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
		pageLink.id = pageName.toLowerCase() + "-link";
		pageLink.innerText = pageName;
		navPage.appendChild(pageLink);
		navbar.appendChild(navPage);
	});

	head.appendChild(navbar);
	container.appendChild(head);

	return container;
}
document.body.appendChild(header());

// div for content to be added to
const content = document.createElement('div');
content.classList.add('container');
document.body.appendChild(content);

content.appendChild(homePage());

function footer() {
	const foot = document.createElement('footer');
	foot.id = "sticky-footer"
	foot.classList.add("py-4", "text-white-50");
	foot.innerText = "Mock website made by Liam - ";

	const link = document.createElement('a');
	link.href = "https://github.com/Aitrien";
	link.innerText = "GitHub";

	foot.appendChild(link);

	return foot;
}
document.body.appendChild(footer());

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
}
