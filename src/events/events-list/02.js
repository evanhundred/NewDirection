const event02 = () => {
  let newEvent = document.createElement('div');
  newEvent.className = 'content';
  let header = document.createElement('h3');
  header.innerText = 'Deacon Lawrence Edwards';
  newEvent.append(header);
  header = document.createElement('h3');
  header.innerText = '66th Birthday and Retirement Celebration';
  newEvent.append(header);

  let text = document.createElement('p');
  text.innerText = 'Saturday · 4/27/2024 · 3 PM';
  newEvent.append(text);
  text = document.createElement('p');
  text.innerText = 'Prince of Peace Baptist Church';
  newEvent.append(text);
  text = document.createElement('p');
  text.innerText = '115-68 Francis Lewis Blvd.';
  newEvent.append(text);
  text = document.createElement('p');
  text.innerText = 'Jamaica, NY 11411';
  newEvent.append(text);

  return newEvent;
};

export default event02;
