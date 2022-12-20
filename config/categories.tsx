// GALLERY CATEGORY OPTIONS
export interface CategoryOption {
  value: string;
  label: string;
  hidden?: boolean;
  description?: string;
}
export interface Category extends CategoryOption {
  options?: CategoryOption[];
  highlighted?: true;
  iconHeight?: number;
  icon?: any;
}
export const STAFF_PICKS_VALUE = "staff-picks";

export const DEFAULT_CATEGORIE = STAFF_PICKS_VALUE;

export const getGalleryCategories: () => Category[] = () => [
  {
    value: STAFF_PICKS_VALUE,
    label: "Staff picks",
  },
  {
    value: "business",
    label: "Business",
  },
];

export const getFlatCategoryOptions = (): CategoryOption[] =>
  getGalleryCategories().flatMap((category) => {
    if (category.options) {
      return category.options;
    }
    return category;
  });

export type CategoryProps = {
  title: string;
  value: string;
  description?: string;
};

export const getCategoryHeaderProps = (value: string): CategoryProps | null => {
  let category = getFlatCategoryOptions().find(
    (o) => o.value === value
  ) as CategoryOption;
  if (!category) {
    return null;
  }
  return {
    title: category!.label || value,
    value,
    description: category!.description,
  };
};
export const validateCategory = (value: string) => {
  return (
    getFlatCategoryOptions().findIndex(
      (categoryOption) => categoryOption.value === value
    ) >= 0
  );
};
