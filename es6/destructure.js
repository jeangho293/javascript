// destructure 편하게 쓸려고

const req = {
  params: {
    postId: 1,
    userId: 2,
    commentId: 3,
  }
};

const { postId, userId, commentId } = req.params;

// same
const postId = req.params.postId;
const userId = req.params.userId;
const commentId = req.params.commentId;
