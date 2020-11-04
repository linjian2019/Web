let app =new Vue({
    el:'#main',
    data:{
        list:[{
            name:"Vue",
            datails:"Vue.js（/vjuː/，或简称为Vue）是一个用于创建用户界面的开源JavaScript框架，也是一个创建单页应用的Web应用框架[4]。 2016年一项针对JavaScript的调查表明，Vue有着89%的开发者满意度。[5]在GitHub上，该项目平均每天能收获95颗星，[5][6]为Github有史以来星标数第3多的项目。",
            writer:"尤雨溪",
            time:"2020-11-03"
        },{
            name:"JavaScript高级程序设计",
            datails:"《JavaScript高级程序设计》是2006年人民邮电出版社出版的图书，作者是(美)(Nicholas C.Zakas)扎卡斯。本书适合有一定编程经验的开发人员阅读，也可作为高校相关专业课程的教材。",
            writer:"(美)(Nicholas C.Zakas)扎卡斯",
            time:"2020-11-03"
        }],
        inputValue:"好好学习，天天向上"
    },
    methods:{
        add:function () {
            this.list.push(this.inputValue)
        },
        remove:function (index) {
            this.list.splice(index,1);
        },
        clear:function () {
            this.list = [];
        }
    }
})

