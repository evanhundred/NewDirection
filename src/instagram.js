const Instagram = () => {
  const instagram = document.createElement('div');
  instagram.id = 'instagram-container';
  let a = document.createElement('a');
  instagram.append(a);

  let maxWatch = window.matchMedia('(max-width: 600px)');

  const makeLink = (e, a) => {
    // console.log(maxWatch);
    // console.log(e);
    let instaUrl;
    if (maxWatch.matches) {
      instaUrl = 'instagram://user?username=newdirection.music';
    } else {
      instaUrl = 'https://www.instagram.com/newdirection.music';
    }
    a.href = instaUrl;
  };

  makeLink(null, a);
  maxWatch.addEventListener('change', (e) => makeLink(e, a));

  // a.href = "instagram://user?username=newdirection.music";
  // a.href = "https://www.instagram.com/_u/newdirection.music";
  // a.href = "https://www.instagram.com/newdirection.music";
  a.target = '_blank';
  a.rel = 'noopener noreferrer';

  let img = document.createElement('img');
  a.append(img);
  img.src = './assets/instagram.png';

  return instagram;
};

export default Instagram;
