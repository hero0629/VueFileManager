<?php
namespace App\SubCategories\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Domain\Notifications\Resources\NotificationCollection;


class SubCategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {

        return [
            'data' => [
                'id'            => $this->id,
                'type'          => 'SubCategory',
                'attributes'    => [
                    'name'            => $this->name,
                    'fields'          => $this->fields,
                    'type_document_id'=> $this->type_document_id,
                    'meta_data'       => $this->meta_data(),
                    'created_at'      => format_date($this->created_at, 'd. M. Y'),
                    'updated_at'      => format_date($this->updated_at, 'd. M. Y'),
                ],
                'relationships' => [ ],
                'meta'          => [],
            ],
        ];
    }


}
