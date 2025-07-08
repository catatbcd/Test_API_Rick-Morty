<?php

namespace App\Http\Controllers;

use App\Models\Character;
use Illuminate\Http\Request;

class CharacterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Character::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       return Character::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Character::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $character = Character::findOrFail($id);
        $character->update($request->all());
        return $character;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Character::destroy($id);
        return response()->json(null, 204);
    }
}
