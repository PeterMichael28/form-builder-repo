

import { Label } from "@/components/ui/label";
import { FormElementInstance } from "../../FormElements";
import { TextAreaFieldCustomInstance } from "./TextAreaFormElement";
import { Textarea } from "@/components/ui/textarea";

export default function TextAreaFieldDesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as TextAreaFieldCustomInstance;
    const { label, required, placeHolder, helperText, rows } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label>
          {label}
          {required && "*"}
        </Label>
        <Textarea readOnly disabled placeholder={placeHolder} />
        {helperText && <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>}
      </div>
    );
  }