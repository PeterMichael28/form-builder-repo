// 

import { Label } from "@/components/ui/label";
import { FormElementInstance } from "../../FormElements";
import { Input } from "@/components/ui/input";
import { FileFieldExtraAttributes } from "./FileFieldFormElement";



   
type FileFieldCustomInstance = FormElementInstance & {
    extraAttributes: typeof FileFieldExtraAttributes;
  };



export default function FileFieldDesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as FileFieldCustomInstance;
    const { label, required, helperText } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label>
          {label}
          {required && "*"}
        </Label>
        <Input  type="file" />
        {helperText && <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>}
      </div>
    );
  }