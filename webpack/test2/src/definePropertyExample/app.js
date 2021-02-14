import { observer } from './observer';

!(function (doc) {
    //选取input
    var nameInput = doc.getElementById('name'),
        ageInput = doc.getElementById('age'),
        emailInput = doc.getElementById('email'),
        telInput = doc.getElementById('tel'),
        submit = doc.getElementById('submit'),
        infoTable = doc.getElementById('info-table'),
        //生成响应数据
        info = observer(
            {
                name: '',
                age: '',
                email: '',
                tel: '',
            },
            infoTable
        );
    //初始化方法
    var init = function () {
        //添加绑定事件
        bindEvent();
    };
    var bindEvent = function () {
        submit.addEventListener('click', handleSubmit, false);
    };
    var handleSubmit = function () {
        //赋值给info,响应数据
        info.name = nameInput.value;
        info.age = ageInput.value;
        info.email = emailInput.value;
        info.tel = telInput.value;

        //提交后清空input
        clearInput();
    };

    var clearInput = function () {
        nameInput.value = '';
        ageInput.value = '';
        emailInput.value = '';
        telInput.value = '';
    };
    init();
})(document);
