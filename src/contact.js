export default function contactPage() {
    const container = document.createElement('div');
	container.classList.add('page-container');

	const textSide = document.createElement('div');
	textSide.classList.add('text-container');

	const title = document.createElement('h1');
	title.classList.add('contact-headline');
	title.innerText = "Questions?";
	textSide.appendChild(title);

	const contacts = document.createElement('p');
	contacts.innerText = "Tel: 123-456-7890 \nEmail: info@restaurant.com\nAddress: 123 Fourth Street, Antarctica\n\nOpening Hours: \nMon - Fri: 12pm - 10pm\n​​Saturday: 12pm - 4pm\nSunday: 12pm - 8pm";
	contacts.classList.add('text-block');
	textSide.appendChild(contacts);

	container.appendChild(textSide);

	const mapSide = document.createElement('div');

	const map = document.createElement('iframe');
	map.id = "map";
	map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26893.33514137419!2d166.64435820831739!3d-77.84011904210483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaf773973ada5b34d%3A0xe241f2716549c551!2sMcMurdo%20Station%2C%20Antarctica!5e0!3m2!1sen!2snz!4v1643101999320!5m2!1sen!2snz";
	map.loading = "lazy";
	map.allowFullscreen = "";
	container.appendChild(map);

	return container;
}