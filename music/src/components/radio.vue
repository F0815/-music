<template>
    <div class='radio'>
        <h3>今日优选</h3>
        <div>
            <dl>
                <dt><img src="../img/five.jpg" alt=""></dt>
                <dd>
                    <h3>末那大叔</h3>
                    <p>节目:18</p>
                    <p>愿你的故事有人能懂</p>
                </dd>
            </dl>
            <dl>
                <dt><img src="../img/five.jpg" alt=""></dt>
                <dd>
                    <h3>末那大叔</h3>
                    <p>节目:18</p>
                    <p>愿你的故事有人能懂</p>
                </dd>
            </dl>
            <dl>
                <dt><img src="../img/five.jpg" alt=""></dt>
                <dd>
                    <h3>末那大叔</h3>
                    <p>节目:18</p>
                    <p>愿你的故事有人能懂</p>
                </dd>
            </dl>
            <dl>
                <dt><img src="../img/five.jpg" alt=""></dt>
                <dd>
                    <h3>末那大叔</h3>
                    <p>节目:18</p>
                    <p>愿你的故事有人能懂</p>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    name:'radio'
}
</script>
<style>
    .radio{
        width:100%;
        height:auto;
        box-sizing: border-box;
    }
    .radio h3{
        padding:5px;
    }
    .radio dl{
        width:100%;
        height:auto;
        display:flex;
        box-sizing: border-box;
        padding:5px;
    }
    .radio dl dt{
        width:80px;
        height:80px
    }
    .radio dl dt img{
        width:100%;
        height:100%;
    }
   .radio dl dd{
       padding:5px;
    
   }
   .radio dl dd h3{
       font-size:16px;
   }
   .radio dl dd p{
       font-size:12px;
   }
</style>