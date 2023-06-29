import React from "react";

export type UrineStripColours = {
  URO: Array<number>;
  BIL: Array<number>;
  KET: Array<number>;
  BLD: Array<number>;
  PRO: Array<number>;
  NIT: Array<number>;
  LEU: Array<number>;
  GLU: Array<number>;
  SG: Array<number>;
  PH: Array<number>;
};
export type ColourCodesResponse = {
  status: number;
  urine_strip_colours: UrineStripColours;
};
export type FileUploadProps = {
  setUrineStripColours: React.Dispatch<
    React.SetStateAction<UrineStripColours | undefined>
  >;
};
export type ColourPreviewProps = {
  UrineStripColours: UrineStripColours;
};
