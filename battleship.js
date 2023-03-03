var view = {
    displayMessage: function(msg){
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    
    displayMiss: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    },

    displayHit: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class","hit");
    }
};




