<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Episode extends Model
{
     protected $table = 'episodes'; 

    protected $fillable = [
        'name',            
        'air_date',        
        'episode',         
        'url',             
        'created_at_api',  
    ];

   
    public function characters()
    {
        return $this->belongsToMany(Character::class, 'episode_character', 'episode_id', 'character_id');
    }
}
