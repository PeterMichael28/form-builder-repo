import { CheckboxFieldFormElement } from "./fields/CheckboxField/CheckboxFieldFormElement";
import { DateFieldFormElement } from "./fields/DateField/DateFieldFormElement";
import { FileFieldFormElement } from "./fields/FileField/FileFieldFormElement";
import { NumberFieldFormElement } from "./fields/NumberField/NumberFieldFormElement";
import { ParagraphFieldFieldFormElement } from "./fields/ParagraphField/ParagraphFieldFormElement";
import { SelectFieldFormElement } from "./fields/SelectField/SelectFieldFormElement";
import { SeparatorFieldFormElement } from "./fields/SeperatorField/SeparatorFieldFormElement";
import { SpacerFieldFormElement } from "./fields/SpacerField/SpacerFieldFormElement";
import SubTitleFieldFormElement from "./fields/SubtitleField/SubTitleFieldFormElement";
import { TextAreaFormElement } from "./fields/TextAreaField/TextAreaFormElement";
import { TextFieldFormElement } from "./fields/TextField/TextField";
import TitleFieldFormElement from "./fields/TitleField/TitleFieldFormElement";

export type ElementsType = "TextField"
  | "TitleField"
  | "SubTitleField"
  | "ParagraphField"
  | "SeparatorField"
  | "SpacerField"
  | "NumberField"
  | "TextAreaField"
  | "DateField"
  | "SelectField"
    | "CheckboxField"
    | "FileField";

export type SubmitFunction = (
 key: string,
 value: string
) => void;

export type FormElement = {
 type: ElementsType;

 construct: (id: string) => FormElementInstance;

 designerBtnElement: {
  icon: React.ElementType;
  label: string;
 };

 designerComponent: React.FC<{
  elementInstance: FormElementInstance;
 }>;
 formComponent: React.FC<{
  elementInstance: FormElementInstance;
  submitValue?: SubmitFunction;
  isInvalid?: boolean;
  defaultValue?: string;
 }>;
 propertiesComponent: React.FC<{
  elementInstance: FormElementInstance;
 }>;

   validate: (formElement: FormElementInstance, currentValue: string) => boolean;
};

export type FormElementInstance = {
 id: string;
 type: ElementsType;
 extraAttributes?: Record<string, any>;
};

type FormElementsType = {
 [key in ElementsType]: FormElement;
};
export const FormElements: FormElementsType = {
 TextField: TextFieldFormElement,
 TitleField: TitleFieldFormElement,
 SubTitleField: SubTitleFieldFormElement,
 ParagraphField: ParagraphFieldFieldFormElement,
 SeparatorField: SeparatorFieldFormElement,
 SpacerField: SpacerFieldFormElement,
 NumberField: NumberFieldFormElement,
 TextAreaField: TextAreaFormElement,
 DateField: DateFieldFormElement,
 SelectField: SelectFieldFormElement,
 CheckboxField: CheckboxFieldFormElement,
 FileField: FileFieldFormElement,
};
