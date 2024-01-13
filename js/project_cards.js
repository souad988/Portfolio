const projectsData = [{
  id: 1,
  LinkToSource: 'https://github.com/souad988/covid19-tracker',
  linkToLiveVersion: 'https://deploy-preview-5--statistics-covid19-tracker.netlify.app/',
  image: './media/images/projects/covid19.png',
  description: 'react web application that retreives covid19 data from distant api and display list of countries with total confirmed cases and the country\'s map, and the user can check detailed regional data of each country.',
  name: 'Covid Tracker',
  technologies: ['React.js', 'Redux', 'Apis'],
},
{
  id: 2,
  LinkToSource: 'https://github.com/khanh-devos/capstone-ebike-reservation-frontend',
  linkToLiveVersion: 'https://khanh-devos.github.io/capstone-ebike-reservation-frontend/',
  image: './media/images/projects/ebikes.png',
  description: 'a web app to book a test-ride service',
  name: 'E-bike Reservation',
  technologies: ['React', 'Rails', 'Redux', 'Postgresql'],
},
{
  id: 3,
  LinkToSource: 'https://github.com/souad988/document_analyse',
  linkToLiveVersion: 'https://github.com/souad988/document_analyse',
  image: './media/images/projects/document_analyze.png',
  description: 'Document analyze is an open-source, AI-powered document analyzer tool for company financial data-related tasks.',
  name: 'Document analyze',
  technologies: ['React', 'Django', 'Docker', 'HuggingFace', 'Nlp'],
},
{
  id: 4,
  LinkToSource: 'https://github.com/unstructuredstudio/zubhub',
  linkToLiveVersion: 'https://zubhub.unstructured.studio/',
  image: './media/images/projects/zubhub.png',
  description: 'ZubHub is an open-source, documentation & collaboration tool for activity-based learning. It is available for custom use for schools, libraries, hackerspaces, educational organizations, etc. Imagine your own online community built around your educational activities!',
  name: 'Zubhub',
  technologies: ['React', 'Django', 'Docker', 'Posgresql'],
},
{
  id: 5,
  LinkToSource: 'https://github.com/souad988/budget_tracker_app',
  linkToLiveVersion: 'https://www.loom.com/share/8903e0f7ed9e4978bed33422e3c0e0ae?sid=aacbdffc-e4e8-4ba4-9cdf-42c590317f27',
  image: './media/images/projects/ebike_home.png',
  description: 'Budget Tracker is a web application where users can keep track of their expences in groups of categories and store their transactions .',
  name: 'Budget Tracker',
  technologies: ['Rails', 'Postgresql', 'css', 'javascript'],
},
{
  id: 6,
  LinkToSource: 'https://github.com/souad988/review-requests-tracker',
  linkToLiveVersion: 'https://github.com/souad988/review-requests-tracker',
  image: './media/images/projects/review_requests_tracker.png',
  description: 'Review Request Tracker "Review Request Tracker" is a chrome extension that helps microverse code reviewers gain 99% of time they spend to catch new review requests instead of spending time refreshing the tab to see if new reviews are available reviewer can open other tabs ad even other windows work on their side project while the extension keeps checking and once a new review is found the microverse dashboard tab open up on top of every thing and the reviewer claim the review , the extension also plays an audio track with duration of the review if the user is a bit away they can listen to the notification 🏃‍♀️🏃‍♂️ and can stil claim the review.',
  name: 'Review Request Tracker',
  technologies: ['React.js', 'css', 'Webpack'],
}];

function createCard(name, technologies, id, imageUrl) {
  // Create card div
  const card = document.createElement('div');
  card.className = 'card';

  // Create card image div
  const cardImg = document.createElement('div');
  cardImg.className = 'card_img';
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  card.appendChild(cardImg);

  // Create card info div
  const cardInfo = document.createElement('div');
  cardInfo.className = 'card_info';

  // Create title element
  const titleElement = document.createElement('h5');
  titleElement.textContent = name;
  cardInfo.appendChild(titleElement);

  // Create language list
  const languageList = document.createElement('ul');
  languageList.className = 'card_languages';

  // Create language items
  technologies.forEach((technology) => {
    const languageItem = document.createElement('li');
    languageItem.className = 'language';
    const languageText = document.createElement('p');
    languageText.textContent = technology;
    languageItem.appendChild(languageText);
    languageList.appendChild(languageItem);
  });

  cardInfo.appendChild(languageList);

  // Create button
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'buttons';
  button.id = name;
  button.textContent = 'See Project';
  cardInfo.appendChild(button);

  card.appendChild(cardInfo);
  return card;
}

const projectCardsContainer = document.querySelector('#projectCardsContainer');
projectsData.forEach((project) => {
  projectCardsContainer.appendChild(
    createCard(project.name, project.technologies, project.id, project.image),
  );
});

const cardDetailsContainer = document.querySelector('#work_project_details');
const workCloseIcon = document.querySelector('.work_detail_close_icon');
/* project card detail elements */
const projectImg = document.querySelector('.work_project_details_img');
const projectTitle = document.querySelector('.work_project_details_title');
const projectDescription = document.querySelector('.work_project_details_description');
const projectTechnologies = document.querySelector('.work_project_details_technologies');
const projectLinkToSourcemobile = document.querySelector('.buttons_bottom_github');
const projectLinkToLivemobile = document.querySelector('.buttons_bottom_live');
const projectLinkToSourcedesktop = document.querySelector('.btns_title_github');
const projectLinkToLivedesktop = document.querySelector('.btns_title_live');

function createListItems(technologies) {
  const teckList = [];
  technologies.forEach((item) => {
    const para = document.createElement('p');
    const node = document.createTextNode(item);
    para.appendChild(node);
    const li = document.createElement('li');
    li.className = 'language';
    li.appendChild(para);
    teckList.push(li);
  });
  return teckList;
}

function fillCardDetail(projectDetail, img, title, description, technologies, livemobile,
  githubmobile, livedesktop, githubdesktop) {
  img.src = projectDetail.image;
  title.innerHTML = projectDetail.name;
  description.innerHTML = projectDetail.description;

  livemobile.onclick = () => { window.location.href = projectDetail.linkToLiveVersion; };
  livedesktop.onclick = () => { window.location.href = projectDetail.linkToLiveVersion; };
  githubmobile.onclick = () => { window.location.href = projectDetail.LinkToSource; };
  githubdesktop.onclick = () => { window.location.href = projectDetail.LinkToSource; };

  let teckList1 = [];

  teckList1 = createListItems(projectDetail.technologies);
  teckList1.forEach((elmnt) => { technologies.appendChild(elmnt); });
}

function createCardDetail(projectDetail) {
  cardDetailsContainer.classList.add('show_work_project_details');
  fillCardDetail(projectDetail, projectImg, projectTitle, projectDescription,
    projectTechnologies, projectLinkToLivemobile, projectLinkToSourcemobile,
    projectLinkToLivedesktop, projectLinkToSourcedesktop);
}

/* add event listner to each button */

projectsData.forEach((project) => {
  document.getElementById(project.name).addEventListener('click', () => createCardDetail(project));
});

workCloseIcon.addEventListener('click', () => {
  cardDetailsContainer.classList.remove('show_work_project_details');
  projectTechnologies.innerHTML = '';
});