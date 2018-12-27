<template>
    <div class='rank'>
        <h3>推荐歌单></h3>
        <div>
            <dl>
                <dt><img src="../img/one.jpg" alt=""></dt>
                <dd>要做什么梦是每个人的自由</dd>
            </dl>
            <dl>
                <dt><img src="../img/two.jpg" alt=""></dt>
                <dd>要做什么梦是每个人的自由</dd>
            </dl>
            <dl>
                <dt><img src="../img/three.jpg" alt=""></dt>
                <dd>要做什么梦是每个人的自由</dd>
            </dl>
            <dl>
                <dt><img src="../img/four.jpg" alt=""></dt>
                <dd>要做什么梦是每个人的自由</dd>
            </dl>
            <dl>
                <dt><img src="../img/five.jpg" alt=""></dt>
                <dd>要做什么梦是每个人的自由</dd>
            </dl>
            <dl>
                <dt><img src="../img/one.jpg" alt=""></dt>
                <dd>要做什么梦是每个人的自由</dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    name:'rank'
}
</script>
<style>
    .rank{
        width:100%;
        height:auto;
        box-sizing:border-box;
        flex-shrink: 1;
    }
    .rank h3{
        padding:5px;
    }
    .rank>div{
        width:100%;
        height:auto;
        display:flex;
        flex-wrap:wrap;
    }
    .rank>div>dl{
        width:30%;
        padding:5px;
    }
    .rank>div>dl>dt {
        width:100%;
        height:auto;
    }
    .rank>div>dl>dt>img{
        width:100%;
        height:100%;
    }
    .rank>div>dl>dd{
        font-size:12px;
    }
</style>