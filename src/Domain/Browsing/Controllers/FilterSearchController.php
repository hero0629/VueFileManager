<?php
namespace Domain\Browsing\Controllers;

use DB;
use App\Users\Models\User;
use Illuminate\Support\Arr;
use Domain\Files\Models\File;
use App\Users\Models\UserSetting;
use Domain\Folders\Models\Folder;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Domain\Items\Requests\FilterRequest;
use Domain\Files\Resources\FilesCollection;
use Domain\Folders\Resources\FolderCollection;
use App\Users\Resources\UsersMinimalCollection;

class FilterSearchController
{
    public function __invoke(
        FilterRequest $request
    ): JsonResponse {
        // Prepare queries
        $user = remove_accents(
            $request->input('user')
        );
        $custom = remove_accents(
            $request->input('custom')
        );
        $from_date = remove_accents(
            $request->input('from')
        );
        $to_date = remove_accents(
            $request->input('to')
        );

        if (!$user) $user = "###";
        if (!$custom) $custom = "###";
        if (!$from_date) $from_date = "###";
        if (!$to_date) $to_date = "###";
        return $this->filterFiles($user, $custom, $from_date, $to_date);
    }

    //params: $user: user_id, $custom: parent_id, form & to: created at

    private function filterFiles(
        string $user,
        string $custom,
        string $from_date,
        string $to_date
    ): JsonResponse {
        
        // Prepare folder & file db query
        $query = File::where('user_id', $tmpUser = $user==="###"?null:$user)
                    ->where('deleted_at', null);
        if ($custom !== "###") {
            if ($user === "###") {
                $query = File::where('parent_id', $custom)
                    ->where('deleted_at', null);
            } else {
                $query = File::where('user_id', $user)
                ->where('parent_id', $custom)
                ->where('deleted_at', null);
            }
        }
        if ($from_date !== "###" && $to_date !== "###") {
            $from_date = date('Y-m-d H:i:s', strtotime($from_date));
            $to_date = date('Y-m-d H:i:s', strtotime($to_date));
            $query->where('created_at', '<=', $to_date)
                ->where('created_at', '>=', $from_date);
        }
        $files = $query->sortable()
                ->take(3)
                ->get();

        return response()->json([
            'data'  => new FilesCollection($files),
        ]);
    }
    public function getUsers( )
    {
        $results = UserSetting:: get()
        ->pluck('user_id');

        $users = new UsersMinimalCollection(
            User::find($results)
        );

        return response()->json($users);
    }
}
//reference: spotliight... .php
// ,subcategoryController.php
