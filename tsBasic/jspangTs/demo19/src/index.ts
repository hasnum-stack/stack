namespace Index {
    const welcome: string = 'hello ts';
    console.log(welcome);
    console.log(123123213);
    class Content {
        constructor() {
            const div = document.createElement('div');
            div.innerText = `一个 content啊啊`;
            document.body.appendChild(div);
        }
    }
    export const Start = (): void => {
        console.log(Testdjiflsdjfl);
        new Content();
    };
}
namespace Hasnum {
    class Hasnum {
        public some: string = 'some text ...';
        constructor(public content: string) {}
        create() {
            const div = document.createElement('span');
            div.innerText = `${this.some}${this.content}`;
            document.body.appendChild(div);
        }
    }
    export const Create = (someText: string): void => {
        new Hasnum(someText).create();
    };
}
