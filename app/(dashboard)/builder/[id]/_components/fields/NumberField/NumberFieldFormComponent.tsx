// NumberFieldFormComponent
"use client"
import { useEffect, useState } from "react";
import { FormElementInstance, SubmitFunction } from "../../FormElements";
import { NumberFieldCustomInstance, NumberFieldFormElement } from "./NumberFieldFormElement";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function NumberFieldFormComponent({
    elementInstance,
    submitValue,
    isInvalid,
    defaultValue,
  }: {
    elementInstance: FormElementInstance;
    submitValue?: SubmitFunction;
    isInvalid?: boolean;
    defaultValue?: string;
  }) {
    const element = elementInstance as NumberFieldCustomInstance;
  
    const [value, setValue] = useState(defaultValue || "");
    const [error, setError] = useState(false);
  
    useEffect(() => {
      setError(isInvalid === true);
    }, [isInvalid]);
  
    const { label, required, placeHolder, helperText } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label className={cn(error && "text-red-500")}>
          {label}
          {required && "*"}
        </Label>
        <Input
          type="number"
          className={cn(error && "border-red-500")}
          placeholder={placeHolder}
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) => {
            if (!submitValue) return;
            const valid = NumberFieldFormElement.validate(element, e.target.value);
            setError(!valid);
            if (!valid) return;
            submitValue(element.id, e.target.value);
          }}
          value={value}
        />
        {helperText && <p className={cn("text-muted-foreground text-[0.8rem]", error && "text-red-500")}>{helperText !== "Helper Text" && helperText}</p>}
      </div>
    );
  }
  