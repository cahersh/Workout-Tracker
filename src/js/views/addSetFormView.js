import {elements} from './base'; //Holds all DOM elements

// Purpose: create HTML for add set form
const createSetForm = () => `
    <div class="add__set__container">
        <div class="set">1</div>
        <input type="text" class="add__set" placeholder="Enter weight">
        <div class="x__rep__container"><i class="icon ion-md-close x__rep"></i></div>
        <input type="text" class="add__set" placeholder="Enter reps">
        <button id="add__set__info__btn" class="add__btn"><i class="icon ion-md-add"></i></button>
    </div>
`;

// Purpose: render the add set form
// Input: exerciseID - which exercise section to add the add set form to
export const renderAddSetForm = (exerciseID) => {
    let addSetFormHTML = createSetForm();
    document.getElementById(`${exerciseID}`).insertAdjacentHTML('afterend', addSetFormHTML);
};