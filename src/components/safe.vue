<template>
  <div class="safe" id="safe">
                  <form action="">
                      <div class="title py-2 pl-5">更改密码</div>
                      <div>原密码: <input type="text"></div>
                      <div>新密码: <input type="text"></div>
                      <div>确认新密码: <input type="text"></div>
                      <button>保存更改</button>
                  </form>
              </div>
</template>

<script>
export default {

}
</script>

<style>
.title{
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
        margin-right:0 ;
    }
    
    form div,form button{
        margin:0 3rem 2rem 0;
        font-size: 1rem;
    }
    form button{
        background-color:#18a9f1 ;
        color: white;
        border: 0;
        outline: none;
        padding: 0.5rem;
        border-radius: 0.2rem;
    }
</style>