{getFieldDecorator("organizationName", {
  rules: [{
    required: true,
    message: "请选择企业",
    transform: whitespaceTrim
  }]
})(<Select placeholder="请输入关键字" onSearch={this.onSearch} onSelect={this.handleChange} loading={fetching} filterOption={false} showSearch style={{
  width: 448
}}>
                    {list.map(it => <Select.Option key={it.id} dataRef={it} value={it.name}>
                        {it.name}
                      </Select.Option>)}
                  </Select>)}