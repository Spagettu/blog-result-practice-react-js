export const transformComment = (dbComment) => {
  return {
    authorId: dbComment.author_id,
    publishedAt: dbComment.published_at,
    postId: dbComment.post_id,
    content: dbComment.content,
    id: dbComment.id,
  };
};
