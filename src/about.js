import Scientist from './scientist.jpg';

export default function aboutPage() {
    const container = document.createElement('div');
	container.classList.add('page-container');

	const text = document.createElement('div');
	text.classList.add('text-container');

	const title = document.createElement('h1');
	title.classList.add('headline');
	title.innerText = "About us";

	const subtitle = document.createElement('p');
	subtitle.classList.add('about-subtitle');
	subtitle.innerText = "Creating ice cream full of sciency evidence-based goodness."

	const paragraph = document.createElement('p');
	paragraph.classList.add('text-block');
	paragraph.innerText = "Our world renowned scientists have made the biggest breakthrough of the century, finding the optimal ratio of ice to cream!\n\nOur ethically-sourced ice cream has been determined to leave you wanting more with none of the extra addiction compounds found in other leading brands.";

	text.appendChild(title);
	text.appendChild(subtitle);
	text.appendChild(paragraph);

	const aboutImage = new Image();
  	aboutImage.src = Scientist;
	aboutImage.classList.add('right-image');

	container.appendChild(text);
	container.appendChild(aboutImage);

	return container;
}