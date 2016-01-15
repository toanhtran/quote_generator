$(document).ready(function () {
    runQuote();

    function runQuote() {
        var quotes = ["Size matters not. Judge me by my size, do you? @-Yoda", "Do. Or do not. There is no try. @-Yoda", "Fear is the path to the dark side. @-Yoda", "Truly wonderful, the mind of a child is. @-Yoda", "Mmm. Lost a planet, Master Obi-Wan has. How emarrassing.@-Yoda", "A Jedi uses the Force for knowledge and defense, never for attack. @-Yoda", "Fear is the path to the dark side…fear leads to anger…anger leads to hate…hate leads to suffering. @-Yoda", "Use the Force, Luke. @-Obi-Wan Kenobi", "In my experience there is no such thing as luck.@-Obi-Wan Kenobi", "Remember...the Force will be with you, always.@-Obi-Wan Kenobi", "Never tell me the odds. @-Han Solo", "Great, kid. Don't get cocky. @-Han Solo", "You like me because I'm a scoundrel. There aren't enough scoundrels in your life.@-Han Solo", "So? What are you going to do, talk me to death? @-Han Solo", "Help me Obi-Wan Kenobi, you're my only hope.@-Princess Leia"];

        randQuote =
            quotes[Math.floor(Math.random() * quotes.length)];
        author = randQuote.split("@");
        $('.phrase').text(author[0]);
        $('.author').text(author[1]);
    }

    $(".btn").on("click", function () {
        runQuote();

    });

});