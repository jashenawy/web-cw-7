// project أنشئ كائن
const project ={
 type: "tech",
 users: 10000,
biography() {
    return "this is my project.";
  },
};

// randomProperty أنشئ دالة
function randomProperty(x) {
    const keys = Object.keys(x);

    const random = Math.floor(Math.random()* keys.length);

    console.log(keys[random]);
    console.log(x[`${keys[random]}`]);
}
 randomProperty(project);
