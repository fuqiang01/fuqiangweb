const dbutil = require('./dbutil');

function queryAllStudent() {
    let connection = dbutil();
    connection.connect();
    const querySql = "select * from student;";
    connection.query(querySql, function (error, result) {
        if (error == null) {
            console.log(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

function queryStudentByStuNum( stuNum, callback ){
    let connection = dbutil();
    connection.connect();
    const querySql = "select * from student where stu_num = ?;";
    connection.query(querySql, stuNum, function (error, result) {
        if (error == null) {
            callback(result);
        } else {
            callback(error);
        }
    });
    connection.end();
}
module.exports = {
    "queryAllStudent": queryAllStudent,
    'queryStudentByStuNum': queryStudentByStuNum,
};