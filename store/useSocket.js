import Vue from 'vue'
import store from "./index.js"; //引入vuex，引入自己的路径
import socket from "../store/socket.js"; //引入socket.js，引入自己的路径
//这里将socket.js中的创建连接和接受消息的监听放到一个可以向外部暴露的方法，方便在合适的时机创建websocket连接
export function connectWebSocket(){
	const Socket =new socket({
	    url: 'ws://192.168.120.12:8999', //连接地址 必填
	    onOpen(res) {
	        console.log('连接成功')
	    },
	    onClose(err) {
	        console.log('关闭了连接')
	    },
	    onReload(res) {
	        console.log('重载：' + res)
	    },
	    onMsg(msg) {
	        console.log(msg)
	    }
	});
    //加入监听，就可以全局使用监听了
    Socket.eventPatch.onOpen((msg,sk)=>{        //监听是否连接成功
		console.log("链接成功")
    });
	Socket.eventPatch.onMsg((msg,sk)=>{    //监听是否接受消息
	    console.log(msg)
	});
	Vue.prototype.$Socket = Socket;    //连接成功挂在到原型上
}

