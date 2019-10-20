import Exercise from './models/Exercise'
import * as addExerciseView from './views/addExerciseView';
import {elements} from './views/base';

const state = {};

// Purpose: Add Exercise controller - interacts with addExerciseView
const controlAddExercise = () => {
    // 1. Get exercise from view
    const exercise = addExerciseView.getInput();

    // if user actually inputted exercise
    if (exercise) {
        // 2. New exercise object and add to state
        state.exercise = new Exercise(exercise);
        console.log(state.exercise);

        // 3. Display Exercise section
        addExerciseView.renderExercise(state.exercise.exercise);

        // 4. Clear added exercise text
        addExerciseView.clearInput();
    }
}

// Purpose: Event listener for add exercise submit button
elements.addExercise.addEventListener('submit', e => {
    e.preventDefault();
    controlAddExercise();
});