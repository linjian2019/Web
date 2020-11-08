<template>
  <section id="app">
    <header class="header">
      <h1>列表页面</h1>
    </header>
    <section class="main">
      <ul class="todo-list">
        <li class="todo" v-for="(item,index) in list" :key='item' >
          <div class="view">
            <span class="index">{{ index+1 }}
              <h2>{{ item.name }}</h2>
              <p>{{ item.datails }}</p>
              <p>作者：{{ item.writer }}</p>
              <p>发布时间：{{ item.time }}</p>
              <button class="destroy" @click = "remove(index)">删除</button>
              <hr>
            </span>
          </div>
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="list.length!=0">
      <span class="todo-count" v-if="list.length!=0">
        <strong>{{ list.length }}</strong>个项目
      </span>
      <button v-show="list.length!=0" class="clear-completed" @click="clear">
        清空
      </button>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      list: [{
        name: 'Vue',
        datails: 'Vue.js（/vjuː/，或简称为Vue）是一个用于创建用户界面的开源JavaScript框架，也是一个创建单页应用的Web应用框架[4]。 2016年一项针对JavaScript的调查表明，Vue有着89%的开发者满意度。[5]在GitHub上，该项目平均每天能收获95颗星，[5][6]为Github有史以来星标数第3多的项目。',
        writer: '尤雨溪',
        time: '2020-11-03'
      }, {
        name: 'JavaScript高级程序设计',
        datails: '《JavaScript高级程序设计》是2006年人民邮电出版社出版的图书，作者是(美)(Nicholas C.Zakas)扎卡斯。本书适合有一定编程经验的开发人员阅读，也可作为高校相关专业课程的教材。',
        writer: '(美)(Nicholas C.Zakas)扎卡斯',
        time: '2020-11-03'
      }]
    }
  },
  methods: {
    add: function () {
      this.list.push(this.inputValue)
    },
    remove: function (index) {
      this.list.splice(index, 1)
    },
    clear: function () {
      this.list = []
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .button1{
    position:absolute;
    left:1617px;
    top:60px;
  }
  #app {
    width: 1500px;
    height: 2000px;
    margin-top:100px;
    margin-left: auto;
    margin-right: auto;
    background-color: #b0e0e6
  }
</style>
