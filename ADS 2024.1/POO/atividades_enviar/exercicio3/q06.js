function exibir() {
    var messages = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        messages[_i] = arguments[_i];
    }
    messages.forEach(function (message) {
        console.log(message);
    });
}
exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");
