const users = {
    "user1": {
        password: "123456",
        email: "email1@uit.edu.vn",
        comment: "like"
    },
};

module.exports.read = function (userName) {
    return users[userName];
}

//Tạo mới cmt của user
module.exports.Send = function (userName, password, email, comment) {
    if (users[userName]) {
        return 'Error';
    } else {
        users[userName] = {
            password: password,
            email: email,
            comment: comment
        };
        return 'Success';
    }
}