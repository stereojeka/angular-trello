app.controller('listCtrl', function (cardFactory) {  
    this.getCards = function (list) {
        return cardFactory.getCards(list);
    }
    
    this.createCard = function (list) {
        cardFactory.createCard(list, this.cardDescription);
        this.cardDescription = '';
    }
})