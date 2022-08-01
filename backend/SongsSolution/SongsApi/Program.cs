var builder = WebApplication.CreateBuilder(args);
// Configure our API 
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// **** THE APPLICATION IS BUILT ****
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(); // OpenApi
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run(); // it starts running... 
