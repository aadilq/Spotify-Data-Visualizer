import { songList } from "./spotify_top_hits_clean";

//Once the HTML is fully parsed and the DOM is constructed, the DOMContentLoaded event is fired.
document.addEventListener('DOMContentLoaded', () =>{
    console.log('DOM fully loaded and parsed');

    const buttons = document.querySelectorAll('.result-button');
    const resultCard = document.getElementById('.result-card');

    buttons.forEach(buttons => {
        buttons.addEventListener('click', () =>{
            const buttonText = buttons.textContent

            if(buttonText === 'Most common Genre'){
                createGenreChart();
            } else if(buttonText === 'Year Song Released'){
                createYearChart();
            } else if(buttonText === 'Loudest Song'){
                createLoudestSongChart();
            }
        })
    })
})