<template>
  <div class="footer">
    <ul class="footer">
    	<li>
    		<h2>服务项目</h2>
    		<ul>
                <router-link  :to="item.to" v-for="(item,index) of list1" :key="index" tag="li"  v-on:mouseenter="mouseenter" v-on:mouseleave="mouseleave">
                    {{item.html}}
                </router-link>
    		</ul>
    	</li>
    	<li>
    		<h2>关于我们</h2>
    		<ul>
    			 <router-link  :to="item.to" v-for="(item,index) of list2" :key="index" tag="li">
                    {{item.html}}
                </router-link>
    		</ul>
    	</li>
    	<li>
    		<h2>开发实例</h2>
    		<ul>
    			<router-link  :to="item.to" v-for="(item,index) of list3" :key="index" tag="li">
                    {{item.html}}
                </router-link>
    		</ul>
    	</li>
    	<li>
    		<h2>联系我们</h2>
    		<ul>
    			<router-link  :to="item.to" v-for="(item,index) of list4" :key="index" tag="li">
                    {{item.html}}
                </router-link>
    		</ul>
    	</li>
    	<li>
    		<h2>微信咨询</h2>
    		<ul>
    			<li>
    				<img src="../../static/images/HT-code.png" class="code" alt="">
    			</li>
    		</ul>
    	</li>
    </ul>
   <div class="footer_box">
	   	<div class="footer_copyright">
	    	<span>广东天软农联信息科技有限公司版权所有·粤ICP备16080075号-1</span>
	    	<span>友情链接: 中华贺氏湖南商会网 精品农联网</span>
	    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'FooterNav',
  data(){
  	return{
      list1:[{
        name: 'Index',
        to: '/',
        html: '网站首页'
      },
      {
        name: 'Server',
        to: '/server',
        html: '服务项目'
      },
      {
        name: 'About',
        to: '/about',
        html: '关于我们'
      },
      {
        name: 'Case',
        to: '/case',
        html: '开发案例'
      },
      {
        name: 'Connection',
        to: '/connection',
        html: '联系我们'
      },
      {
        name: 'Activity',
        to: '/activity',
        html: '宗亲活动'
      }],
      list2:[{
        name: 'Website',
        to: '/server',
        html: '网站系统开发'
      },
      {
        name: 'Customization',
        to: '/server/customization',
        html: '软件定制服务'
      },
      {
        name: 'Platform',
        to: '/server/platform',
        html: '电商平台开发'
      },
      {
        name: 'Wechat',
        to: '/server/wechat',
        html: '微信公众号深度开发'
      },
      {
        name: 'Mobile',
        to: '/server/mobile',
        html: '移动APP开发'
      }],
      list3:[{
        name: 'Food',
        to: '/case',
        html: '美食APP'
      },
      {
        name: 'Vegetarian',
        to: '/case/vegetarian',
        html: '素食APP'
      },
      {
        name: 'Pineapple',
        to: '/case/pineapple',
        html: '菠萝油'
      },
      {
        name: 'Flow',
        to: '/case/flow',
        html: '流量无忧'
      }],
      list4:[{
        name: 'Company',
        to: '/connection',
        html: '广州总公司'
      },
      {
        name: 'Branch',
        to: '/connection/branch',
        html: '顺德办事处'
      }]
    }
  },
  methods: {
    mouseenter:function() {
       console.log(123);
    },
    mouseleave:function() {
        console.log(456);
    }
  }
}
</script>

<style lang="less" scoped>
	div.footer{
		width: 100%;
		background: #3D444F;
        ul.footer{
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            padding: 30px 0;
            text-align: left;
            h2{
                color: #FFFFFF;
                font-size: 0.18rem;
                padding-bottom: 0.2rem;
            }
            li{
                cursor: pointer;
                color: #999;
                font-size: 0.14rem;
                padding: 0.05rem 0;
            }
            img.code{
                width: 85px;
            }
        }
	}
	.footer_box{
		width: 100%;
		padding:20px 0;
		background-color: #373D47;
        .footer_copyright{
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            span{
                font-size: 0.14rem;
                color: #FFFFFF;
            }
        }
	}
</style>
