<template>
  <div class="out_box">
    <div class="website_box">
    	<h1 class="title">企业网站</h1>
	    <p class="subtitle">展示企业文化，宣传企业美好形象</p>
	    <ul>
	    	<li class="item">
	    		<div class="website_icon icon1"></div>
	    		<p class="title">页面设计</p>
	    		<div>从网站的主色调、副色调、边框风格到页头风格、导航、
	    		广告显示等信息全部可以自由设定，可以做到完全独一无
	    		二的网站。</div>
	    	</li>
	    	<li class="item">
	    		<div class="website_icon icon2"></div>
	    		<p class="title">页面设计</p>
	    		<div>从网站的主色调、副色调、边框风格到页头风格、导航、
	    		广告显示等信息全部可以自由设定，可以做到完全独一无
	    		二的网站。</div>
	    	</li>
	    	<li>
	    		<div class="website_icon icon3"></div>
	    		<p class="title">页面设计</p>
	    		<div>从网站的主色调、副色调、边框风格到页头风格、导航、
	    		广告显示等信息全部可以自由设定，可以做到完全独一无
	    		二的网站。</div>
	    	</li>
	    </ul>
	    <img src="../../../static/images/com123.jpg" class="banner" alt="">
    </div>
    <div class="industry">
    	<div class="industry_box">
    		<h1 class="title">行业门户网站</h1>
		    <p class="subtitle">综合性互联网信息资源并提供有关信息服务的应用系统</p>
		    <ul>
		    	<li class="item">
		    		<div class="website_icon icon4"></div>
		    		<p class="title">包含各类门户网站</p>
		    		<div class="title">包括综合性门户网站，地方生活门户，个人门户以及搜索引擎式门户网站。</div>
		    	</li>
		    	<li class="item">
		    		<div class="website_icon2 icon5"></div>
		    		<p class="title">门户网站的作用</p>
		    		<div class="title">通过互联网来宣传企业、开拓市场，降低企业的管理成本、交易成本和售后服务成本，
		    		并通过开展一系列的电子商务活动获得更多利润。</div>
		    	</li>
		    </ul>
		    <img src="../../../static/images/menhu123.jpg" class="banner" alt="">
    	</div>
    </div>
    <div class="website_box">
    	<h1 class="title">政府政务平台</h1>
	    <p class="subtitle">我们是致力于企、事业单位,政府部门的互联网信息化整体解决方案提供</p>
	    <ul>
	    	<li class="item">
	    		<div class="website_icon3 icon6"></div>
	    		<p class="title">报表</p>
	    		<div>多维度的报表系统，您可以按时间段查询，并且可以按“月”、“周”、“日”
	    		等数据对比，查看走势。支持可视化统计图。</div>
	    	</li>
	    	<li class="item">
	    		<div class="website_icon icon7"></div>
	    		<p class="title">无纸化</p>
	    		<div>通过平台可实行无纸化政府平台运作，有效提高效率并减少政府办公经费，环保节能。</div>
	    	</li>
	    	<li>
	    		<div class="website_icon4 icon8"></div>
	    		<p class="title">电子政务</p>
	    		<div>电子政务将政府工作更公开、更透明，并且为企业和居民提供更好的服务</div>
	    	</li>
	    </ul>
	    <img src="../../../static/images/zhengfu123.jpg" class="banner" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Website',
  data(){
  	return{}
  }
}
</script>


<style lang="less" scoped>
	.out_box{
		width: 100%;
		.website_icon{
			width: 48px;
			height: 48px;
			margin: 0 auto;
		}
		h1.title{
			font-size: 0.36rem;
			line-height: 60px;
		}
		p.subtitle{
			font-size: 0.24rem;
			color: #999;
			line-height: 30px;
			padding-bottom: 20px;
		}
		ul li{
			padding: 20px 0 30px;
			div{
				line-height: 23px;
				font-size: 0.14rem;
				color: #999;
			}
			p.title{
				line-height: 50px;
				font-size: 0.2rem;
			}
		}
		.website_box{
			width: 100%;
			margin: 0 auto;
			padding: 80px 0 60px;
			ul{
				display: flex;
				li{
					width: 33%;
				}
				li.item{
					padding-right:20px;
				}
				.icon1{
					background: url(../../../static/images/goodimg.png);
				}
				.website_icon3{
					width: 39px;
					height: 48px;
					margin: 0 auto;
				}
				.website_icon4{
					width: 33px;
					height: 48px;
					margin: 0 auto;
				}
				.icon2{
					background: url(../../../static/images/goodimg.png) no-repeat;
					background-position: -49px 0;
				}
				.icon3{
					background: url(../../../static/images/goodimg.png) no-repeat;
					background-position: -98px 0;
				}
				.icon6{
					background: url(../../../static/images/goodimg.png) no-repeat;
					background-position: -281px -48px;
				}
				.icon7{
					background: url(../../../static/images/goodimg.png) no-repeat;
					background-position: -405px -48px;
				}
				.icon8{
					background: url(../../../static/images/goodimg.png) no-repeat;
					background-position: -320px -48px;
				}
			}
		}
	}
	.banner{
		display: block;
		width: 100%;
	}
	.industry{
		width: 100%;
		background: #f2f2f2;
		padding:80px 0;
		.industry_box{
			margin: 0 auto;
			 ul{
				display: flex;
				justify-content: space-around;
				.website_icon2{
					width: 62px;
					height: 48px;
					margin: 0 auto;
				}
				.icon4{
					background: url(../../../static/images/goodimg.png) no-repeat;
					background-position: 0 -49px;
				}
				.icon5{
					background: url(../../../static/images/goodimg.png) no-repeat;
					background-position: -147px 0;
				}
			}
		}
	}
	div.title{
		width: 450px;
	}
</style>
