import React, { PureComponent } from "react";
import axios from "axios";
import request from "./service/request";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    // this.setState({
    //   products: [...this.state.products, ...res]
    // })

    // axios({
    //   url: 'http://httpbin.org/get',
    //   params: {
    //     name: "why",
    //     age: 18
    //   },
    //   // method: "get"
    // }).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // })

    // axios({
    //   url: "http://httpbin.org/post",
    //   data: {
    //     name: 'kobe',
    //     age: 40
    //   },
    //   method: 'post'
    // }).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // })

    // axios.get("http://httpbin.org/get", {
    //   params: {
    //     name: 'ehy',
    //     age: 30
    //   }
    // }).then(
    //   console.log
    // )

    // axios.post("http://httpbin.org/post",{name: 'pp',age:7}).then(
    //   console.log
    // )

    // try {
    //   const res = await axios.get("http://httpbin.org/get", {
    //     params: {
    //       name: 'ehy',
    //       age: 30
    //     }
    //   })
    //   console.log(res);
    // } catch(err) {
    //   console.log(err);
    // }

    // const request1 = axios({
    //   url: "http://httpbin.org/get",
    //   params: {
    //     name: "ehy",
    //     age: 30,
    //   },
    // });

    // const request2 = axios({
    //   url: "http://httpbin.org/post",
    //   data: {
    //     name: "ehy",
    //     age: 30,
    //   },
    //   method: 'post'
    // });

    // axios.all的使用
    // axios
    //   .all([request1, request2])
    //   .then((res) => {
    //     // 1,2resolve后
    //     console.log(res);
    //   })
    //   .catch((err) => {});

    // axios
    //   .all([request1, request2])
    //   .then(([res1,res2]) => {
    //     console.log(res1,res2);
    //   })
    //   .catch((err) => {});

    // const promise1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("promise1")
    //   }, 1000)
    // });

    // const promise2 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("promise2")
    //   }, 3000)
    // })

    // Promise.all([promise1, promise2]).then(res => {
    //   // 3秒后打印
    //   console.log(res);
    // })


    // 创建新的实例
    // const instance = axios.create({
    //   baseURL: 'http://dddd.com',
    //   timeout: 5000,
    //   headers: {
        
    //   }
    // })

    // const instance2 = axios.create({
    //   baseURL: 'http://ttt.com',
    //   timeout: 10000,
    //   headers: {

    //   }
    // })

    // 请求和响应拦截
    // axios.interceptors.request.use(config => {

    //   // 1、发送网络请求时显示loading组件；
    //   // 2、某一些请求要求用户必须携带token，没有携带跳转至登录界面；
    //   // 3、params/data序列化操作

    //   console.log('请求被拦截');
    //   return config;
    // }, err => {

    // });

    // axios.interceptors.response.use(res => {
    //   return res.data;
    // }, err => {
    //   if(err && err.response) {
    //     switch(err.response.status) {
    //       case 400:
    //         console.log("请求错误");
    //         break;
    //       case 401:
    //         console.log("为授权访问");
    //         break;
    //       default:
    //         console.log('其他错误信息');
    //     }
    //   }
    // return err
    // });

    // axios.get("http://httpbin.org/get", {
    //   params: {
    //     name: 'gy'
    //   }
    // }).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // }) 

    request({
      url: '/get',
      params: {
        name: 'gy'
      }
    }).then(console.log)


  }

  render() {
    return <div>App</div>;
  }
}

export default App;
