import { ReportType } from "@/app/(office)/office/dashboard/report&audit/page";
import Card from "@/components/cards/card";
import { FileMinus, FolderOpen, PanelRightDashed } from "lucide-react";
type ReportMenuCardProps = {
  reportType: ReportType;
  setReportType: (type: ReportType) => void;
};
const ReportMenuCard = ({ reportType, setReportType }: ReportMenuCardProps) => {
  const menuIems = [
    {
      id: 1,
      icon: <FileMinus size={18} />,
      label: "রিপোর্ট জেনারেটর",
      type: "report_generator",
    },
    {
      id: 2,
      icon: <PanelRightDashed size={18} />,
      label: "অডিট লগ",
      type: "audit_log",
    },
    {
      id: 3,
      icon: <FolderOpen size={18} />,
      label: "ডকুমেন্ট লাইব্রেরি",
      type: "document_library",
    },
  ];

  return (
    <Card>
      <div className="flex flex-col gap-3">
        {menuIems.map((item) => (
          <button
            key={item.id}
            className={`flex gap-2 items-center w-full hover:bg-primary-color/10 p-3 py-4 rounded-md border-l-4 border border-l-primary-color text-sm text-primary-color hover:cursor-pointer ${reportType === item.type ? "bg-primary-color/15 border-l-primary-color" : ""}`}
            onClick={() => setReportType(item.type as ReportType)}
          >
            <span>{item.icon}</span>
            <p>{item.label}</p>
          </button>
        ))}
      </div>
    </Card>
  );
};

export default ReportMenuCard;
