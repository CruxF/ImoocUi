<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo></Demo>
    <m-card
      imgSrc="react17.png"
      summary="2021必修  React17+React Hook+TS4 最佳实践，仿 Jira 企业级项目"
    />
    <br />

    <m-card
      imgSrc="vue3.png"
      summary="基于Vue3最新标准，实现后台前端综合解决方案"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">高级.178人报名</div>
          <div class="price">￥368.00</div>
        </div>
      </template>
    </m-card>
    <br />

    <m-card
      imgSrc="spring.png"
      :width="370"
      :imgHeight="90"
    >
      <p>Spring Cloud / Alibaba 微服务架构实战</p>
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤.6门课</div>
          <div class="price">10965收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  padding: 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199A1;
  margin-bottom: 8px;
}
.price {
  color: #F01414;
}
.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
