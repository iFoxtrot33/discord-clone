"use-client";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageImage" | "serverImage";
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  return <div>File Upload Component</div>;
};
