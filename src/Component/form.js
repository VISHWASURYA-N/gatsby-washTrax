import React from "react"
import { Form, Input, Button } from "antd"
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const InputForm = props => {
  var inputData = ""
  switch (props.type) {
    case "text":
      inputData = <Input placeholder={props.placeholder} rules={props.rules}   prefix={<MailOutlined className="text-primary" />} />

      break

    case "password":
      inputData = <Input.Password   rules={props.rules}  prefix={<LockOutlined className="text-primary" />} placeholder={props.placeholder} />

      break

    case "submit":
      inputData = (
        <Button
        block
          type={props.className}
          htmlType={props.type}
        >{props.btnName}</Button>
      )

      break
  }
  console.log(inputData)
  return (
      <div >
    <Form.Item label={props?.label} name={props?.name} rules={props?.rules} >
      {inputData}
    </Form.Item>
    </div>
  )
}

export default InputForm
