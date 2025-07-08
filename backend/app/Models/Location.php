<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $table = 'locations'; 

    protected $fillable = [
        'name',       
        'type',       
        'dimension',  
        'url',        
        'created_at_api', 
    ];
     public function characters()
    {
        return $this->hasMany(Characters::class, 'origin_id');
    }
}
