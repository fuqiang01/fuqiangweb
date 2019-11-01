const studentDao = require('../dao/studentDao');

function queryAllStudent() {
    studentDao.queryAllStudent();
}

function queryStudentByStuNum( stuNum, collback) {
    studentDao.queryStudentByStuNum( stuNum, collback);
}

module.exports = {
    'queryAllStudent': queryAllStudent,
    'queryStudentByStuNum': queryStudentByStuNum
}