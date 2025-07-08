<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'username' => 'usuario1',
                'email' => 'usuario1@example.com',
                'password' => Hash::make('password1'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'username' => 'usuario2',
                'email' => 'usuario2@example.com',
                'password' => Hash::make('password2'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'username' => 'usuario3',
                'email' => 'usuario3@example.com',
                'password' => Hash::make('password3'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'username' => 'usuario4',
                'email' => 'usuario4@example.com',
                'password' => Hash::make('password4'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'username' => 'usuario5',
                'email' => 'usuario5@example.com',
                'password' => Hash::make('password5'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
