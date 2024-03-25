const event01 = () => {
  let newEvent = document.createElement('div');
  // eventsContent.append(newEvent);
  newEvent.className = 'content';
  let header = document.createElement('h3');
  header.innerText = 'Black History Celebration';
  newEvent.append(header);

  let text = document.createElement('p');
  text.innerText = 'Saturday · 2/24/2024 · 5 PM';
  newEvent.append(text);
  text = document.createElement('p');
  text.innerText = '227-11 Linden Blvd.';
  newEvent.append(text);
  text = document.createElement('p');
  text.innerText = 'St. Albans, NY';
  newEvent.append(text);

  return newEvent;
};

export default event01;
