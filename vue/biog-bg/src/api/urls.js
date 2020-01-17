export default {
    baseURL: "",
    getNotAuditComment: "/getNotAuditComment", // 获取没有审核的评论
    getWordCloud: "/getWordCloud", // 获取词云的数组
    getContentList: "/getContentList", // 获取文章列表
    addBlog: '/addBlog', //添加博客
    setFileToCos: '/setFileToCos', // 上传文件到cos
    getLogs: '/getLogs', // 获取文章数和浏览数
    getTagViews: '/getTagViews', // 获取柱状图数据
    getBlogTypeViews: '/getBlogTypeViews', // 获取雷达图数据
    cancelLikeByComment: '/cancelLikeByComment', // 取消点赞
    giveLikeByComment: '/giveLikeByComment', // 点赞
    commentAudit: '/commentAudit', // 审核评论 
    deleteComment: '/deleteComment',// 删除评论
    addComment: '/addComment', // 添加评论
}