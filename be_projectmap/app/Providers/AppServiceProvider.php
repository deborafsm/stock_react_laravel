<?php

namespace App\Providers;

use App\Models\Kit\kitModel;
use App\Observers\KitObserver;
use Illuminate\Support\ServiceProvider;


class AppServiceProvider extends ServiceProvider
{

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        kitModel::observe(KitObserver::class);
    }
}
