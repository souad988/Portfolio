/* eslint-disable space-before-blocks */
const cardDetailsContainer = document.querySelector('#work_project_details');
const array1 = ['youtube', 'portfolio', 'ecom', 'youtube1', 'portfolio1', 'ecom1'];
const workCloseIcon = document.querySelector('.work_detail_close_icon');
/* project card detail elements */
const projectImg = document.querySelector('.work_project_details_img');
const projectTitle = document.querySelector('.work_project_details_title');
const projectDescription = document.querySelector('.work_project_details_description');
const projectTechnologies = document.querySelector('.work_project_details_technologies');
const projectLinkToSourcemobile = document.querySelector('.btns_bottom_live');
const projectLinkToLivemobile = document.querySelector('.btns_bottom_github');
const projectLinkToSourcedesktop = document.querySelector('.btns_title_live');
const projectLinkToLivedesktop = document.querySelector('.btns_title_github');

function createListItems(technologies){
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
  githubmobile, livedesktop, githubdesktop){
  img.src = projectDetail.image;
  title.innerHTML = projectDetail.name;
  description.innerHTML = projectDetail.description;

  livemobile.onclick = `"window.location.href = '${projectDetail.linkToLiveVersion}';"`;
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