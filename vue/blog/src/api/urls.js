export default {
    baseURL: "http://api.fqiang.co",
    // baseURL: "",
    getComments: "/getComments",
    getContentList: "/getContentList",
    getBlogById: "/getBlogById", // 获取博客类容
    cancelLikeByComment: '/cancelLikeByComment', // 取消评论点赞
    giveLikeByComment: '/giveLikeByComment', // 评论点赞
    addComment: '/addComment', // 添加评论
    setFileToCos: '/setFileToCos', // 上传文件到cos
    cancelLikeByBlog: '/cancelLikeByBlog', // 取消博客点赞
    giveLikeByBlog: '/giveLikeByBlog', // 博客点赞
    addScore: '/addScore', // 添加评分
    addBrowseNum: '/addBrowseNum', // 添加浏览量
}