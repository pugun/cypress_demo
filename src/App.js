import logo from "./logo.svg";
import "./App.css";
import { Form, Input, InputNumber, Button, Select } from "antd";

function App() {
  const { Option } = Select;
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log("data response"));

    console.log(values);
  };
  return (
    <div className="App" style={{ padding: "10% 25%" }}>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name={["name"]} label="Name" rules={[{ required: true }]}>
          <Input data-cy="name_input" />
        </Form.Item>
        <Form.Item name={["email"]} label="Email" rules={[{ type: "email" }]}>
          <Input data-cy="email_input" />
        </Form.Item>
        <Form.Item
          name={["age"]}
          label="Age"
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          <InputNumber data-cy="age_input" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["website"]} label="Website">
          <Input data-cy="website_input" />
        </Form.Item>
        <Form.Item name={["introduction"]} label="Introduction">
          <Input.TextArea data-cy="introduction_input" />
        </Form.Item>
        <Form.Item label="Dropdown" name={["dropdown"]}>
          <Select name={["dropdown"]} defaultValue="lucy" style={{ width: "100%" }} data-cy="dropdown">
            <Option data-cy="dropdown_v1" value="jack">Jack</Option>
            <Option data-cy="dropdown_v2" value="lucy">Lucy</Option>
            <Option data-cy="dropdown_v3" value="Yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" data-cy="submit_btn">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
