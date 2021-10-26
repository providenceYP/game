export type Comment = {
  text: string;
  username: string;
  date: string;
};

export type AddComment = (newComment: string) => void;
