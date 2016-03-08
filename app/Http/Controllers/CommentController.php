<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Comment;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->has('commentable_type') && $request->has('commentable_id') && $request->input('body')) {

            $comment = new Comment();
            $comment->user_id = rand(1,30);
            $comment->body = $request->input('body');
            $comment->commentable_type = $request->input('commentable_type');
            $comment->commentable_id = $request->input('commentable_id');
            
            if($comment->save()) {
                

                if($request->wantsJson()) {
                    return response()->json($comment->toArray());
                } else {
                    return back();
                }



            } else {
                
                if($request->wantsJson()) {
                    return response()->json(['status' => 'failed']);
                } else {
                    return back();
                }
            }

        }

        if($request->wantsJson()) {
            return response()->json(['status' => 'failed']);
        } else {
            return back();
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
