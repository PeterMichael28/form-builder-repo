import { GetFormWithSubmissions } from "@/actions/form";
import { ElementsType, FormElementInstance } from "@/app/(dashboard)/builder/[id]/_components/FormElements";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import RowCell from "./RowCell";
import { formatDistance } from "date-fns";


type Row = { [key: string]: string } & {
    submittedAt: Date;
  };
  

export default async function SubmissionsTable({ id }: { id: number }) {
    const form = await GetFormWithSubmissions(id);
  
    if (!form) {
      throw new Error("form not found");
    }
  
    const formElements = JSON.parse(form.content) as FormElementInstance[];
    const columns: {
      id: string;
      label: string;
      required: boolean;
      type: ElementsType;
    }[] = [];
  
    formElements.forEach((element) => {
      switch (element.type) {
        case "TextField":
         case "NumberField":
         case "TextAreaField":
         case "DateField":
         case "SelectField":
         case "CheckboxField":
          columns.push({
            id: element.id,
            label: element.extraAttributes?.label,
            required: element.extraAttributes?.required,
            type: element.type,
          });
          break;
        default:
          break;
      }
    });
  
    const rows: Row[] = [];
    form.FormSubmissions.forEach((submission) => {
      const content = JSON.parse(submission.content);
      rows.push({
        ...content,
        submittedAt: submission.createdAt,
      });
    });
  
    return (
      <>
        <h1 className="text-2xl font-bold my-4">Submissions</h1>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.id} className="uppercase">
                    {column.label}
                  </TableHead>
                ))}
                <TableHead className="text-muted-foreground text-right uppercase">Submitted at</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <RowCell key={column.id} type={column.type} value={row[column.id]} />
                  ))}
                  <TableCell className="text-muted-foreground text-right">
                    {formatDistance(row.submittedAt, new Date(), {
                      addSuffix: true,
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </>
    );
  }
  
