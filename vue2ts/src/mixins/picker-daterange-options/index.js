const pickerDaterangeOptions = {
    data() {
        return {
            /**
             *
             * => @时间选择器公共配置
             *
             */
            pickerDaterangeOptions: {
                'type': 'daterange',
                'format': 'yyyy-MM-dd',
                'value-format': 'yyyy-MM-dd',
                'start-placeholder': '开始日期',
                'end-placeholder': '结束日期',
                'range-separator': '至',
                'clearable': true,
                'pickerOptions': {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 1000 * 60 * 60 * 24;
                    },
                },
            },
        };
    },
};

export { pickerDaterangeOptions };
