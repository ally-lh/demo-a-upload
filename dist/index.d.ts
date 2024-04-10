import React from 'react';

interface FileUploadProps {
    width?: "full" | "half";
    transparent?: boolean;
}
declare const FileUpload: React.FC<FileUploadProps>;

export { FileUpload };
