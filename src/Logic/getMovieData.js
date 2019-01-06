// import { filterByAge } from './filterByAge';
// import { filterByActivityLevel } from './filterByActivityLevel';

export default (dataFromChild) => {
    let title1 = dataFromChild[0].getElementsByTagName("name")[0].innerHTML
    let title2 = dataFromChild[1].getElementsByTagName("name")[0].innerHTML
    let title3 = dataFromChild[2].getElementsByTagName("name")[0].innerHTML
    let title4 = dataFromChild[3].getElementsByTagName("name")[0].innerHTML
    let title5 = dataFromChild[4].getElementsByTagName("name")[0].innerHTML
    let image1 = dataFromChild[0].getElementsByTagName("imagepath")[0].innerHTML
    let image2 = dataFromChild[1].getElementsByTagName("imagepath")[0].innerHTML
    let image3 = dataFromChild[2].getElementsByTagName("imagepath")[0].innerHTML
    let image4 = dataFromChild[3].getElementsByTagName("imagepath")[0].innerHTML
    let image5 = dataFromChild[4].getElementsByTagName("imagepath")[0].innerHTML
};