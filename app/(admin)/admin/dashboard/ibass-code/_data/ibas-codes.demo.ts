import { EconomicCodeItem, ParentHeadItem } from "../_types/ibas-codes.types";


export const demoParentHeads: ParentHeadItem[] = [
  {
    id: "p1",
    parentCode4: "3255",
    expenseCategoryBn: "মনিহারি",
    expenseCategoryEnglish: "Stationery",
    totalMappedEconomicCodes: 50,
    status: "active",
  },
  {
    id: "p2",
    parentCode4: "8111",
    expenseCategoryBn: "আইটি সরঞ্জাম",
    expenseCategoryEnglish: "IT Assets",
    totalMappedEconomicCodes: 12,
    status: "active",
  },
  {
    id: "p3",
    parentCode4: "3111",
    expenseCategoryBn: "বেতন ভাতাদি",
    expenseCategoryEnglish: "Pay of Officers",
    totalMappedEconomicCodes: 8,
    status: "active",
  },
  {
    id: "p4",
    parentCode4: "4828",
    expenseCategoryBn: "পূর্ত ও মেরামত",
    expenseCategoryEnglish: "Works & Maintenance",
    totalMappedEconomicCodes: 22,
    status: "active",
  },
];

export const demoEconomicCodes: EconomicCodeItem[] = [
  {
    id: "e1",
    economicCode7: "3255101",
    nameBn: "কম্পিউটার সামগ্রী",
    nameEn: "Computer Accessories",
    parentCode4: "3255",
    parentTitleBn: "মনিহারি",
    type: "procurement_product",
    status: "active",
  },
  {
    id: "e2",
    economicCode7: "3255105",
    nameBn: "অন্যান্য মনিহারি",
    nameEn: "Other Stationery",
    parentCode4: "3255",
    parentTitleBn: "মনিহারি",
    type: "procurement_product",
    status: "active",
  },
  {
    id: "e3",
    economicCode7: "3111101",
    nameBn: "মূল বেতন (অফিসার)",
    nameEn: "Basic Salary (Officer)",
    parentCode4: "3111",
    parentTitleBn: "বেতন ভাতাদি",
    type: "salary_allowance",
    status: "inactive",
  },
  {
    id: "e4",
    economicCode7: "3211102",
    nameBn: "আপ্যায়ন ব্যয়",
    nameEn: "Entertainment Expenses",
    parentCode4: "3211",
    parentTitleBn: "প্রশাসনিক ব্যয়",
    type: "procurement_service",
    status: "active",
  },
];
