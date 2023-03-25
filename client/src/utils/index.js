import {surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt){

const randomIndex=Math.floor(Math.random()*surpriseMePrompts.length)
const randomPrompt=surpriseMePrompts[randomIndex];
// prompt is old string genrated by last run
if(randomPrompt===prompt) return getRandomPrompt(prompt)

return randomPrompt
}