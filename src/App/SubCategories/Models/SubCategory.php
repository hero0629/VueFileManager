<?php
namespace App\SubCategories\Models;

use App\Documents\Models\Document;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use Kyslik\ColumnSortable\Sortable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class SubCategory extends Model
{
    use Notifiable;
    use HasFactory;
    use Sortable;

    protected $table = "sub_categories";

    protected $guarded = [
        'id',
        'name',
    ];

    protected $fillable = [
        'name',
        'fields',
        'type_document_id'
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
    public function files(): belongsTo
    {
        return $this->belongsTo(Document::class);
    }
}
