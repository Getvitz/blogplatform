import React from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { OnDeleteModalType } from '../../../typescript/types/types';

const { confirm } = Modal;

function deleteModal(cb: OnDeleteModalType) {
  confirm({
    okText: 'Yes',
    cancelText: 'No',
    maskClosable: true,
    icon: <ExclamationCircleOutlined />,
    title: 'Are you sure to delete this article?',
    style: { position: 'absolute', top: 230, right: 250},
    onOk() {
      cb();
    },
  });
}

export default deleteModal;