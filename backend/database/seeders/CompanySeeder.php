<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Company_master;
use Faker\Factory as Faker;
class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        for ($i=0; $i <=10000 ; $i++) { 
            $c = new Company_master;
        $c->company_name = $faker->name;
        $c->save();
        }
        
    }
}
