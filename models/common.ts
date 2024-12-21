export type Category = {
  label: string;
  link?: string;
  sub_categories?: Category[];
};

export type Book = {
  title: string;
  author: string;
  cover_photo: string;
  top?: number
};
