import React from "react";

export type UrineStripColours = Record<
  "URO" | "BIL" | "KET" | "BLD" | "PRO" | "NIT" | "LEU" | "GLU" | "SG" | "PH",
  [number, number, number]
>;
export interface ColourCodesResponse {
  status: number;
  urine_strip_colours: UrineStripColours;
}
export type FileUploadProps = {
  setUrineStripColours: React.Dispatch<
    React.SetStateAction<UrineStripColours | undefined>
  >;
};
export type ColourPreviewProps = {
  UrineStripColours: UrineStripColours;
};
