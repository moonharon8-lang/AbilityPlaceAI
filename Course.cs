using Postgrest.Attributes;
using Postgrest.Models;

namespace Ability_Place.Models
{
    [Table("Courses")] // لازم يكون نفس اسم الجدول في سوبابيز
    public class Course : BaseModel
    {
        [PrimaryKey("id", false)]
        public int Id { get; set; }

        [Column("title")]
        public string Title { get; set; }

        [Column("description")]
        public string Description { get; set; }

        [Column("img_url")] // لو عندك عمود للصور في سوبابيز
        public string ImgUrl { get; set; }

      

    }
}