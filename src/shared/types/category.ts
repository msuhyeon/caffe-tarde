type subCategoryType = {
  label: string;
  linkUrl: string;
};

export type CategoryType = {
  label: string;
  subItems: subCategoryType[];
};
