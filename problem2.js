const users = [{ name: "A", isActive: true }, { name: "B", isActive: false }]
// const users = [{ name: "A" }]
// const users = "users"
// const users = [6]


function filterActiveUsers(users) {
    if (
        !Array.isArray(users) ||
        users.length === 0 ||
        users.some(user => !("isActive" in user))
    ) {
        return "Invalid"
    }

    return users.filter(user => user.isActive === true);

}
console.log(filterActiveUsers(users));
