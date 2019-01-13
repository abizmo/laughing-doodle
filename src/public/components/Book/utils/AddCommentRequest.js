const AddCommentRequest = (comment) => {
  const data = { comment };
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  return request;
}

module.exports = AddCommentRequest;
