<?php
namespace Domain\Folders\Actions;

use Domain\Sharing\Models\Share;
use Domain\Folders\Models\Folder;
use Domain\Folders\Requests\CreateFolderCustomRequest;
use App\Users\Exceptions\InvalidUserActionException;

class CreateFolderCustomAction
{
    /**
     * Create new folder
     *
     * @throws InvalidUserActionException
     */
    public function __invoke(
        CreateFolderCustomRequest $request,
        ?Share $shared = null,
    ): Folder|array {
        // Get stuff
        $isFilledParentId = $request->filled('parent_id');
        $parentId = $request->input('parent_id');

        // Get user
        $user = $isFilledParentId
            ? Folder::find($parentId)->getLatestParent()->user
            : auth()->user();

        // Check if user can create folder
        if (! $user->canCreateFolder()) {
            throw new InvalidUserActionException();
        }
		// $name = strpos($request->input('name'), auth()->user()->id) !== false?$request->input('name'):auth()->user()->id.$request->input('name');
		$socio = $request->input('socio');
		$identificacion = $request->input('identificacion');
		$nombre = $request->input('nombre');
		$apellido = $request->input('apellido');
        // Create folder record
        return Folder::create([
            'parent_id'   => null,
            'name'        => "$identificacion - $nombre $apellido",
            'color'       => null,
            'emoji'       => null,
            'author'      => $shared ? 'visitor' : 'user',
            'user_id'     => $user->id,
            'team_folder' => $isFilledParentId
                ? Folder::find($parentId)->getLatestParent()->team_folder
                : false,
			'socio'=>$socio,
			'identificacion'=>$identificacion,
			'nombre'=>$nombre,
			'apellido'=>$apellido,
        ]);
    }
}
