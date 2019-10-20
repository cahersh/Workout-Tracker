import {elements} from './base'; //Holds all DOM elements

// Purpose: gets DOM value from add exercise field
export const getInput = () => elements.addExerciseInput.value;

// Purpose: create HTML for exercise
const createExercise = (exercise) => `
    <div class="exercise__container">
        <div class="exercise">${exercise}</div>
        <button class="add__btn"><i class="icon ion-md-add"></i></button>
    </div>
`;

// Purpose: render the exercise
export const renderExercise = (exercise) => {
    let exerciseHTML = createExercise(exercise);
    console.log(exerciseHTML);
    elements.exerciseSection.insertAdjacentHTML('beforeend', exerciseHTML);
}

// Purpose: clear the search value
export const clearInput = () => {
    elements.addExerciseInput.value = '';
};