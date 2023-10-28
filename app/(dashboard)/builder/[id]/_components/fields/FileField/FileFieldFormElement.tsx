import React from "react";
import {
 ElementsType,
 FormElement,
 FormElementInstance,
} from "../../FormElements";
import { AiOutlineCloudUpload } from "react-icons/ai";
import FileFieldDesignerComponent from "./FileFieldDesignerComponent";
import FileFieldPropertiesComponent from "./FileFieldPropertiesComponent";
import FileFieldFormComponent from "./FileFieldFormComponent";

const type: ElementsType = "FileField";

export const FileFieldExtraAttributes = {
 label: "File field",
 helperText: "Helper text",
 required: false,
};
export type FileFieldCustomInstance = FormElementInstance & {
    extraAttributes: typeof FileFieldExtraAttributes;
  };
export const FileFieldFormElement: FormElement = {
 type,
 construct: (id: string) => ({
  id,
  type,
  extraAttributes: FileFieldExtraAttributes,
 }),
 designerBtnElement: {
  icon: AiOutlineCloudUpload,
  label: "FileField",
 },
 designerComponent: FileFieldDesignerComponent,
 formComponent: FileFieldFormComponent,
 propertiesComponent: FileFieldPropertiesComponent,

 validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as FileFieldCustomInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};
