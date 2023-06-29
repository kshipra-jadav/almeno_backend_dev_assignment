import { ChangeEvent, FC, MouseEvent, useState } from "react";
import { axiosInstance } from "../utils/axiosConfig.ts";
import { ColourCodesResponse, FileUploadProps } from "../utils/types.ts";

const FileUpload: FC<FileUploadProps> = ({ setUrineStripColours }) => {
  const [fileName, setFileName] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files;
    if (files) {
      const file = files[0];
      setFileName(file.name);
      setUploadedFile(file);
    }
  };

  const handleFileUpload = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    if (uploadedFile) {
      const formData = new FormData();
      formData.append("urine_strip", uploadedFile);
      console.log(uploadedFile);
      const { data } = await axiosInstance.post<ColourCodesResponse>(
        "/colour-codes/",
        formData
      );
      // console.log(data.urine_strip_colours);
      setUrineStripColours(data.urine_strip_colours);
    }
  };
  return (
    <>
      <div className="flex flex-col w-full px-5">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PNG or JPG
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept="image/*"
            />
          </label>
        </div>
        <div className="text-xl mt-5 flex flex-row ml-2">
          {fileName && (
            <div>
              <p>Uploaded Image :- {fileName}</p>
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-2"
                onClick={handleFileUpload}
              >
                Upload File
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FileUpload;
