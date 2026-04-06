export type IbasRowStatus = "ok" | "mismatch";

export type IbasReportRow = {
  id: string;
  code: string;
  headBn: string;
  amount: number;
  status?: IbasRowStatus; // computed in UI
};

export type IbasReportDemo = {
  pdf: { titleBn: string; url: string };
  system: { titleBn: string };
  rows: IbasReportRow[];
};
