    using System.ComponentModel.DataAnnotations;

    namespace GreenYieldSolutions.Models
    {
        public class FieldVisitRequest
        {
            [Key]
            public int Id { get; set; }
            public string FarmerName { get; set; }
            public string CropType { get; set; }
            public string FarmAddress { get; set; }
            public string ContactNo { get; set; }
            public string Status { get; set; } = "Pending";
            public DateTime Timestamp { get; set; } = DateTime.Now;
            public string FarmerEmail { get; set; }
            public bool IsDeletedByAdmin { get; set; } = false;
        
    }
    }






