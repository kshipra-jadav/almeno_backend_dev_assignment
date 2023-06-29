import { FC } from "react";
import { ColourPreviewProps } from "../utils/types.ts";
import rgbHex from "rgb-hex";

const ColourPreview: FC<ColourPreviewProps> = ({ UrineStripColours }) => {
  const getHexClassName = (rgb: [number, number, number]) => {
    const [r, g, b] = rgb;
    return `#${rgbHex(r, g, b)}`;
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-1 justify-center px-5">
        {Object.entries(UrineStripColours).map((item) => {
          const [colour, rgb] = item;
          const hex = getHexClassName(rgb);
          console.log(hex);
          return (
            <div className="grid text-center">
              <div
                style={{
                  backgroundColor: hex,
                }}
                className="flex w-30 h-30 rounded-xl justify-center items-center"
              >
                {JSON.stringify(rgb)}
              </div>
              <div>{colour}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ColourPreview;
