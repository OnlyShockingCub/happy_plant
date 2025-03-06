document.addEventListener("DOMContentLoaded", function() {
    const plantInput = document.getElementById('plant-input');
    const plantImageContainer = document.getElementById('plant-image');

    function checkInput() {
        const inputText = plantInput.value.toLowerCase();

        if (inputText === 'tickle plant' || inputText === 'water plant' || inputText === 'feed plant') {
            plantImageContainer.innerHTML = '<img src="happy_plant.jpg" alt="Happy Plant">';
        } else {
            plantImageContainer.innerHTML = '<img src="sad_plant.jpg" alt="Sad Plant">';
        }
    }

    plantInput.addEventListener('input', checkInput);
});
