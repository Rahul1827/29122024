namespace GreenYieldSolutions.Models
{
    public class CropAdvisory
    {
        public int Id { get; set; }
        public string CropName { get; set; }
        public string Variety { get; set; }
        public string Season { get; set; }
        public int Duration { get; set; }
        public string SoilType { get; set; }
        public string PlowingMethod { get; set; }
        public string SoilRequirement { get; set; }
        public string BaseFertilizer { get; set; }
        public DateTime SowingDate { get; set; }
        public string SeedRate { get; set; }
        public string RowSpacing { get; set; }
        public string IrrigationFirst { get; set; }
        public string IrrigationFrequency { get; set; }
        public string CommonPests { get; set; }
        public string RecommendedPesticide { get; set; }
        public string FloweringStage { get; set; }
        public string FruitingStage { get; set; }
        public string NutrientName { get; set; }
        public string NutrientAmount { get; set; }
        public string ApplicationTime { get; set; }
        public DateTime HarvestDate { get; set; }
        public string StorageRecommendations { get; set; }
        public string RecommendedFertilizer { get; set; }
        public string RecommendedEquipment { get; set; }
    }


}
