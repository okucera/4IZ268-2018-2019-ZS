var points = 0;
var cities = ['Barcelona', 'Dortmund', 'Madrid', 'Turin', 'Prague', 'New York', 'Paris', 'London', 'Beijing', 'Moscow'];
var firstSelect = null;

cities = cities.concat(cities);
cities.sort(function() { return .5 - Math.random(); });

function editPoints(change){
    if((change > 0) || (points > 0)){
        points+=change;
    } else {
        points = 0;
    }
}

$(document).ready(function(){
    const pexesoPoints = '#js-points';
    const pexesoBoard = '#js-pexeso';
    const pexesoCard = '.js-playable';

    $(pexesoPoints).text(points);

    $.each(cities, function(index, value){
        $(pexesoBoard).append(`<div data-id="${index}" class="pexeso__card pexeso__card--playing js-playable"></div>`)
    });

    $(pexesoCard).on("click", function(){
        let currentCard = $(this);
        let currentCardId = currentCard.data("id");

        currentCard.addClass('pexeso__card--selected').removeClass('pexeso__card--playing');
        currentCard.text(cities[currentCardId]);

        setTimeout(function(){
        if(firstSelect === null){
            firstSelect = currentCard;
        } else {
            if(firstSelect.text() === currentCard.text()){
                firstSelect.addClass('pexeso__card--active');
                currentCard.addClass('pexeso__card--active');

                editPoints(1);
            } else {
                firstSelect.addClass('pexeso__card--playing').text('');
                currentCard.addClass('pexeso__card--playing').text('');

                editPoints(-1);
            }

            firstSelect.removeClass('pexeso__card--selected');
            currentCard.removeClass('pexeso__card--selected');

            firstSelect = null;
        }
        $(pexesoPoints).text(points);
    }, 1000);

    });
});