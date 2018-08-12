var app=new Vue({
    el:'#app',
    data:{
        // foodList: ['葱','姜','蒜'],
    
    foodList: [
    {
        name:'葱',
        price:10,
        discount:.8,
    },
    {
        name:'姜',
        price:5,
        discount:.5,
    },
    {
        name:'蒜',
        price:4.5,
    }
]
    }
});
var aqq=new Vue({
    el:'#aqq',
    data:{
        url:'http://baidu.com',
        img:'http://baidu.com',
        isActive:true,
    }
});
// 点击事件的监听
var qq=new Vue({
    el:'#qq',
    methods:{
        onClick:function(){
            console.log('clicked');
        },
        onEnter:function(){
            console.log('mouse enter');
        },
        onOut:function(){
            console.log('mouse leave');
        },
        // 监听提交事件
        onSubmit:function(){
            console.log('submitted');
        },
        // 监听输入事件
        onKeyup:function(){
            console.log('key pressed');
        }
    }
});
var ww=new Vue({
    el:'#ww',
    data:{
        name:'whh',
        price:10
    }
});
var app=new Vue({
    el:'#tt',
    data:{
        // sex:['male']
        // article:'<textarea v-model="article" ></textarea>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem eius nemo commodi mollitia sit aperiam necessitatibus vero illum? Quia neque distinctio fugiat ad dolorem necessitatibus hic sapiente earum eos! '
        from:'1',
        dest:['1']
    }
});
var app=new Vue({
    el:'#ff',
    data:{
        role:'hr'
    }
});
var app=new Vue({
    el:'#yy',
    data:{
        math:90,
        physics:80,
        english:30,
    },
    // 这个数据已经缓存起来了
    computed:{
        // 总分
        sum: function(){
            return this.math + this.physics+this.english;
        },
        // 平均分
        average: function(){
            return Math.round(this.sum / 3);
        }
    }
});
Vue.component('alert',{
    template:'<button @click="on_click">弹弹弹</button>',
    methods:{
        on_click:function(){
            alert('Yo.');
        }
    }
})
var app=new Vue({
    el:'#seg1',
    //这是 第二种方法
    // components:{
    // alert:{
    //         template:'<button @click="on_click">弹弹弹</button>',
    //         methods:{
    //             on_click:function(){
    //                 alert('Yo.');
    //             }
    //         }
    //     }
    // }
});
var app=new Vue({
    el:'#seg2',
})