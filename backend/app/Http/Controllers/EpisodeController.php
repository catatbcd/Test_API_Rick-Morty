<?php

namespace App\Http\Controllers;

use App\Models\Episode;
use Illuminate\Http\Request;

class EpisodeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $episodios = Episode::all();
        return view('episodes.index', compact('episodes'));
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $episodio = Episode::findOrFail($id);
        return view('episodes.show', compact('episode'));
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $episode = Episode::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'air_date' => 'nullable|string|max:255',
            'episode' => 'nullable|string|max:10',
            'url' => 'nullable|url',
            'created_at_api' => 'nullable|date',
        ]);

        $episode->update($validated);

        return redirect()->route('episodes.index')->with('success', 'Episode update.');
    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Episode::destroy($id);
        return redirect()->route('episodes.index')->with('success', 'Episode deleted.');
   
    }
}
