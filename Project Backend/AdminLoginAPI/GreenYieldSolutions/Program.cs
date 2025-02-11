

using GreenYieldSolutions.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Register ApplicationDbContext (for Admin)
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))));

// Register UserDbContext (for Users)
builder.Services.AddDbContext<UserDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))));

// Register AddProductDbContext (for Products)
builder.Services.AddDbContext<AddProductDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))));


// Register AddIncomingProductDbContext (for Products)
builder.Services.AddDbContext<AddStockDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))));

// Register BookFieldVisitDbContext (for Products)
builder.Services.AddDbContext<BookFieldVisitDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))));


// Add CORS Policy (Allowing all origins for development)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()      // Allow any frontend URL
              .AllowAnyMethod()      // Allow all HTTP methods (GET, POST, etc.)
              .AllowAnyHeader();     // Allow all HTTP headers
    });
});

// Register controllers
builder.Services.AddControllers();

// Register Swagger for API documentation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Use CORS Policy
app.UseCors("AllowAll");

// Serve static files from wwwroot (to handle images properly)
app.UseStaticFiles();

// Serve uploaded images from wwwroot/uploads
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

// Use Authorization (if needed)
app.UseAuthorization();

// Map Controllers (ensure your APIs are correctly mapped)
app.MapControllers();

// Run the application
app.Run();
