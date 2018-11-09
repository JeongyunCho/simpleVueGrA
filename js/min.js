(()=>{
//set up vue instance

const vm = new Vue({
    el: "#app",

    data:{
        message : "Welcome to your first Vue app!",

        targetURL : "https://www.google.ca/",

        vuemessge : "Yay! you can haz vue",

        anchorOff : true,

        deliciousFruit : [
            { name: "apple", flavour: "tasty" },
            { name: "pear", flavour: "salty" },
            { name: "oramge", flavour: "sweet" },
        ],
        hazVue : true
    },

    methods : {
        logFruit(e) {
            console.log(e.currentTarget);
        }
    }
});

    const vm2 = new vue({
        el: "#footer",

        data : {
            footermessage: "this os the footer"
        }
    });
})();