

using MongoDB.Bson.Serialization.Conventions;

var builder = WebApplication.CreateBuilder(args);

var conventionPack = new ConventionPack()
{
    new CamelCaseElementNameConvention(), // Title => title, NumberOfPlays => numberOfPlays
    new IgnoreExtraElementsConvention(true),
};

ConventionRegistry.Register("SongsApi", conventionPack, t => true);
// Configure our API 
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// Adapters
var mongoConnectionString = builder.Configuration.GetConnectionString("mongodb");

var mongoDbSongsCollectionAdapter = new MongodbSongsCollectionAdapter(mongoConnectionString);
builder.Services.AddSingleton(mongoDbSongsCollectionAdapter);


// Domain Services
builder.Services.AddTransient<IManageSongs, SongManager>();

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
