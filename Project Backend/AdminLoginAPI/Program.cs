using AdminLoginAPI.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Ensure appsettings.json is loaded correctly
builder.Configuration.SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

// Get the connection string from appsettings.json
string conString = builder.Configuration.GetConnectionString("ConStr");

// Register DbContext with MySQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(conString, ServerVersion.AutoDetect(conString)));

// Add controllers
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline
app.UseAuthorization();
app.MapControllers();

// Run the application
app.Run();
