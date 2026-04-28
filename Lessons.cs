using Postgrest.Attributes;
using Postgrest.Models;

namespace Ability_Place.Models
{
    [Table("Lessons")] // تأكدي إنه مكتوب زي سوبابيز بالظبط
    public class Lesson : BaseModel
    {
        [PrimaryKey("id", false)]
        public int Id { get; set; }

        [Column("title")]
        public string Title { get; set; }

        [Column("video_url")] // تأكدي من اسم العمود في سوبابيز
        public string VideoUrl { get; set; }

        [Column("transcript")] // لو عايزة تعرضي النص اللي تحت الفيديو
        public string Transcript { get; set; }
    }
}