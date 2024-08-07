function exibir(...messages: string[]): void {
    messages.forEach((message) => {
        console.log(message);
    });
}

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");