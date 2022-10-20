<?php
namespace App\Documents\Controllers;


use Illuminate\Http\Response;

use App\Http\Controllers\Controller;
use App\Documents\Models\Document;
use App\Documents\Resources\DocumentResource;
use App\Documents\Resources\DocumentsCollection;
use App\Documents\Requests\CreateDocumentRequest;
use App\Documents\Requests\UpdateDocumentRequest;
use Domain\Files\Models\File;
use Domain\Files\Resources\FilesCollection;
use Illuminate\Http\Request;


class DocumentController extends Controller
{
    /**
     * Get all languages for admin translate
     */
    public function index(): DocumentsCollection
    {
        $document = Document::sortable(['created_at', 'DESC'])
            ->paginate(15);
        return new DocumentsCollection($document);
    }

   /* public function searchFile($string = null, $status = null)
    {


        if($string != 'null' && $status == "true") {
            $files = File::search($string)
                ->where('status',0)
                ->get()
                ->take(3);
        }else{
            $files = File::search($string)
                ->where('status',$status)
                ->get()
                ->take(3);
        }

        $folders = Folder::search($string)
            ->get()
            ->take(3);



        return [
            'folders' => new FolderCollection($folders),
            'files'   => new FilesCollection($files),
        ];
    }*/


    /**
     * Get all language strings for admin translate
     */
    public function show(Document $document): DocumentResource
    {
        return new DocumentResource($document);
    }

    public function getCampos($id)
    {
        return [ 'data' => \DB::table('types_documents')->where('id', $id)->first()];
    }

    /**
     * Create new Document
     */
    public function store(CreateDocumentRequest $request): Response
    {
        // Abort in demo mode
        abort_if(is_demo(), 204, 'Done.');

        $document = Document::create([
            'name'   => $request->input('name'),
            'fields' => $request->input('fields'),
        ]);

        return response(
            new DocumentResource($document),
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
    public function update(UpdateDocumentRequest $request,Document $document): Response
    {

        // Abort in demo mode
        abort_if(is_demo(), 204, 'Done.');

        $document->update($request->all());


        return response(
            new DocumentResource($document),
            201
        );
    }


    /**
     * Delete the language with all children strings
     */
    public function destroy(Document $document): Response
    {
        // Abort in demo mode
        abort_if(is_demo(), 204, 'Done.');


        if ($document->subCategories && $document->subCategories->count() > 0){
            return response(
                'Done',
                202
            );
        }

        $document->delete();

        return response(
            'Done',
            204
        );
    }
}
