<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ResgController extends Controller
{
   public function res(REQUEST $request)
    {

        $data = $request->only("nickName","password","email");
        // dd($data);

        //2 写入数据库
        $id = \DB::table("users")->insertGetId($data);//执行添加返回自增ID号
		//dd($id);
        //3 判断是否添加成功
        if($id>0){
          $list=\DB::table('class')->get();
          $data=\DB::table('college')->get();
          $post=\DB::table('post')->get();
          return view('index.index',['list'=>$list,'data'=>$data,'post'=>$post]);
        }else{
            return "注册失败";
        }
    }

}
