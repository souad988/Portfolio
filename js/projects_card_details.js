/*const array1 = ['youtube', 'portfolio', 'ecom', 'youtube1', 'portfolio1', 'ecom1'];
const btns = [];
array1.forEach(element=> {
  let element = document.querySelector(element);
  btns.push(element);
});
*/

const array1 = ['youtube', 'portfolio', 'ecom', 'youtube1', 'portfolio1', 'ecom1'];

function createCardDetail(projectName) {
  const projectDetail= projectsDetail.filter(item=>item['name']===projectName)[0];
}
/*add event listner to each button */

array1.forEach((btn)=> {
    const btnB = document.querySelector('#'+btn);
    btnB.addEventListener('click',()=> createCardDetail(btn));
});


//youtube.addEventListener('click',()=> createCardDetail('youtube'));
const cardDetailsContainer = document.querySelector('#work_project_details');