/* const array1 = ['youtube', 'portfolio', 'ecom', 'youtube1', 'portfolio1', 'ecom1'];
const btns = [];
array1.forEach(element=> {
  let element = document.querySelector(element);
  btns.push(element);
});
*/
const cardDetailsContainer = document.querySelector('#work_project_details');
const array1 = ['youtube', 'portfolio', 'ecom', 'youtube1', 'portfolio1', 'ecom1'];
const workCloseIcon= document.querySelector('.work_detail_close_icon');
function createCardDetail(projectName) {
  console.log(projectName);
  const projectDetail = projectsDetail.filter((item) => item.name === projectName)[0];
  console.log(projectDetail);
  cardDetailsContainer.classList.add('show_work_project_details');

}

/* add event listner to each button */

array1.forEach((btn) => {
  const btnB = document.querySelector(`#${btn}`);
  btnB.addEventListener('click', () => createCardDetail(btn));
});

workCloseIcon.addEventListener('click', () => cardDetailsContainer.classList.remove('show_work_project_details'));