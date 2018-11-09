(()=>{
//set up vue instance

const vm = new Vue({
    el: "#app",

    data:{
        message : "Welcome to your first Vue app!",

        targetURL : "https://www.google.ca/",

        deliciousFruit : [
            { name: "apple", flavour: "tasty" },
            { name: "pear", flavour: "salty" },
            { name: "oramge", flavour: "sweet" },
        ]
    },

    methods : {
        logFruit(e) {
            console.log(e.currentTarget);
        }
    }
});
})();