<?php

namespace Database\Seeders;

use App\Models\Todo;
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
        $data = [
            [
                'id' => '78c9ed64',
                'title' => 'Shopping in supermarket',
                'detail' => 'One apple, two oranges',
                'status' => 'TODO'
            ],
            [
                'id' => '6ed2115d',
                'title' => 'Cutting fruits',
                'detail' => 'Cutting an apple and oranges',
                'status' => 'TODO'
            ]
        ];

        foreach ($data as $item) {
            Todo::create($item);
        }

    }
}
