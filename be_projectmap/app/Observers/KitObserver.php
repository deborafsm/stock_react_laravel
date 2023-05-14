<?php

namespace App\Observers;

use App\Models\Kit\kitModel;
use App\Models\WebCam\webcam;
use App\Models\Pc\pc;
use App\Models\Mouse\mouse;
use App\Models\Head\heads;
use App\Models\Teclado\teclado;


class KitObserver
{
    /**
     * Handle the Kit "created" event.
     *
     * @param  \App\Models\Kit  $kit
     * @return void
     */
    public function created(kitModel $kit)
    {
        //
    }

    /**
     * Handle the Kit "updated" event.
     *
     * @param  \App\Models\kitModel  $kit
     * @return void
     */
    public function updateKitStatus()
    {
    }
    public function updated(KitModel $kit)
    {
        $status = $kit->status == 'ativo' ? 1 : 0;
        $webcam = Webcam::where('id', $kit->webcam_id)->first();
        if ($webcam) {
            $webcam->kit = null;
            $kit->status = null;
            $webcam->save();
        }
    }

    /**
     * Handle the Kit "deleted" event.
     *
     * @param  \App\Models\kitModel  $kit
     * @return void
     */
    public function deleted(kitModel $kit)
    {
        //
    }

    /**
     * Handle the Kit "restored" event.
     *
     * @param  \App\Models\kitModel  $kit
     * @return void
     */
    public function restored(kitModel $kit)
    {
        //
    }

    /**
     * Handle the kitModel "force deleted" event.
     *
     * @param  \App\Models\kitModel  $kit
     * @return void
     */
    public function forceDeleted(kitModel $kit)
    {
        //
    }
}
