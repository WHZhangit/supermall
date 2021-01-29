import axios from "axios";
export function request(config){
  // return new Promise((resolve, reject) => {
  //   //创建axios实例
  //   const instance = axios.create({
  //     baseURL:'http://152.136.185.210:7878/api/m5',
  //     timeout:5
  //   })
  //   instance(config).then(res=>{
  //     resolve(res)
  //   })
  //     .catch(err=>{
  //       reject(err)
  //     })
  // })

  //默认返回promise
  const instance = axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
      })

  //axios的拦截器
  instance.interceptors.request.use(config=>{//请求成功
    // console.log(config);
    // 1.比如config中的一些信息不符合服务器的要求
    //2.比如每次发送网络请求的时候,都希望再界面中显示一个请求的图标
    //3.某些网络请求(比如登录token)必须携带一些特殊信息
    return config
  },err=>{//请求失败//发送请求失败的时候
    // console.log(err);
  })
  // 2.2.响应拦截
  instance.interceptors.response.use(res=>{
    // console.log(res);
    return res.data
  },err=>{
    // console.log(err);
    return err.data
  })

  return instance(config)
}
