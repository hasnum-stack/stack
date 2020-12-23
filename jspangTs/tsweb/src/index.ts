namespace Index {
    const welcome: string = 'hello ts';
    console.log(welcome);
    console.log(123123213);
    class Content {
        constructor() {
            const div = document.createElement('div');
            div.innerText = `一个 content`;
            document.body.appendChild(div);
        }
    }
    export const Start = (): void => {
        new Content();
    };
}
