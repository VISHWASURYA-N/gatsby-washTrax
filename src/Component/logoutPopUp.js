import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { navigate } from 'gatsby-link';

  const Popup= () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    navigate("/")
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        logout
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <h2>to logout click on OK...</h2>
      </Modal>
    </>
  );
};
export default Popup