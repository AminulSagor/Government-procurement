import PrimaryButton from "@/components/buttons/primary-button";
import Card from "@/components/cards/card";
import { Bolt, Download } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldLabel } from "@/components/ui/field";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ReportConfigaration = () => {
  //handle download report
  const handleDownLoadReport = () => {};
  return (
    <Card>
      <div className="space-y-4">
        <p className="flex font-semibold gap-3 items-center">
          <span>
            <Bolt size={18} className="text-primary-color" />
          </span>
          <span>কনফিগারেশন</span>
        </p>

        {/* report type */}
        <Select>
          <div className="space-y-1">
            <FieldLabel className="font-semibold">রিপোর্টের ধরন</FieldLabel>
            <SelectTrigger className="w-full focus-visible:ring-1 cursor-pointer">
              <SelectValue placeholder="ক্রয় সারাংশ (Procurement Summary)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                ক্রয় সারাংশ (Procurement Summary)
              </SelectItem>
              <SelectItem value="dark">
                ব্যয় বিবরণী (Expenditure Statement)
              </SelectItem>
            </SelectContent>
          </div>
        </Select>

        {/* select year */}
        <Select>
          <div className="space-y-1">
            <FieldLabel className="font-semibold">অর্থবছর</FieldLabel>
            <SelectTrigger className="w-full focus-visible:ring-1 cursor-pointer">
              <SelectValue placeholder="২০২৫ - ২০২৬ (বর্তমান)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">২০২৫ - ২০২৬ (বর্তমান)</SelectItem>
              <SelectItem value="light">২০২৩ - ২০২৪ </SelectItem>
              <SelectItem value="dark">২০২২ - ২০২৩</SelectItem>
            </SelectContent>
          </div>
        </Select>

        {/*download format */}
        <h3 className="text-sm font-semibold">ফরম্যাট</h3>
        <RadioGroup defaultValue="option-one" className="flex gap-4">
          <div className="flex items-center gap-3">
            <RadioGroupItem
              value="option-one"
              id="option-one"
              className="data-[state=checked]:border-primary-color
    data-[state=checked]:text-primary-color border-2"
            />
            <Label htmlFor="option-one">PDF</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem
              value="option-two"
              id="option-two"
              className="data-[state=checked]:border-primary-color
    data-[state=checked]:text-primary-color border-2"
            />
            <Label htmlFor="option-two">Excel</Label>
          </div>
        </RadioGroup>

        {/* download button */}
        <PrimaryButton
          className="flex font-semibold items-center gap-2 px-4 py-2.5 w-full justify-center text-sm"
          onClick={handleDownLoadReport}
        >
          <span>
            <Download size={18} />
          </span>
          রিপোর্ট ডাউনলোড করুন
        </PrimaryButton>
      </div>
    </Card>
  );
};

export default ReportConfigaration;
