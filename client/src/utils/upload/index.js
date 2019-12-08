export function uploadImg(formData) {
  return request({
    url: "/api/upload",
    method: "post",
    headers: {
      // Accept: "application/json",
      // "Content-Type": "multipart/form-data"
    },
    data: formData
  });
}
