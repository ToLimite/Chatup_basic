<template>
	<view class="content">
		<view class="main">
			<view v-for="e in arr">{{e}}</view>
		</view>
		<view class="foot">
			<input type="text" class="cont" v-model="cont">
			<button @tap="send">提交</button>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cont: '',
				arr:['']
			}
		},
		onLoad() {
			this.getmsg();
		},
		methods: {
			send:function(){
				if(this.cont.length > 0){
					this.arr.push(this.cont)
					let aa = this.cont;
					this.socket.emit('message', aa);
				}
			},
			getmsg: function(){
				this.socket.on('gbmsg', data =>{
					this.arr.push(data);
				});
				
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.foot{
		position: fixed;
		width: 100%;
		bottom: 0;
		.cont{
			width: 100%;
			height: 60rpx;
			background-color: #eee;
		}
	}
	
</style>

