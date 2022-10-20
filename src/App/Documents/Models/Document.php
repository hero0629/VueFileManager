<?php
namespace App\Documents\Models;

use App\SubCategories\Models\SubCategory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Kyslik\ColumnSortable\Sortable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Document extends Model
{
    use Notifiable;
    use HasFactory;
    use Sortable;

    protected $table = "types_documents";

    protected $guarded = [
        'id',
        'name',
    ];

    protected $fillable = [
        'name',
        'fields',
    ];

    public $sortable = [
        'id',
        'name',
        'created_at',
    ];

    public $incrementing = false;

    protected $keyType = 'string';

    public $timestaps = true;

    public function meta_data(): array | null
    {
        return \DB::table('files_meta')->where('file_id', $this->id)->get()->toArray(); 
    }

    public function subCategories(): HasMany
    {
        return $this->hasMany(SubCategory::class,'type_document_id','id');
    }

}
