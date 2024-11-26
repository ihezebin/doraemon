import React, {
  ChangeEventHandler,
  DragEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import { Modal, Slider } from 'antd';
import type { ReactCropperElement } from 'react-cropper';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import './index.scss';
import { doraemonClassName } from '../../utils/internal';

import { BeforeUploadEvent, Files, UploadEvent } from './type';

interface IUploadProps extends React.ComponentProps<any> {
  /**
   * @description 文件上传类型
   * @default 'default'
   * @exception 如果 type 为 image 时，multiple 强制为 false
   */
  type?: 'drag' | 'image' | 'default';
  multiple?: boolean;
  beforeUpload?: BeforeUploadEvent;
  onUpload: UploadEvent;
  disabled?: boolean;
  cropProps?: {
    aspectRatio?: number;
    width?: number;
    height?: number;
    previewKey?: string;
  };
}

const beforeImageUpload = (files: Files): boolean => {
  for (let i = 0; files && i < files.length; i++) {
    const file = files.item(i)
    const fileType = file?.type || ''
    const isValid = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/svg+xml', 'image/webp', 'image/vnd.microsoft.icon'].includes(fileType)
    if (!isValid) {
      console.log('invalid file type:', fileType)
      return false
    }
  }
  return true
}

const Upload = ({
  children,
  style: styleObj,
  className,
  type = 'default',
  multiple,
  beforeUpload = type === 'image' ? beforeImageUpload : undefined,
  onUpload,
  disabled,
  cropProps = {
    width: 300,
    height: 300,
    previewKey: 'preview',
  },
}: IUploadProps) => {
  const fileRef = useRef<HTMLInputElement | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>()
  const [imageUrl, setImageUrl] = useState<string>()
  const [imageRotate, setImageRotate] = useState<number>(0)
  const cropperRef = useRef<ReactCropperElement>(null)

  useEffect(() => {
    cropperRef.current?.cropper.rotateTo(imageRotate)
  }, [imageRotate])

  const getBase64 = (file: File, callback: (base64: string) => void) => {
    const reader = new FileReader()
    // reader.result 包含了转换为Base64的图片
    reader.onloadend = () => callback(reader.result as string)
    reader.readAsDataURL(file) // 将文件读取为 Data URL (Base64字符串)
  }

  const handleClick = () => {
    if (disabled) return
    fileRef.current?.click()
  }

  const handleDrop: DragEventHandler = (event) => {
    // 默认情况下，浏览器会阻止将文件拖放到页面上，这一步告诉浏览器我们允许文件被拖放到这个区域。
    event.preventDefault()
    if (disabled) return
    const files = event.dataTransfer.files
    // 处理文件，例如上传到服务器
    handleFileCheck(files)
  }

  const handleDragOver: DragEventHandler = (event) => {
    event.preventDefault()
    if (disabled) return
  }

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files
    if (!files) return
    handleFileCheck(files)
  }

  const handleFileCheck = (files: Files) => {
    if (beforeUpload) {
      // 文件上传前的校验函数，如果返回false，表示不继续处理文件
      if (!beforeUpload(files)) {
        return
      }
    }
    if (type === 'image' && files && files.length > 0) {
      if (!beforeImageUpload(files)) return
      getBase64(files[0], (base64) => {
        setIsModalOpen(true)
        setImageUrl(base64)
        return
      })
    } else {
      handleFileUpload(files)
    }
  }

  const handleFileUpload = (files: Files) => {
    onUpload && onUpload(files, getBase64)
  }

  const handleImageCrop = () => {
    if (!fileRef.current || !fileRef.current.files) return
    const fileName = fileRef.current?.files[0].name
    const fileType = fileRef.current?.files[0].type
    const cropper = cropperRef.current?.cropper
    cropper?.getCroppedCanvas().toBlob(
      (blob) => {
        if (blob) {
          const file = new File([blob], fileName, {
            type: fileType,
          })
          const fileList = new DataTransfer()
          fileList.items.add(file)
          handleFileUpload(fileList.files)
          handleCancelCrop()
        }
      },
      fileType,
      1,
    )
  }

  const handleCancelCrop = () => {
    setIsModalOpen(false)
    if (fileRef.current) fileRef.current.value = ''
  }

  return (
    <>
      <div
        className={classNames(
          doraemonClassName('upload-wrapper'),
          {
            [doraemonClassName('upload-drag-wrapper')]: type === 'drag' || type === 'image',
            [doraemonClassName('upload-image-wrapper')]: type === 'image',
            [doraemonClassName('upload-disabled')]: disabled,
          },
          className,
        )}
        style={styleObj}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}>
        <input ref={fileRef} type="file" multiple={multiple && type !== 'image'} style={{ display: 'none' }} onChange={handleFileChange} />
        {children}
      </div>
      <Modal maskClosable={false} width={(cropProps?.width || 300) * 2} title="编辑图片" okText={'确定'} cancelText={'取消'} open={isModalOpen} onOk={handleImageCrop} onCancel={handleCancelCrop}>
        <div className={doraemonClassName('upload-crop-wrapper')}>
          <Cropper
            src={imageUrl}
            style={{ height: cropProps?.height || 300, width: cropProps?.width || 300 }}
            // https://github.com/fengyuanchen/cropperjs#options
            initialAspectRatio={1}
            aspectRatio={cropProps?.aspectRatio}
            viewMode={2}
            preview={`.${cropProps?.previewKey || 'preview'}`}
            minCropBoxHeight={1}
            minCropBoxWidth={1}
            // 自动裁剪区域, 内容大小一致
            autoCropArea={1}
            ref={cropperRef}
          />
          <div className={doraemonClassName('upload-crop-wrapper-preview')} style={{ height: cropProps?.height || 300, width: cropProps?.width || 300 }}>
            <div className={cropProps?.previewKey || 'preview'} style={{ height: cropProps?.height || 300, width: cropProps?.width || 300, overflow: 'hidden' }}></div>
          </div>
        </div>
        <Slider tooltip={{ formatter: (value?: number) => `旋转角度 ${value}°` }} step={0.5} min={0} max={360} value={imageRotate} onChange={(value) => setImageRotate(value)} />
      </Modal>
    </>
  )
}

export default Upload
