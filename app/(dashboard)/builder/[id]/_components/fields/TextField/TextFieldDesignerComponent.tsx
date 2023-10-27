import { Label } from "@/components/ui/label";
import { FormElementInstance } from "../../FormElements";
import { Input } from "@/components/ui/input";


const extraAttributes = {
    label: "Text field",
    helperText: "Helper text",
    required: false,
    placeHolder: "Value here...",
};
   
type CustomInstance = FormElementInstance & {
    extraAttributes: typeof extraAttributes;
  };



export default function TextFieldDesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as CustomInstance;
    const { label, required, placeHolder, helperText } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label>
          {label}
          {required && "*"}
        </Label>
        <Input readOnly disabled placeholder={placeHolder} />
        {helperText && <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>}
      </div>
    );
  }