
import { Label } from "@/components/ui/label";
import { FormElementInstance } from "../../FormElements";
import { SpacerFieldCustomInstance } from "./SpacerFieldFormElement";
import { LuSeparatorHorizontal } from "react-icons/lu";


export default function SpacerFieldDesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as SpacerFieldCustomInstance;
    const { height } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full items-center">
        <Label className="text-muted-foreground">Spacer field: {height}px</Label>
        <LuSeparatorHorizontal className="h-8 w-8" />
      </div>
    );
  }