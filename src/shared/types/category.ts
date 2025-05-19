type subCategoryType = {
  label: string;
  linkUrl: string;
};

export type CategoryType = {
  label: string;
  linkUrl?: string;
  subItems: subCategoryType[];
};
