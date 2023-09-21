// sortByDate function, sorts the blog article by the recent data for the blogs cards in the blog page
export const sortByDate = (firstBlog, secondBlog) => {
    return Date(secondBlog.data.publishedDate) - Date(firstBlog.data.publishedDate);
}