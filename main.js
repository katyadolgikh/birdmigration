// Select anchor document
let more = document.querySelector('.more');
// Return Array
let audioArr = document.getElementsByTagName('audio');
console.log(audioArr);
// Add Event Listeners
more.addEventListener('mouseenter', ()=>{
    audioArr[0].play()
});
