const Events = () => {
  const collapseEvents = (element) => {
    eventsContent.remove();
    element.removeEventListener("click", collapseEvents);
    element.addEventListener("click", () => expandEvents(element));
  };

  const expandEvents = (element) => {
    eventsContainer.append(eventsContent);
    element.removeEventListener("click", expandEvents);
    element.addEventListener("click", () => collapseEvents(element));
  };

  const eventsContainer = document.createElement("div");
  eventsContainer.id = "events-container";
  const eventsH2 = document.createElement("h2");
  eventsContainer.append(eventsH2);
  eventsH2.innerText = "events";
  eventsH2.addEventListener("click", () => expandEvents(eventsH2));

  const eventsContent = document.createElement("div");
  eventsContent.className = "content-container";

  let newEvent = document.createElement("div");
  eventsContent.append(newEvent);
  newEvent.className = "content";
  let header = document.createElement("h3");
  header.innerText = "Black History Celebration";
  newEvent.append(header);

  let text = document.createElement("p");
  text.innerText = "Saturday · 2/24/2024 · 5 PM";
  newEvent.append(text);
  text = document.createElement("p");
  text.innerText = "227-11 Linden Blvd.";
  newEvent.append(text);
  text = document.createElement("p");
  text.innerText = "St. Albans, NY";
  newEvent.append(text);

  return eventsContainer;
};

export default Events;
