// script.js

window.logCheckpoints = true // set to true/false to add/remove checkpoint logs to clear room for your own debugging


// script.js

document.addEventListener('DOMContentLoaded', () => {
  /* TODO:
   * 1. fetch json results from https://cse110lab6.herokuapp.com/entries
   * 2. for each entry, create and append a custom HTML element 
   *    using a web component called JournalEntry to a 
   *    list of journal entries in inside <main></main>. 
   *    
   * Hint: don't forget to set the entry property inside JournalEntry to 
   * the current entry for each journal-entry element.
   */

  let url = "https://cse110lab6.herokuapp.com/entries";  // SET URL 
  // date, title, content, image, and source
  fetch(url)
    .then(response => response.json())
    .then(entries => {
      console.log(entries);
      entries.forEach((entry) => {
        // console.log(entry.date);
        let newPost;  


        // CODE GOES HERE vvv
         





        // CODE GOES HERE ^^^



        /* ------------- do not edit this code, it is for your debugging purposes ------------- */
        try {
          window.logCheckpoint('"newPost"', exampleNewPost, newPost);
        } catch(err) {
          console.log('variable name changed: ', err);
        }
        /* ------------- do not edit this code, it is for your debugging purposes ------------- */
    })
    logCheckpoints();
  })
  .catch(error => {
    console.log(`%cresult of fetch is an error: \n"${error}"`, 'color: red');
  });    
   
});



/* ------------- do not edit this code, it is for your debugging purposes ------------- */
function logCheckpoints() {
  let errorStyle = 'color: red; font-weight: bold';
  let successStyle = 'color: green; font-weight: bold';
  let entries = [...document.getElementsByTagName('journal-entry')];
  entries.length == 0 ? console.log('%cno journal entries have been rendered to the DOM', errorStyle) : console.log('%cDOM contains journal entries', successStyle);
}
const exampleNewPost = '<journal-entry entry="[object Object]">';
/* ------------- do not edit this code, it is for your debugging purposes ------------- */