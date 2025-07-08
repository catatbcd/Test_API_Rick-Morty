<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $locations = Location::all();
        return view('locations.index', compact('locations'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'nullable|string|max:255',
            'dimension' => 'nullable|string|max:255',
            'url' => 'nullable|url',
            'created_at_api' => 'nullable|date',
        ]);

        Location::create($validated);

        return redirect()->route('locations.index')->with('success', 'Location created successful.');
    
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $location = Location::findOrFail($id);
        return view('locations.show', compact('location'));
    }

  

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
       $location = Location::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'nullable|string|max:255',
            'dimension' => 'nullable|string|max:255',
            'url' => 'nullable|url',
            'created_at_api' => 'nullable|date',
        ]);

        $location->update($validated);

        return redirect()->route('locations.index')->with('success', 'Location update.');
    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Location::destroy($id);
        return redirect()->route('locations.index')->with('success', 'Location delete.');
    
    }
}
