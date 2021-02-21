/**
 *
 * @param {Object} info 响应式对象
 * @param {Dom} dom 展示的dom
 */
export function observer(info, dom) {
    var stroageInfo = JSON.parse(localStorage.getItem('info') || '{}');
    var propertyObject = {};

    //初始化函数
    var init = function () {
        initData();
        initView();
    };

    var initData = function () {
        //根据storage初始化info对象
        for (const key in stroageInfo) {
            if (!info[key]) {
                info[key] = stroageInfo[key];
            }
        }

        //注册defineProperty
        for (var key in info) {
            (function (key) {
                Object.defineProperty(propertyObject, key, {
                    get() {
                        return info[key];
                    },
                    set(newValue) {
                        info[key] = newValue;
                        localStorage.setItem('info', JSON.stringify(info));
                        initView();
                    },
                });
            })(key);
        }
    };

    var initView = function () {
        dom.innerHTML = `
        <ul>
            <li>姓名 : ${info.name || `未录入`}</li>
            <li>年龄 : ${info.age || `未录入`}</li>
            <li>邮箱 : ${info.email || `未录入`}</li>
            <li>电话 : ${info.tel || `未录入`}</li>
        </ul> 
        `;
    };
    init();

    return propertyObject;
}
