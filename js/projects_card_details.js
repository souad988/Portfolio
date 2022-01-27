const projectsDetail = [{
  LinkToSource: 'https://github.com/souad988/youtube',
  linkToLiveVersion: 'https://souad988.github.io/youtube/',
  image: '../media/images/projects/youtube.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  name: 'youtube',
  technologies: ['Html', 'css'],
},
{
  LinkToSource: 'https://github.com/souad988/Portfolio',
  linkToLiveVersion: 'https://souad988.github.io/Portfolio/',
  image: '../media/images/projects/portfolio.PNG',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  name: 'portfolio',
  technologies: ['Html', 'css', 'javascript'],
},
{
  LinkToSource: 'https://github.com/souad988/e-come',
  linkToLiveVersion: 'https://souad988.github.io/youtube/',
  image: '../media/images/projects/e-come.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  name: 'ecom',
  technologies: ['Html', 'css', 'js', 'python', 'django'],
},
{
  LinkToSource: 'https://github.com/souad988/youtube',
  linkToLiveVersion: 'https://souad988.github.io/youtube/',
  image: '../media/images/projects/youtube.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  name: 'youtube1',
  technologies: ['Html', 'css'],
},
{
  LinkToSource: 'https://github.com/souad988/Portfolio',
  linkToLiveVersion: 'https://souad988.github.io/Portfolio/',
  image: '../media/images/projects/portfolio.PNG',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  name: 'portfolio1',
  technologies: ['Html', 'css', 'javascript'],
},
{
  LinkToSource: 'https://github.com/souad988/e-come',
  linkToLiveVersion: 'https://souad988.github.io/youtube/',
  image: '../media/images/projects/e-come.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  name: 'ecom1',
  technologies: ['Html', 'css', 'js', 'python', 'django'],
}];

const cardDetailsContainer = document.querySelector('#work_project_details');
const array1 = ['youtube', 'portfolio', 'ecom', 'youtube1', 'portfolio1', 'ecom1'];
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
/* projectLinkToLivemobile.addEventListener('click', () => {
  console.log("hello");
}); */

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

function createCardDetail(projectName) {
  const projectDetail = projectsDetail.filter((item) => item.name === projectName)[0];
  cardDetailsContainer.classList.add('show_work_project_details');
  fillCardDetail(projectDetail, projectImg, projectTitle, projectDescription,
    projectTechnologies, projectLinkToLivemobile, projectLinkToSourcemobile,
    projectLinkToLivedesktop, projectLinkToSourcedesktop);
}

/* add event listner to each button */

array1.forEach((btn) => {
  const btnB = document.querySelector(`#${btn}`);
  btnB.addEventListener('click', () => createCardDetail(btn));
});

workCloseIcon.addEventListener('click', () => {
  cardDetailsContainer.classList.remove('show_work_project_details');
  projectTechnologies.innerHTML = '';
});
