 // Select all card elements
 var cards = document.querySelectorAll('.card');

 // Add event listeners to each card
 cards.forEach(function(card) {
     // Add a click event listener to the card
     card.addEventListener('click', function() {
         alert('You clicked the card!');
     });

     // Add a mouseover event listener to the card
     card.addEventListener('mouseover', function() {
         card.style.backgroundColor = '#f0f0f0';
     });

     // Add a mouseout event listener to the card
     card.addEventListener('mouseout', function() {
         card.style.backgroundColor = '#fff';
     });
 });