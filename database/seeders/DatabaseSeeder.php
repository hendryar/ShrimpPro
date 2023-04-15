<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\User::factory()->create([
            'name' => 'I Ketut Mahendra',
            'email' => 'mahen@gmail.com',
            'password' => bcrypt('123123'),
            'role' => 'admin',
            'homeaddress' => 'Jl. Raya Kuta No. 1, Kuta, Badung, Bali',
        ]);
    }
}
