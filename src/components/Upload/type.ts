export type Files = FileList

export type GetBase64Func = (file: File, callback: (base64: string) => void) => void

export type UploadEvent = (file: Files, getBase64: GetBase64Func) => void

export type BeforeUploadEvent = (file: Files) => boolean
