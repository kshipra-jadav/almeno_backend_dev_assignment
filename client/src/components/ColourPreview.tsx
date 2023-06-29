import { FC } from "react";
import { ColourPreviewProps } from "../utils/types.ts";

const ColourPreview: FC<ColourPreviewProps> = ({ UrineStripColours }) => {
  return (
    <>
      <div className="flex flex-col w-2/4 bg-yellow-300">
        {Object.entries(UrineStripColours).map((item) => {
          const [key, value] = item;
          return (
            <div>
              {key} : {value.map((val) => `${val} - `)}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ColourPreview;
