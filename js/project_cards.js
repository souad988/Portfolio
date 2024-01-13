const projectsData = [
  {
    id: 1,
    LinkToSource: 'https://github.com/souad988/covid19-tracker',
    linkToLiveVersion: 'https://deploy-preview-5--statistics-covid19-tracker.netlify.app/',
    image: './media/images/projects/covid19.png',
    description: 'A React web application that retrieves COVID-19 data from a distant API and displays a list of countries with total confirmed cases and the country\'s map. Users can also check detailed regional data for each country.',
    name: 'Covid Tracker',
    technologies: ['React.js', 'Redux', 'APIs'],
  },
  {
    id: 2,
    LinkToSource: 'https://github.com/khanh-devos/capstone-ebike-reservation-frontend',
    linkToLiveVersion: 'https://khanh-devos.github.io/capstone-ebike-reservation-frontend/',
    image: './media/images/projects/ebikes.png',
    description: 'A web app for booking a test-ride service.',
    name: 'E-bike Reservation',
    technologies: ['React', 'Rails', 'Redux', 'PostgreSQL'],
  },
  {
    id: 3,
    LinkToSource: 'https://github.com/souad988/document_analyse',
    linkToLiveVersion: 'https://github.com/souad988/document_analyse',
    image: './media/images/projects/document_analyze.png',
    description: 'Document Analyze is an open-source, AI-powered document analyzer tool for company financial data-related tasks.',
    name: 'Document Analyze',
    technologies: ['React', 'Django', 'Docker', 'HuggingFace', 'NLP'],
  },
  {
    id: 4,
    LinkToSource: 'https://github.com/unstructuredstudio/zubhub',
    linkToLiveVersion: 'https://zubhub.unstructured.studio/',
    image: './media/images/projects/zubhub.png',
    description: 'ZubHub is an open-source documentation and collaboration tool for activity-based learning. It is available for custom use in schools, libraries, hackerspaces, educational organizations, etc. Imagine your own online community built around your educational activities!',
    name: 'Zubhub',
    technologies: ['React', 'Django', 'Docker', 'PostgreSQL'],
  },
  {
    id: 5,
    LinkToSource: 'https://github.com/souad988/budget_tracker_app',
    linkToLiveVersion: 'https://www.loom.com/share/8903e0f7ed9e4978bed33422e3c0e0ae?sid=aacbdffc-e4e8-4ba4-9cdf-42c590317f27',
    image: './media/images/projects/ebike_home.png',
    description: 'Budget Tracker is a web application where users can keep track of their expenses in groups of categories and store their transactions.',
    name: 'Budget Tracker',
    technologies: ['Rails', 'PostgreSQL', 'CSS', 'JavaScript'],
  },
  {
    id: 6,
    LinkToSource: 'https://github.com/souad988/review-requests-tracker',
    linkToLiveVersion: 'https://github.com/souad988/review-requests-tracker',
    image: './media/images/projects/review_requests_tracker.png',
    description: 'Review Request Tracker is a Chrome extension that helps Microverse code reviewers save 99% of the time spent catching new review requests. Instead of refreshing the tab, the extension checks continuously. When a new review is found, the Microverse dashboard tab opens on top. The extension also plays an audio track with the duration of the review. If the user is away, they can listen to the notification and still claim the review.',
    name: 'Review Request Tracker',
    technologies: ['React.js', 'CSS', 'Webpack'],
  },
];

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

  livemobile.onclick = () => { window.open(projectDetail.linkToLiveVersion,'_blank') };
  livedesktop.onclick = () => {  window.open(projectDetail.linkToLiveVersion,'_blank') };
  githubmobile.onclick = () => {  window.open(projectDetail.LinkToSource,'_blank') };
  githubdesktop.onclick = () => { window.open(projectDetail.LinkToSource,'_blank') };

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