import { z } from "zod";
import { ElementsType, FormElement, FormElementInstance } from "../../FormElements";
import { BsFillCalendarDateFill } from "react-icons/bs";
import DateFieldDesignerComponent from "./DateFieldDesignerComponent";
import DateFieldFormComponent from "./DateFieldFormComponent";
import DateFieldPropertiesComponent from "./DateFieldPropertiesComponent";


const type: ElementsType = "DateField";

export const DateFieldExtraAttributes = {
  label: "Date field",
  helperText: "Pick a date",
  required: false,
};

export const DateFieldPropertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
});

export const DateFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: DateFieldExtraAttributes,
  }),
  designerBtnElement: {
    icon: BsFillCalendarDateFill,
    label: "Date Field",
  },
  designerComponent: DateFieldDesignerComponent,
  formComponent: DateFieldFormComponent,
  propertiesComponent: DateFieldPropertiesComponent,

  validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as DateFieldCustomInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};

export type DateFieldCustomInstance = FormElementInstance & {
  extraAttributes: typeof DateFieldExtraAttributes;
};
