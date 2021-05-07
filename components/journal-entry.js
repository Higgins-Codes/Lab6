// <journal-entry> custom web component
class JournalEntry extends HTMLElement {
  constructor() {
    super();

    // templated HTML content
    const template = document.createElement('template');

    template.innerHTML = `
        <style>
            .entry {
                background-color: white;
                border-radius: 6px;
                list-style-type: none;
                margin-bottom: 30px;
                max-width: 700px;
                padding: 20px;
                width: 80%;
            }
            .entry-audio {
                margin: 10px 0;
                width: 95%;
            }
            .entry-content {
                font-size: 20px;
                margin: 10px 0;
                text-indent: 30px;
            }
            .entry-date {
                color: rgb(163, 163, 163);
                font-size: 20px;
                margin-top: 3px;
                margin-bottom: 20px;
            }
            .entry-image {
                height: 100%;
                max-height: 350px;
                max-width: 550px;
            }
            .entry-title {
                margin-bottom: 5px;
                margin-top: 5px;
            }
        </style>
        <article class="entry">
            <h2 class="entry-title"></h2>
            <p class="entry-date"></p>
            <p class="entry-content"></p>
        </article>
        `;

    // create a shadow root for this web component
    this.attachShadow({ mode: 'open' })
    // attach cloned content of template to shadow DOM 
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  /*
   * `get` binds a property to a function that will be called when that property is looked up
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
   */
  get entry() {
    return this.getAttribute('entry');
  }

  /*
   * `set` binds an object property to a function to be called when there is an attempt to set that property
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
   */
  set entry(entry) {
    console.log(entry);
    /* 
     * TODO: set the entry title, date, and content fields in this component
     */
    // CODE GOES HERE
    this.shadowRoot.querySelector(".entry-title").innerHTML = entry.title;
    this.shadowRoot.querySelector(".entry-date").innerHTML = entry.date;
    this.shadowRoot.querySelector(".entry-content").innerHTML = entry.content;
    
  //   <template>
  //   <article class="entry">
  //     <h2 class="entry-title">Template Title</h2>
  //     <p class="entry-date">mm/dd/yyyy</p>
  //     <p class="entry-content">blah blah blah...</p>
  //     <img src="" alt="Some Image" class="entry-image" />
  //     <audio src="" controls class="entry-audio"></audio>
  //   </article>
  // </template>

    if (entry.image) {
      let entryImage;
      /*
       * TODO: if the entry contains an image resource,
       * 1. create an image element with the correct class
       * 2. set the image src and alt attributes
       * 3. append the image element to the appropriate location in this component
       */

      // CODE GOES HERE vvv





      // CODE GOES HERE ^^^

      /* ------------- do not edit this code, it is for your debugging purposes ------------- */
      try {
        window.logCheckpoint('"entryImage"', imgExample, entryImage);
      } catch(err) {
        console.log('variable name changed: ', err);
      }
      /* ------------- do not edit this code, it is for your debugging purposes ------------- */

    }
    if (entry.audio) {
      let entryAudio;
      /*
       * TODO: if the entry contains an audio resource,
       * 1. create an audio element with the correct class
       * 2. set the audio src and enable audio controls
       * 3. append the audio element to the appropriate location in this component
       */

      // CODE GOES HERE vvv






      // CODE GOES HERE ^^^
      

      
      /* ------------- do not edit this code, it is for your debugging purposes ------------- */
      try {
        window.logCheckpoint('"entryAudio"', exampleAudio, entryAudio);
      } catch(err) {
        console.log('variable name changed: ', err);
      }
      /* ------------- do not edit this code, it is for your debugging purposes ------------- */

    }
    this.setAttribute('entry', entry);

    /* ------------- do not edit this code, it is for your debugging purposes ------------- */
    try {
      window.logCheckpoint('"entry"', exampleEntry, entry);
    } catch(err) {
      console.log('variable name changed: ', err);
    }
    /* ------------- do not edit this code, it is for your debugging purposes ------------- */
  }

}

/*
 * Define a custom element for the JournalEntry web component, 
 * where 'journal-entry' is the string that represents this element.
 * https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
 */ 
customElements.define('journal-entry', JournalEntry);

/**
 * JSON Format:
 * image and audio will only sometimes be there
 *
 * {
 *   title: 'foo',
 *   date: 'foo',
 *   content: 'foo',
 *   image: {
 *     src: 'foo.com/bar.jpg',
 *     alt: 'foo'
 *   },
 *   audio: 'foo.com/bar.mp3'
 * }
 */







/* ------------- do not edit this code, it is for your debugging purposes ------------- */
const exampleEntry = {
  title: 'entry title',
  date: 'mm/dd/yyyy',
  content: 'some sentences of entry content',
  audio: 'there may or may not be audio',
  image: 'there may or may not be image'
}
const titleStyle = 'font-weight: bold; font-size: 16px; color: blue;';
const contentStyle = 'font-weight: bold; font-size: 12px';
const sectionBreak = '%c------------------------------------------------------------------------'
const imgExample = '<img class="entry-image" src="path/to/image.jpg" alt="some alternate text"/>'
const exampleAudio = '<audio class="entry-audio" src="https://url-for-source-audio.mp3" controls="">'

window.logCheckpoint = (task, example, value) => {
  if (!window.logCheckpoints) return;
  console.log(`%cTask ${task}: `, titleStyle)
  console.log(`%cyour ${task} should look like this: `, contentStyle)
  console.log(example);
  console.log(`%cyour ${task}: `, contentStyle);
  console.log(value);
  console.log(sectionBreak, contentStyle);
}
/* ------------- do not edit this code, it is for your debugging purposes ------------- */

export { JournalEntry };