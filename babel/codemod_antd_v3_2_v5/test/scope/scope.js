import React, { Component, PureComponent } from "react";
import "./index.less";
import ImgBg from "static/identification-form-bg.png";
import ImgForm from "static/identification-form-img.png";
import { withRouter } from "react-router-dom";
import { Form, Icon } from "@ant-design/compatible";
// import { Form } from "@ant-design/compatible";

// import '@ant-design/compatible/assets/index.css';

import { Select, Input, message, Steps, Button, Spin } from "antd";
import { TextArea } from "components";
import debounce from "lodash/debounce";
import { callApi, getBasicInfo } from "utils";
import { api } from "../../config";
import ImgSuccess from "static/portalwebsite_finished_icon.png";
import FieldEdit from "components/FormManagementV2/components/FieldEdit";
const x = 1;
console.log(x + 2);
// 去除前后空格
function whitespaceTrim(val) {
  if (typeof val === "string") {
    return val.trim();
  }
  return "";
}

const prefixCls = "apply-form";

class ApplyForm extends Component {
  var abc = "abc";
  console.log(abc)
}
// Form.create()(ApplyForm);
// Form.create("apply-form")(ApplyForm);
export default withRouter(Form.create("apply-form")(ApplyForm));
class ApplyForm1 extends (PureComponent || Component) {}
class App extends React.Component {}
function App1() {
  return (
    <>
      <div>324</div>
    </>
  );
}
Form.create()(App1);
