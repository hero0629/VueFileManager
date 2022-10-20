<?php
namespace App\SubCategories\Controllers;


use App\SubCategories\Models\SubCategory;
use App\SubCategories\Resources\SubCategoryCollection;
use App\SubCategories\Resources\SubCategoryResource;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Documents\Models\Document;
use App\Documents\Resources\DocumentResource;
use App\Documents\Resources\DocumentsCollection;
use App\Documents\Requests\CreateDocumentRequest;
use App\Documents\Requests\UpdateDocumentRequest;
use Domain\Files\Models\File;

use Illuminate\Http\Request;


class SubCategoryController extends Controller
{
    /**
     * Get all languages for admin translate
     */
    public function index(): SubCategoryCollection
    {


        $subCategory = SubCategory::sortable(['created_at', 'DESC'])
            ->paginate(15);

        return new SubCategoryCollection($subCategory);
    }

    public function getSubacategories($document): SubCategoryCollection
    {

        $subCategory = SubCategory::where('type_document_id',$document)->sortable(['created_at', 'DESC'])
            ->paginate(15);

        return new SubCategoryCollection($subCategory);
    }
    /**
     * Get all language strings for admin translate
     */
    public function show(SubCategory $subCategory): SubCategoryResource
    {

        return new SubCategoryResource($subCategory);

    }

    public function getCampos($id)
    {
        return [ 'data' => \DB::table('sub_categories')->where('id', $id)->first()];
    }

    /**
     * Create new Document
     */
    public function store(CreateDocumentRequest $request): Response
    {
        // Abort in demo mode
        abort_if(is_demo(), 204, 'Done.');

        $subCategory = SubCategory::create([
            'name'   => $request->input('name'),
            'fields' => $request->input('fields'),
            'type_document_id' => $request->input('type_document_id'),
        ]);

        return response(
            new SubCategoryResource($subCategory),
            201
        );
    }



    /**
     * Add new MetaData
     */
    public function insertMetaData(Request $request): Response
    {
        abort_if(is_demo(), 204, 'Done.');
        $all = \DB::table('files_meta')->where('file_id', $request->input('file_id'))->delete();
        if(count(json_decode($request->input('campos'), true)) > 0) {
            $file = File::where('id', $request->input('file_id'))->first();
            if($file) {
                $file->status = 1;
                $file->save();
            }
            foreach(json_decode($request->input('campos'), true) as $value) {
                $metaData = \DB::table('files_meta')->insert(
                    ['file_id' => $request->input('file_id'), 'key' => $value["name"], 'value' => $value["value"] ]
                );
            }
        }

        return response(
            [
                'data' => [
                    'id'            => '',
                    'type'          => 'file',
                    'relationships' => [ ],
                    'meta'          => [],
                ],
            ],
            201
        );
    }


    /**
     * Update Document
     */
    public function update(UpdateDocumentRequest $request,SubCategory $subCategory): Response
    {

        // Abort in demo mode
        abort_if(is_demo(), 204, 'Done.');

        $subCategory->update($request->all());


        return response(
            new SubCategoryResource($subCategory),
            201
        );
    }


    /**
     * Delete the language with all children strings
     */
    public function destroy(SubCategory $subCategory): Response
    {
        // Abort in demo mode
        abort_if(is_demo(), 204, 'Done.');

        $subCategory->delete();

        return response(
            'Done',
            204
        );
    }
}
