/*
 * @Description: 数组
 * @LastEditTime: 2020-12-08 16:48:53
 */
(function (): void {
    const list1 = [1, 23, 4];

    const list2: number[] = [23, 34, 34];
    const list3: string[] = ['1', '2', '3'];
    const list4: (string | number | { a: number })[] = [1, 23, '324', { a: 123 }];

    type user = { name: string; age: number };
    interface person {
        name: string;
        age: number;
    }
    const list5: { name: string; age: number }[] = [
        { name: '123', age: 12 },
        { name: '4543', age: 9 },
    ];
    const list6: person[] = [
        { name: '123', age: 12 },
        { name: '4543', age: 9 },
    ];
    console.log('🚀 ~ list6', list6);
})();
