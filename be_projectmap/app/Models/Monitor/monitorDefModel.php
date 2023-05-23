<?php

namespace App\Models\Monitor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class monitorDefModel extends Model
{
    protected $table = "faulty_monitors";
    use HasFactory;
}
