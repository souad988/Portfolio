/* eslint-disable space-before-blocks */
const cardDetailsContainer = document.querySelector('#work_project_details');
const array1 = ['youtube', 'portfolio', 'ecom', 'youtube1', 'portfolio1', 'ecom1'];
const workCloseIcon= document.querySelector('.work_detail_close_icon');
/* project card detail elements */
const projectImg = document.querySelector('.work_project_details_img');
const projectTitle = document.querySelector('.work_project_details_title');
const projectDescription = document.querySelector('.work_project_details_description');
const projectTechnologies = document.querySelector('.work_project_details_technologies');
const projectLinkToSource_mobile = document.querySelector('.btns_bottom_live');
const projectLinkToLive_mobile = document.querySelector('.btns_bottom_github');
const projectLinkToSource_desktop = document.querySelector('.btns_title_live');
const projectLinkToLive_desktop = document.querySelector('.btns_title_github');

function createListItems(technologies){
  let teckList = [];  
  technologies.forEach((item)=>{
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

function fillCardDetail(projectDetail,img,title,description,technologies,live_mobile,github_mobile,live_desktop,github_desktop){
  img.src = projectDetail['image'];
  title.innerHTML = projectDetail['name'];
  description.innerHTML = projectDetail['description'];
  live_mobile.onclick = 'window.location.href = '+projectDetail['linkToLiveVersion'];
  live_desktop.onclick = function (){ location.href = projectDetail['linkToLiveVersion']};
  github_mobile.onclick = function (){ location.href = projectDetail['LinkToSource']};
  github_desktop.onclick = function (){ location.href = projectDetail['LinkToSource']};
  let teckList1 = [];
  console.log(teckList1);
  teckList1 = createListItems(projectDetail['technologies']);
  console.log(teckList1);
  teckList1.forEach(elmnt=>{technologies.appendChild(elmnt);
  console.log(technologies);
});
}

function createCardDetail(projectName) {
  console.log(projectName);
  const projectDetail = projectsDetail.filter((item) => item.name === projectName)[0];
  console.log(projectDetail);
  cardDetailsContainer.classList.add('show_work_project_details');
  fillCardDetail(projectDetail,projectImg,projectTitle,projectDescription,projectTechnologies,projectLinkToLive_mobile,projectLinkToSource_mobile,projectLinkToLive_desktop,projectLinkToSource_desktop);
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