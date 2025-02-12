using GreenYieldSolutions.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// ApplicationDbContext (for Admin)
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))));

// UserDbContext (for Users)
builder.Services.AddDbContext<UserDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))));

// AddProductDbContext (for Products)
builder.Services.AddDbContext<AddProductDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))));

//  AddStockDbContext (for Products)
builder.Services.AddDbContext<AddStockDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))));

//  BookFieldVisitDbContext (for Field Visits)
builder.Services.AddDbContext<BookFieldVisitDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))));

// CropAdvisoryDbContext (for Crop Advisory)
builder.Services.AddDbContext<CropAdvisoryDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))));
// BookingProductsDbContext (for Book Products)
builder.Services.AddDbContext<BookingProductsDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))));

// Configure CORS properly for credentials
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Allow only the React frontend
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials(); // Required for authentication cookies or headers
    });
});

// Register controllers
builder.Services.AddControllers();

// Register Swagger for API documentation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Use CORS Policy
app.UseCors("AllowSpecificOrigin");

// Serve static files from wwwroot (to handle images properly)
app.UseStaticFiles();

//Serve uploaded images from wwwroot/uploads
var uploadsPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
if (!Directory.Exists(uploadsPath))
{
    Directory.CreateDirectory(uploadsPath); // Ensure uploads directory exists
}

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(uploadsPath),
    RequestPath = "/uploads"
});

// Enable Swagger UI for testing APIs
app.UseSwagger();
app.UseSwaggerUI();

// Enable Authorization (if needed)
app.UseAuthorization();

// Map Controllers (ensure your APIs are correctly mapped)
app.MapControllers();

// Run the application
app.Run();
