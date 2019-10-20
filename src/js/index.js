import Exercise from './models/Exercise';
import AddSetForm from './models/AddSetForm';
import * as addExerciseView from './views/addExerciseView';
import * as addSetFormView from './views/addSetFormView';
import {elements} from './views/base';

const state = {};

// Purpose: Add Exercise controller - interacts with Exercise model and addExerciseView
const controlAddExercise = () => {
    // 1. Get exercise from view
    const exercise = addExerciseView.getInput();

    // if user actually inputted exercise
    if (exercise) {
        // If state does NOT have an exercise property or the exercise does NOT already exist
        if(!state.hasOwnProperty(`exercise`) || state.exercise.exercise != exercise ) {
            // 2. Create new exercise object and add to state
            state.exercise = new Exercise(exercise);

            // 3. Display Exercise section
            addExerciseView.renderExercise(state.exercise.exercise);
        }
        // 4. Clear added exercise text
        addExerciseView.clearInput();
    }
};

// Purpose: Event listener for add exercise submit button
elements.addExercise.addEventListener('submit', e => {
    e.preventDefault();
    controlAddExercise();
});

// Purpose: Add Set Form controller
const controlAddSetForm = (exerciseID) => {s
    // 1. New add set form object and add to state
    state.addSetForm = new AddSetForm(exerciseID);

    // 2. Display Add Set Form view
    addSetFormView.renderAddSetForm(exerciseID);
};

// Purpose: Event listener for add set form button
elements.exerciseSection.addEventListener('click', e => {
    // find closest element (.add__set__btn)
    const btn = e.target.closest('.add__set__btn');
    let exerciseID;

    if(btn) {
        exerciseID = btn.parentElement.id;
        controlAddSetForm(exerciseID);
    }
});