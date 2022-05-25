/* eslint-disable */
import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import {
  Designer, //设计器根组件，用于下发上下文
  IconWidget, //图标挂件，用于获取各种系统内置图标
  DesignerToolsWidget, //画板工具挂件
  ViewToolsWidget, //视图切换工具挂件
  Workspace, //工作区组件，核心组件，用于管理工作区内的拖拽行为，树节点数据等等...
  OutlineTreeWidget, //大纲树组件，它会自动识别当前工作区，展示出工作区内树节点
  DragSourceWidget, //拖拽源组件
  MainPanel, //主布局面板
  CompositePanel, //左侧组合布局面板
  WorkspacePanel, //工作区布局面板
  ToolbarPanel, //工具栏布局面板
  ViewportPanel, //视口布局面板
  ViewPanel, //视图布局面板
  SettingsPanel, //右侧配置表单布局面板
  ComponentTreeWidget, //组件树渲染器
} from '@designable/react';
import { SettingsForm } from '@designable/react-settings-form';
import { createDesigner, GlobalRegistry } from '@designable/core';
import { createDesignableField, createDesignableForm } from '@formily/designable-antd';
import {
  transformToSchema, //将组件树结构转换成Formily JSON Schema
  transformToTreeNode, //将Formily JSON Schema转换成组件树
} from '@designable/formily';
import {
  LogoWidget, //业务自定义Logo渲染组件
  PreviewWidget, //业务自定义预览组件
  SchemaEditorWidget, //业务自定义Schema编辑器
  MarkupSchemaWidget, //业务自定义源码预览器器
} from './widgets';
import { Button } from 'antd';
import 'antd/dist/antd.less';

GlobalRegistry.registerDesignerLocales({
  'zh-CN': {
    sources: {
      Inputs: '输入控件',
      Layouts: '布局组件',
      Arrays: '自增组件',
    },
  },
  'en-US': {
    sources: {
      Inputs: 'Inputs',
      Layouts: 'Layouts',
      Arrays: 'Arrays',
    },
  },
});

const Root = createDesignableForm({
  registryName: 'Root',
});

const DesignableField = createDesignableField({
  registryName: 'DesignableField',
});

const App = () => {
  const engine = useMemo(() => createDesigner(), []);

  useEffect(() => {
    //业务层拿到schema用于回显数据
    fetchSchema().then(schema => {
      engine.setCurrentTree(
        transformToTreeNode(schema, {
          designableFieldName: 'DesignableField',
          designableFormName: 'Root',
        })
      );
    });
  }, []);

  return (
    <Designer engine={engine} theme="dark">
      <MainPanel
        logo={<LogoWidget />}
        actions={
          <Button
            onClick={() => {
              submitSchema({
                schema: transformToSchema(engine.getCurrentTree(), {
                  designableFieldName: 'DesignableField',
                  designableFormName: 'Root',
                }),
              });
            }}>
            Save
          </Button>
        }>
        <CompositePanel>
          <CompositePanel.Item title="panels.Component" icon={<IconWidget infer="Component" />}>
            <DragSourceWidget title="sources.Inputs" name="inputs" />
            <DragSourceWidget title="sources.Layouts" name="layouts" />
            <DragSourceWidget title="sources.Arrays" name="arrays" />
          </CompositePanel.Item>
          <CompositePanel.Item title="panels.OutlinedTree" icon={<IconWidget infer="Outline" />}>
            <OutlineTreeWidget />
          </CompositePanel.Item>
        </CompositePanel>
        <Workspace id="form">
          <WorkspacePanel>
            <ToolbarPanel>
              <DesignerToolsWidget />
              <ViewToolsWidget use={['DESIGNABLE', 'JSONTREE', 'MARKUP', 'PREVIEW']} />
            </ToolbarPanel>
            <ViewportPanel>
              <ViewPanel type="DESIGNABLE">
                {() => (
                  <ComponentTreeWidget
                    components={{
                      Root,
                      DesignableField,
                    }}
                  />
                )}
              </ViewPanel>
              <ViewPanel type="JSONTREE" scrollable={false}>
                {(tree, onChange) => <SchemaEditorWidget tree={tree} onChange={onChange} />}
              </ViewPanel>
              <ViewPanel type="MARKUP" scrollable={false}>
                {tree => <MarkupSchemaWidget tree={tree} />}
              </ViewPanel>
              <ViewPanel type="PREVIEW">{tree => <PreviewWidget tree={tree} />}</ViewPanel>
            </ViewportPanel>
          </WorkspacePanel>
        </Workspace>
        <SettingsPanel title="panels.PropertySettings">
          <SettingsForm uploadAction="https://www.mocky.io/v2/5cc8019d300000980a055e76" />
        </SettingsPanel>
      </MainPanel>
    </Designer>
  );
};

export default App;
