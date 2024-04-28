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
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      submiting: false,
      list: [],
      current: 0,
      formFieldsLoading: false,
      formFields: [],
      validators: [],
    };
    this.lastFetchId = 0;
    this.communityId = "";
    this.organizationId = "";
    this.onSearch = debounce(this.onSearch, 500);
  }

  onClickApplyBtn = () => {
    const { history } = this.props;
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        const { organizationName, contactName, contactDescription } = values;
        // const communityId = getBasicInfo('communityId');
        const userId = getBasicInfo("userInfo").id;
        this.setState({ submiting: true });
        callApi({
          api: api.applyForOrganizationAdminstrator,
          data: {
            organizationName: whitespaceTrim(organizationName),
            communityId: this.communityId,
            organizationId: this.organizationId,
            contactName: whitespaceTrim(contactName),
            userId,
            contactDescription: whitespaceTrim(contactDescription),
          },
          success: () => {
            history.push("/identification/apply-success");
          },
          error: ({ errorCode, errorDescription = "" }) => {
            if (errorCode === 51001 || errorCode === 51002) {
              message.error(errorDescription);
            } else {
              message.error("提交失败，请重试");
            }
          },
          complete: () => {
            this.setState({
              submiting: false,
            });
          },
        });
      }
    });
  };

  onClickCancelBtn = () => {
    const { history } = this.props;
    history.replace("/");
  };

  handleChange = (value, option) => {
    this.communityId = option.props.dataRef.communityId;
    this.organizationId = option.props.dataRef.id;
  };

  onSearch = (value) => {
    if (!value) {
      return;
    }
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ list: [], fetching: true });
    const namespaceId = getBasicInfo("domainInfo").namespaceId;
    const communityId = getBasicInfo("communityId");
    callApi({
      api: api.searchEnterprise,
      data: {
        namespaceId,
        keyword: value,
        communityId,
        communityType: 1,
        pageAnchor: 0,
        pageSize: 10000,
      },
      success: (res = {}) => {
        if (fetchId !== this.lastFetchId) {
          return;
        }
        if (Array.isArray(res.enterprises)) {
          this.setState({
            list: res.enterprises,
          });
        }
      },
      error: ({ errorDescription = "" }) => {
        message.error(errorDescription);
      },
      complete: () => {
        this.setState({ fetching: false });
      },
    });
  };

  // 点击下一步
  onClickNextBtn = () => {
    this.props.form.validateFields(["organizationName"], (errors, values) => {
      if (errors) {
        return;
      }
      this.setState({
        current: this.state.current + 1,
      });
      this.listUserAuthForms();
    });
  };

  // 点击上一步
  onClickPrevBtn = () => {
    this.setState({
      current: this.state.current - 1,
    });
  };

  listUserAuthForms = () => {
    this.setState({
      formFieldsLoading: true,
    });
    callApi({
      api: api.listUserAuthForms,
      data: {
        namespaceId: getBasicInfo("domainInfo").namespaceId,
        communityId: this.communityId,
        pageSize: 10,
      },
      success: ({ organizationUserAuthForms = [] } = {}) => {
        if (organizationUserAuthForms.length) {
          // 自定义表单
          this.setState({
            formFields: organizationUserAuthForms[0].formFields,
          });
        } else {
          this.setState({
            formFields: [],
          });
        }
      },
      complete: () => {
        this.setState({
          formFieldsLoading: false,
        });
      },
    });
  };

  // 点击提交按钮
  onClickSubmitBtn = () => {
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.error(errors);
        return;
      }
      this.setState({
        submiting: true,
      });
      callApi({
        api: api,
        data: values,
        success: (res) => {
          this.setState({
            current: this.state.current + 1,
          });
        },
        error: () => {
          message.error("提交失败");
        },
        complete: () => {
          this.setState({
            submiting: false,
          });
        },
      });
    });
  };

  // 点击返回按钮
  onClickBackBtn = () => {
    this.props.history.goBack();
  };

  changeValidators = (validators) => {
    this.setState({ validators });
  };

  changeFormFields = (newFormFields, cb) => {
    this.setState({
      formFields: newFormFields,
    });
    setTimeout(cb);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      list,
      fetching,
      submiting,
      current,
      formFields,
      formFieldsLoading,
      validators,
    } = this.state;

    return (
      <Form className={prefixCls} layout="vertical">
        <div
          className={`${prefixCls}-content ${
            current === 1 ? "has-footer" : ""
          }`}
        >
          <Steps
            current={current}
            className={`${prefixCls}-steps`}
            size="small"
          >
            <Steps.Step title="选择企业" />
            <Steps.Step title="填写信息" />
            <Steps.Step title="完成" />
          </Steps>
          <div className={`${prefixCls}-form-items`}>
            <div
              className={`${prefixCls}-step-content ${
                current !== 0 ? "hidden" : ""
              }`}
            >
              <Form.Item
                extra="与颁发商业许可证书或企业注册证书上需一致。"
                style={{ marginBottom: 24 }}
              >
                {getFieldDecorator("organizationName", {
                  rules: [
                    {
                      required: true,
                      message: "请选择企业",
                      transform: whitespaceTrim,
                    },
                  ],
                })(
                  <Select
                    placeholder="请输入关键字"
                    onSearch={this.onSearch}
                    onSelect={this.handleChange}
                    loading={fetching}
                    filterOption={false}
                    showSearch
                    style={{ width: 448 }}
                  >
                    {list.map((it) => (
                      <Select.Option key={it.id} dataRef={it} value={it.name}>
                        {it.name}
                      </Select.Option>
                    ))}
                  </Select>,
                )}
              </Form.Item>
              <Button onClick={this.onClickNextBtn} type="primary">
                下一步
              </Button>
            </div>
            <div
              className={`${prefixCls}-step-content ${
                current !== 1 ? "hidden" : ""
              }`}
            >
              <Spin spinning={formFieldsLoading}>
                {!formFieldsLoading &&
                  (formFields.length ? (
                    <div className={`${prefixCls}-custom-form`}>
                      <FieldEdit
                        form={this.props.form}
                        formFields={formFields}
                        changeFormFields={this.changeFormFields}
                        validators={validators}
                        changeValidators={this.changeValidators}
                        communityId={this.communityId}
                        status={status}
                      />
                    </div>
                  ) : (
                    <div className={`${prefixCls}-default-form form-item-l`}>
                      <Form.Item label="姓名">
                        {getFieldDecorator("name", {
                          rules: [
                            {
                              required: true,
                              message: "请输入姓名",
                              transform: whitespaceTrim,
                            },
                          ],
                        })(<Input />)}
                      </Form.Item>
                      <Form.Item label="部门">
                        {getFieldDecorator("department")(<Input />)}
                      </Form.Item>
                      <Form.Item label="邮箱">
                        {getFieldDecorator("email", {
                          rules: [
                            {
                              type: "email",
                              message: "请输入正确的邮箱",
                              transform: whitespaceTrim,
                            },
                          ],
                        })(<Input />)}
                      </Form.Item>
                    </div>
                  ))}
              </Spin>
            </div>
            <div
              className={`${prefixCls}-success ${
                current !== 2 ? "hidden" : ""
              }`}
            >
              <img src={ImgSuccess} />
              <div className={`${prefixCls}-success-title`}>申请已提交成功</div>
              <div className={`${prefixCls}-success-tip`}>
                管理方正在审核，结果将以短信的形式通知。
              </div>
              <Button type="primary" onClick={this.onClickBackBtn}>
                返回
              </Button>
            </div>
          </div>
          {current === 1 && (
            <div className={`${prefixCls}-footer`}>
              <Button onClick={this.onClickPrevBtn}>上一步</Button>
              <Button
                type="primary"
                onClick={this.onClickSubmitBtn}
                loading={submiting}
              >
                确定
              </Button>
            </div>
          )}
        </div>
      </Form>
    );
  }
}
Form.create()(ApplyForm);
Form.create("apply-form")(ApplyForm);
export default withRouter(Form.create("apply-form")(ApplyForm));
class ApplyForm1 extends (PureComponent || Component) {}
class App extends React.Component {}
function Reads() {
  return <div>2</div>;
  return <div>2</div>;
}
function Reads1() {
  if (a) return <span>6</span>;
  return <Button>2</Button>;
}
function Reads2() {
  return <>2</>;
}
function Reads3() {
  return [3, 3];
}
const bbb = () => {};
class ApplyForm4 extends React.PureComponent {}
