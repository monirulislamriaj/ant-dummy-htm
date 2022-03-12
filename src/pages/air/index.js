import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import Layout from "../../components/general/layout";

export default function Air() {
  const [componentSize, setComponentSize] = useState("default");
  const [value, setValue] = useState(1);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFormSubmit = (values) => {
    console.log("Success:", values);
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <Layout title="BDTICKETS | Air Ticket Booking">
        <Form
          name="basic"
          onFinish={onFormSubmit}
          layout="vertical"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>


          <Form.Item required>
            <Input placeholder="phone number"/>
          </Form.Item>


          <Form.Item label="Input" required>
            <Input />
          </Form.Item>
          
          <Form.Item label="Select" required>
            <Select>
              <Select.Option value="demo1">Demo 1</Select.Option>
              <Select.Option value="demo2">Demo 2</Select.Option>
              <Select.Option value="demo3">Demo 3</Select.Option>
              <Select.Option value="demo4">Demo 4</Select.Option>
            </Select>
          </Form.Item>
         
          <Form.Item label="DatePicker" required>
            <DatePicker />
          </Form.Item>
          
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
          
          <Form.Item label="Switch">
            <Switch />
          </Form.Item>
          
          <Form.Item label="Select Option">
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Option A</Radio>
              <Radio value={2}>Option B</Radio>
              <Radio value={3}>Option C</Radio>
              <Radio value={4}>
                More...
                {value === 4 ? (
                  <Input style={{ width: 250, marginLeft: 10 }} />
                ) : null}
              </Radio>
            </Radio.Group>
          </Form.Item>
          
          <Form.Item label="Button">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          
          <Form.Item>
            <Button type="outline-primary">Button Secondary</Button>
          </Form.Item>
       
        </Form>
      </Layout>
    </div>
  );
}
