<template>
  <main class="con">
    <section style="height:1200px;">
      <!--header  title-->
        <h2>{{$route.meta.title}}</h2>
        <p></p>
      <!--使用指南-->
        <h3>使用指南</h3>
        <p></p>
        <pre><code class="language-javascript"><span class="hl-js-keyword">import</span> { {{userGuide.name}} } <span class="hl-js-keyword">from</span> '404ui';<br/><br/>Vue.use({{userGuide.name}});</code></pre>
      <!--代码演示-->
        <h3>代码演示</h3>
        <h4>基本用法</h4>
        <p></p>
        <slot name="code-html" class="language-html"></slot>
        <slot name="code-js" class="language-javascript"></slot>
      <h3>API</h3>
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            <th>版本</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a,aid) in API" :key="aid">
            <td>{{a.param}}</td>
            <td>{{a.explain}}</td>
            <td>{{a.typeof}}</td>
            <td>{{a.defaultVal}}</td>
            <td>{{a.versions}}</td>
          </tr>
        </tbody>
      </table>
      <h3>Event</h3>
      <table>
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(e,eid) in Event" :key="eid">
            <td>{{e.name}}</td>
            <td>{{e.explain}}</td>
            <td>{{e.cbParam}}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>

</template>

<script>
    export default {
      name: "PublickCode",
      props:['userGuide','API','Event']
    }
</script>

<style lang="stylus">
/*----------------中间显示主要内容区-------*/
main
  flex:1
  min-width: 300px
  height: 100%
section
  padding:13px 40px
  &>h2
    font-size 30px
    line-height:1.5
    font-weight:400
    margin:20px 0 25px
    color: #333
  &>h3
    margin:45px 0 10px
    font-size:22px
  &>h4
    margin:20px 0
    font-size:16px
  &>p
    margin:15px 0
    font-size:14px
    line-height:26px
    color:#34495e

  code
    position: relative
    display: block
    -webkit-border-radius: 3px
    -moz-border-radius: 3px
    border-radius: 3px
    padding:18px 10px 18px 20px
    margin-bottom: 25px
    line-height: 22px
    font-size:13px
    font-weight:400
    white-space:pre-wrap
    word-break break-all
    color: #455a64
    background: #f1f4f8
    overflow-x: auto
    font-family:Source Code Pro,Monaco,Inconsolata,monospace;
    &::after
      position: absolute
      top:5px
      right:10px
      color: #ccc
      font-size:12px
  code.language-javascript::after
    content: 'JS'
  code.language-html::after
    content: 'HTML'
.hl-js-keyword
.hl-js-tag
  color: #0079f3
.hl-js-string
  color: #5758bb
table
  width: 100%
  font-size: 14px
  margin-bottom: 50px
  color: #343434
  border-collapse: collapse
  background: #ffffff
  th
    background: #f4f4f4
    padding: 8px 10px
    font-weight: 500
    text-align: left
  tr
    width: 100%
    line-height:1.5
  td
    padding:8px 10px
    border-bottom:1px solid #ccc
    color: #567

</style>
