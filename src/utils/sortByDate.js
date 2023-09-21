export const sortByDate = (firstBlog, secondBlog) => {
    return new Date(secondBlog.data.publishedDate) - new Date(firstBlog.data.publishedDate);
}