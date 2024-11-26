import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import "./button.css";
const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props })=>{
    const mode = primary ? 'demo-button--primary' : 'demo-button--secondary';
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement("button", {
        type: "button",
        className: [
            'demo-button',
            `demo-button--${size}`,
            mode
        ].join(' '),
        style: {
            backgroundColor
        },
        ...props
    }, label);
};
export { Button };
