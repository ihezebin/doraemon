import React from 'react';
import {
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';
// @ts-ignore
import { BeforeUploadEvent, Upload, UploadEvent } from '@hezebin/doraemon';
import { Button } from 'antd';

const UploadExample = () => {
  const handleBeforeUpload: BeforeUploadEvent = (files: any) => {
    console.log('validate:', files);
    return true;
  };

  const handleUpload: UploadEvent = (files: any, getBase64: any) => {
    console.log('upload:', files);
    if (files && files.length > 0)
      getBase64(files?.item(0) as File, (base64: string) =>
        console.log(base64),
      );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <Upload onUpload={handleUpload} beforeUpload={handleBeforeUpload}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
      <div>
        <Upload
          type={'drag'}
          onUpload={handleUpload}
          beforeUpload={handleBeforeUpload}
        >
          {status === 'uploading' ? (
            <LoadingOutlined />
          ) : (
            <>
              <PlusOutlined /> Upload
            </>
          )}
        </Upload>
      </div>
      <div>
        <Upload
          type={'image'}
          cropProps={{ aspectRatio: 1 }}
          onUpload={handleUpload}
        >
          <PlusOutlined /> Image
        </Upload>
      </div>
      <div>
        <Upload
          disabled
          type={'drag'}
          onUpload={handleUpload}
          beforeUpload={handleBeforeUpload}
        >
          <PlusOutlined /> Upload
        </Upload>
      </div>
    </div>
  );
};

export default UploadExample;
