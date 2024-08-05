// import '@ant-design/compatible/assets/index.css';

import { Col, DatePicker, Input, InputNumber, Select, Tag, Form } from 'antd';
import { UEditor } from 'components';
import moment from 'moment';
import PropTypes, { oneOf } from 'prop-types';
import React, { Component } from 'react';
import ChooseRegionField from './components/ChooseRegionField';
import FileField from './components/FileField';
import GetAddress from './components/GetAddress';
import ImageField from './components/ImageField';
import { getNewItemName } from './util';
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
class FormCommonItem extends Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {};
  }
  layout = (labelCol, wrapperCol) => {
    const { viewOnly } = this.props;
    return {
      labelCol: {
        span: labelCol,
      },
      wrapperCol: {
        span: wrapperCol,
      },
      className: viewOnly ? 'ant-form-item-viewOnly' : '',
    };
  };

  /*
  Todo: 存在明显性能问题, 待优化
  */
  // 渲染能通用的formItem
  renderNormalField = currentField => {
    const {
      currentItem,
      colNum,
      form: { getFieldValue },
      instanceEditor,
      viewOnly,
      renderSpecial,
      contractInfo,
      permissionFile,
      layoutType,
    } = this.props;
    const {
      fieldName,
      fieldDisplayName,
      items = [],
      mandatoryFlag,
      fieldType,
      extraUnit,
      fieldParam: { fieldParamType, length },
      render = text => text,
      fieldEditFlag,
      onChange = () => {},
      onBlur = () => {},
    } = currentField;
    console.log(viewOnly);
    const disabled = fieldEditFlag === 0;
    const readOnly = fieldEditFlag === 0;
    let [formItemLayout, bigFormItemLayout, colSpan] = [this.layout(6, 17), this.layout(6, 17), 24];
    switch (colNum) {
      case 3:
        [formItemLayout, bigFormItemLayout, colSpan] = [this.layout(6, 17), this.layout(6, 17), 8];
        break;
      case 2:
        [formItemLayout, bigFormItemLayout, colSpan] = [this.layout(8, 14), this.layout(4, 19), 12];
        break;
      default:
        [formItemLayout, bigFormItemLayout, colSpan] = [this.layout(6, 17), this.layout(6, 17), 24];
        break;
    }
    if (layoutType == 'vertical') {
      [formItemLayout, bigFormItemLayout, colSpan] = [null, null, 12];
    }
    // colNum == 2 ? [this.layout(8, 14), this.layout(4, 19), 12] : [this.layout(6, 17), this.layout(6, 17), 24];
    const onTextChange = value => {
      //版本8.3.0 UI升级导致，InputNumber组件暂不使用
      //小数
      if (['BigDecimal', 'Double'].includes(fieldType)) {
        return value && value.toString().replace(/[^\d.]/, '');
      }
      //整数
      if (['Integer', 'Byte', 'Long'].includes(fieldType)) {
        return value && parseInt(value, 10);
      }
      //(普通的input)
      return value.target ? value.target.value : value;
    };
    let item;
    if (renderSpecial) item = renderSpecial(currentItem, currentField, formItemLayout, colSpan);
    if (item) return item;
    let initial = currentItem[fieldName]?.toString().match(/\d+\.\d+/g);
    let initial2 = currentItem[fieldName];

    // 地图
    const latitude = currentItem.latitude || currentItem[`${fieldName}Latitude`];
    const longitude = currentItem.longitude || currentItem[`${fieldName}Longitude`];
    switch (fieldParamType) {
      //单行文本框
      case 'text':
        if (fieldName == 'length') {
          if (!currentItem[fieldName]) {
            initial = undefined;
            initial2 = undefined;
          }
        }
        return layoutType == 'vertical' ? (
          //垂直布局的时候 单位设置在标题
          <Col span={colSpan}>
            <FormItem
              label={fieldDisplayName}
              {...formItemLayout}
              initialValue={
                (fieldType === 'BigDecimal' || fieldType === 'Double') && initial && initial.length
                  ? initial[0]
                  : initial2
              }
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: fieldDisplayName + '不能为空',
                },
              ]}
              getValueFromEvent={onTextChange}
              name={fieldName}
              initialValue={
                (fieldType === 'BigDecimal' || fieldType === 'Double') && initial && initial.length
                  ? initial[0]
                  : initial2
              }
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: fieldDisplayName + '不能为空',
                },
              ]}
              getValueFromEvent={onTextChange}
            >
              {['BigDecimal', 'Double', 'Integer', 'Byte', 'Long'].includes(fieldType) ? (
                <InputNumber
                  placeholder={readOnly ? '-' : '请输入' + fieldDisplayName}
                  style={{
                    width: '100%',
                  }}
                  maxLength={length}
                  min={0}
                  disabled={disabled || readOnly}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              ) : (
                <Input
                  placeholder={readOnly ? '-' : '请输入' + fieldDisplayName}
                  style={{
                    width: '100%',
                  }}
                  addonAfter={extraUnit}
                  maxLength={length}
                  disabled={disabled || readOnly}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            </FormItem>
          </Col>
        ) : (
          <Col span={colSpan}>
            <FormItem
              label={fieldDisplayName}
              {...formItemLayout}
              initialValue={
                (fieldType === 'BigDecimal' || fieldType === 'Double') && initial && initial.length
                  ? initial[0]
                  : initial2
              }
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: fieldDisplayName + '不能为空',
                },
              ]}
              getValueFromEvent={onTextChange}
              name={fieldName}
              initialValue={
                (fieldType === 'BigDecimal' || fieldType === 'Double') && initial && initial.length
                  ? initial[0]
                  : initial2
              }
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: fieldDisplayName + '不能为空',
                },
              ]}
              getValueFromEvent={onTextChange}
            >
              {viewOnly || disabled ? (
                <span>{render(currentItem[fieldName], currentItem)}</span>
              ) : ['BigDecimal', 'Double', 'Integer', 'Byte', 'Long'].includes(fieldType) ? (
                <InputNumber
                  placeholder={readOnly ? '-' : '请输入' + fieldDisplayName}
                  style={{
                    width: extraUnit ? '80%' : '100%',
                  }}
                  maxLength={length}
                  min={0}
                  disabled={disabled || readOnly}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              ) : (
                <Input
                  placeholder={readOnly ? '-' : '请输入' + fieldDisplayName}
                  style={{
                    width: extraUnit ? '80%' : '100%',
                  }}
                  addonAfter={extraUnit}
                  maxLength={length}
                  disabled={disabled || readOnly}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
              {extraUnit ? (
                <span
                  style={{
                    marginLeft: 10,
                  }}
                >
                  {extraUnit}
                </span>
              ) : (
                ''
              )}
            </FormItem>
          </Col>
        );
      //多行文本框
      case 'multiText':
        return (
          <Col span={colSpan}>
            <FormItem
              label={fieldDisplayName}
              {...formItemLayout}
              initialValue={currentItem[fieldName]}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: fieldDisplayName + '不能为空',
                },
              ]}
              name={fieldName}
              initialValue={currentItem[fieldName]}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: fieldDisplayName + '不能为空',
                },
              ]}
            >
              {viewOnly ? (
                <pre>{render(currentItem[fieldName], currentItem)}</pre>
              ) : (
                <Input.TextArea rows={4} disabled={disabled || readOnly} onChange={onChange} maxLength={length} />
              )}
            </FormItem>
          </Col>
        );
      //富文本
      case 'richText':
        /** 富文本属性 -start- */
        const toolbars = [
          [
            'fullscreen',
            'undo',
            'redo',
            '|',
            'fontfamily',
            'fontsize',
            'bold',
            'italic',
            'underline',
            'fontborder',
            '|',
            'forecolor',
            'backcolor',
            '|',
            'link',
            '|',
            'insertimage',
            '|',
            'insertorderedlist',
            'insertunorderedlist',
            '|',
            'rowspacingtop',
            'rowspacingbottom',
            'lineheight',
            '|',
            'justifyleft',
            'justifycenter',
            'justifyright',
            'justifyjustify',
            '|',
            'indent',
            '|',
            'inserttable',
            'deletetable',
            'insertparagraphbeforetable',
            'insertrow',
            'deleterow',
            'insertcol',
            'deletecol',
            'mergecells',
            'mergeright',
            'mergedown',
            'splittocells',
            'splittorows',
            'splittocols',
            '|',
          ],
        ];

        /** 富文本属性 -end- */
        return (
          <Col span={24}>
            <FormItem
              label={fieldDisplayName}
              {...bigFormItemLayout}
              required={!readOnly && Boolean(!viewOnly && mandatoryFlag)}
            >
              {(viewOnly || disabled) && (
                <span
                  style={{
                    display: 'inline-block',
                    maxWidth: 600,
                    maxHeight: 300,
                    overflowY: 'auto',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: currentItem[fieldName],
                  }}
                />
              )}
              {
                <div
                  style={{
                    maxWidth: 600,
                    display: viewOnly ? 'none' : '',
                  }}
                >
                  <UEditor
                    content={currentItem[fieldName]}
                    width={'100%'}
                    height={400}
                    config={{
                      autoHeightEnabled: false,
                      maximumWords: 10000,
                      toolbars,
                    }}
                    getInstance={editor => {
                      instanceEditor && instanceEditor(fieldName, mandatoryFlag, editor, fieldDisplayName);
                    }}
                  />
                </div>
              }
            </FormItem>
          </Col>
        );

      //单选列表
      case 'customizationSelect':
      case 'unRenameSelect':
      case 'noOpsSelect':
      case 'select':
        const { selectItem, name } = getNewItemName(currentItem, fieldName, items);
        const initialValue =
          selectItem && (currentItem[fieldName] === 0 || currentItem[fieldName]) && currentItem[fieldName].toString();
        return (
          <Col span={colSpan}>
            <FormItem
              label={fieldDisplayName}
              {...formItemLayout}
              initialValue={initialValue}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: '请选择' + fieldDisplayName,
                },
              ]}
              name={fieldName}
              initialValue={initialValue}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: '请选择' + fieldDisplayName,
                },
              ]}
            >
              {viewOnly || disabled ? (
                <span>{name || '-'}</span>
              ) : (
                <Select
                  allowClear
                  placeholder={readOnly ? '-' : '请选择' + fieldDisplayName}
                  style={{
                    width: '100%',
                  }}
                  disabled={disabled || readOnly}
                  onChange={onChange}
                >
                  {items.map(v => {
                    let itemsId = v.businessValue === 0 || v.businessValue ? v.businessValue : v.itemId;
                    if (v.expandFlag) {
                      itemsId = itemsId + ',' + v.expandFlag;
                    }
                    itemsId = itemsId === 0 || itemsId ? itemsId.toString() : '';
                    return (
                      <Option value={itemsId} disabled={Boolean(v.expandFlag)} key={itemsId}>
                        {v.itemDisplayName}
                      </Option>
                    );
                  })}
                </Select>
              )}
            </FormItem>
          </Col>
        );
      case 'noOpsMultiSelect':
      case 'multiSelect':
        const multiSelectDTO = currentItem[fieldName + 'DTO'] || [];
        const multiSelectValue = multiSelectDTO.map(v => v.itemId);
        return (
          <Col span={colSpan}>
            <FormItem
              label={fieldDisplayName}
              {...formItemLayout}
              initialValue={multiSelectValue}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: '请选择' + fieldDisplayName,
                },
              ]}
              name={fieldName}
              initialValue={multiSelectValue}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: '请选择' + fieldDisplayName,
                },
              ]}
            >
              {viewOnly ? (
                <div className='form-group-show-name'>
                  {multiSelectDTO.map(v => (
                    <Tag key={v.itemId} closasble={false}>
                      {v.itemDisplayName}
                    </Tag>
                  ))}
                </div>
              ) : (
                <Select
                  allowClear
                  mode='multiple'
                  placeholder={readOnly ? '-' : '请选择' + fieldDisplayName}
                  style={{
                    width: '100%',
                  }}
                  disabled={disabled || readOnly}
                  onChange={onChange}
                >
                  {items.map(v => {
                    const itemsId = v.businessValue === 0 || v.businessValue ? v.businessValue : v.itemId;
                    return (
                      <Option value={itemsId} key={itemsId}>
                        {v.itemDisplayName}
                      </Option>
                    );
                  })}
                </Select>
              )}
            </FormItem>
          </Col>
        );
      //开始时间-结束时间
      case 'dateRange':
        return (
          <Col span={colSpan}>
            <FormItem
              label={fieldDisplayName}
              {...formItemLayout}
              initialValue={currentItem[fieldName] || null}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: '请选择' + fieldDisplayName,
                },
              ]}
              name={fieldName}
              initialValue={currentItem[fieldName] || null}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: '请选择' + fieldDisplayName,
                },
              ]}
            >
              {viewOnly ? (
                <span>
                  {currentItem[fieldName] ? moment(Number(currentItem[fieldName])).format('YYYY-MM-DD') : '-'}
                </span>
              ) : (
                <RangePicker
                  onChange={onChange}
                  format='YYYY-MM-DD'
                  style={{
                    width: '100%',
                  }}
                />
              )}
            </FormItem>
          </Col>
        );
      //时间
      case 'datetime':
        return (
          <Col span={colSpan}>
            <FormItem
              label={fieldDisplayName}
              {...formItemLayout}
              initialValue={currentItem[fieldName] ? moment(Number(currentItem[fieldName])) : null}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: '请选择' + fieldDisplayName,
                },
              ]}
              name={fieldName}
              initialValue={currentItem[fieldName] ? moment(Number(currentItem[fieldName])) : null}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: '请选择' + fieldDisplayName,
                },
              ]}
            >
              {viewOnly || disabled ? (
                <span>
                  {currentItem[fieldName] ? moment(Number(currentItem[fieldName])).format('YYYY-MM-DD') : '-'}
                </span>
              ) : (
                <DatePicker
                  style={{
                    width: '100%',
                  }}
                />
              )}
            </FormItem>
          </Col>
        );
      //带分钟的时间
      case 'datetimeWithM':
        return (
          <Col span={colSpan}>
            <FormItem
              label={fieldDisplayName}
              {...formItemLayout}
              initialValue={currentItem[fieldName] ? moment(Number(currentItem[fieldName])) : null}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: '请选择' + fieldDisplayName,
                },
              ]}
              name={fieldName}
              initialValue={currentItem[fieldName] ? moment(Number(currentItem[fieldName])) : null}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: '请选择' + fieldDisplayName,
                },
              ]}
            >
              {viewOnly ? (
                <span>
                  {currentItem[fieldName] ? moment(Number(currentItem[fieldName])).format('YYYY-MM-DD HH:mm') : '-'}
                </span>
              ) : (
                <DatePicker
                  showTime
                  style={{
                    width: '100%',
                  }}
                  format={'YYYY-MM-DD HH:mm'}
                />
              )}
            </FormItem>
          </Col>
        );
      //文件上传
      case 'file':
        return (
          <Col span={colSpan}>
            <FormItem
              label={fieldDisplayName}
              {...formItemLayout}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: '请上传' + fieldDisplayName,
                },
              ]}
              valuePropName={'fileList'}
              initialValue={currentItem[fieldName] ? currentItem[fieldName] : []}
            >
              <FileField limitCount={length} viewOnly={viewOnly} />
            </FormItem>
          </Col>
        );
      //图片上传
      case 'image':
        return (
          <Col span={colSpan}>
            <FormItem
              label={fieldDisplayName}
              {...formItemLayout}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: '请上传' + fieldDisplayName,
                },
              ]}
              valuePropName={'fileList'}
              initialValue={currentItem[fieldName] ? currentItem[fieldName] : []}
            >
              <ImageField limitCount={length} viewOnly={viewOnly} />
            </FormItem>
          </Col>
        );
      //地图选择地址
      //currentItem中的格式（key名不能变）
      // {
      //   address:'湖北省',
      //   latitude: 45.232,
      //   longitude: 121.2323
      // }
      //   listFiled中，"fieldParam": {fieldParamType: 'map', length: 32},
      case 'map':
        return (
          <Col span={colSpan}>
            <FormItem
              label={fieldDisplayName}
              {...formItemLayout}
              initialValue={{
                address: currentItem.address || currentItem[fieldName],
                latitude,
                longitude,
              }}
              valuePropName={'address'}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: fieldDisplayName + '不能为空',
                  transform: v => {
                    return v.address;
                  },
                },
              ]}
              name={fieldName}
              initialValue={{
                address: currentItem.address || currentItem[fieldName],
                latitude,
                longitude,
              }}
              valuePropName={'address'}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: fieldDisplayName + '不能为空',
                  transform: v => {
                    return v.address;
                  },
                },
              ]}
            >
              {viewOnly ? (
                <span>{currentItem.address || (latitude && longitude ? latitude + ' ， ' + longitude : '')}</span>
              ) : (
                <GetAddress
                  latitude={latitude || ''}
                  longitude={longitude || ''}
                  currentItem={currentItem[fieldName]}
                />
              )}
            </FormItem>
          </Col>
        );
      //省市区选择
      case 'region':
        return (
          <Col span={colSpan}>
            <FormItem
              label={fieldDisplayName}
              {...formItemLayout}
              initialValue={currentItem[fieldName]}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: fieldDisplayName + '不能为空',
                },
              ]}
              name={fieldName}
              initialValue={currentItem[fieldName]}
              rules={[
                {
                  required: !readOnly && Boolean(!viewOnly && mandatoryFlag),
                  message: fieldDisplayName + '不能为空',
                },
              ]}
            >
              {viewOnly ? <span>{currentItem[fieldName + 'Name']}</span> : <ChooseRegionField />}
            </FormItem>
          </Col>
        );
      default:
        return <span>该form类型尚未定义</span>;
    }
  };
  render() {
    const { props } = this;
    const { currentField } = props;
    if (typeof currentField.fieldParam === 'string') {
      currentField.fieldParam = JSON.parse(currentField.fieldParam);
    }
    return this.renderNormalField(currentField);
  }
}
FormCommonItem.propTypes = {
  form: PropTypes.object,
  //继承父级的props.forms
  currentField: PropTypes.object,
  //渲染单个formitem的对象，格式请参考接口/field/listFields 下的一个对象
  viewOnly: PropTypes.bool,
  //是否不可编辑

  //用来初始化的json对象
  //如果是附件的话，请将附件数组里面的对象，转成下面格式，用于FileField的fileList属性值，初始化
  /*{
   uid: v.id,
   name: v.name,
   status: 'done',
   size: v.fileSize,
   url: v.contentUrl,
   uri: v.contentUri
   }*/
  currentItem: PropTypes.object,
  layoutType: PropTypes.oneOf(['horizontal', 'vertical']),
};
FormCommonItem.defaultProps = {
  currentField: {
    fieldParam: {},
  },
  viewOnly: false,
  currentItem: {},
  colNum: 2,
  instanceEditor: () => {},
  layoutType: undefined,
};
export default FormCommonItem;
function Test() {
  return (
    <Form.Item>
      {['BigDecimal', 'Double', 'Integer', 'Byte', 'Long'].includes(fieldType) ? (
        <InputNumber
          placeholder={readOnly ? '-' : '请输入' + fieldDisplayName}
          style={{
            width: '100%',
          }}
          maxLength={length}
          min={0}
          disabled={disabled || readOnly}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <Input
          placeholder={readOnly ? '-' : '请输入' + fieldDisplayName}
          style={{
            width: '100%',
          }}
          addonAfter={extraUnit}
          maxLength={length}
          disabled={disabled || readOnly}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    </Form.Item>
  );
}
