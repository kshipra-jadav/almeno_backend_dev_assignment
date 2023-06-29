import { FC } from "react";
import { ColourPreviewProps } from "../utils/types.ts";

const ColourPreview: FC<ColourPreviewProps> = ({ UrineStripColours }) => {
  return (
    <>
      <div className="flex flex-col w-2/4 bg-yellow-300"></div>
    </>
  );
};

export default ColourPreview;
