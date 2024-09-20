type CommentStatus = 'pending' | 'approved' | 'rejected';

export interface Comment {
  id: string;
  content: string;
  status: CommentStatus;
}

export interface Post {
  id: string;
  title: string;
  comments: Comment[];
}
