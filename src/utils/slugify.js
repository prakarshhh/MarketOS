export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

// Create a mapping object to store slug to ID relationships
export const createSlugMap = (posts) => {
  return posts.reduce((acc, post) => {
    acc[slugify(post.title)] = post.id;
    return acc;
  }, {});
};
