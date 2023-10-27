"use client"

import useDesigner from "@/hooks/useDesigner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { SubtitleCustomInstance } from "./SubTitleFieldFormElement";
import { FormElementInstance } from "../../FormElements";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const SubtitlePropertiesSchema = z.object({
    title: z.string().min(2).max(50),
  });
type SubtitlePropertiesFormSchemaType = z.infer<typeof SubtitlePropertiesSchema>;

function SubtileFieldPropertiesComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
  const element = elementInstance as SubtitleCustomInstance;
  const { updateElement } = useDesigner();
  const form = useForm<SubtitlePropertiesFormSchemaType>({
    resolver: zodResolver(SubtitlePropertiesSchema),
    mode: "onBlur",
    defaultValues: {
      title: element.extraAttributes.title,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: SubtitlePropertiesFormSchemaType) {
    const { title } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        title,
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}


export default SubtileFieldPropertiesComponent