const render = () => {
	const App = document.createElement('div');
	App.innerText = 'New Direction';

	const root = document.getElementById('root');
	root.append(App);
}

document.addEventListener("DOMContentLoaded", () => {
	render();
})