let user = { name: "rian" }
function message(user) {
    user.name = "Khairi"
    console.log("user inside function:", user.name)
}

message(user)
console.log(user.name)
