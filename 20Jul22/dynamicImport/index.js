import { createButton } from "./array.js";

createButton('Feature 1',() => {
    console.log('clicked Feature 1');
    alert('feature 1');
});
createButton('Feature 2',() => {
    import('./feature2.js')
        .then((obj) => {
            createButton('Start Disco', obj.changebg);
            createButton('Stop Disco', obj.stopChangingBg);
        })
    
});
