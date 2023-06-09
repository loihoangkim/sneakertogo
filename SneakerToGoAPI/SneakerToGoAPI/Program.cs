using Api_QLKhachSan_N2.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Interface.Service;
using SneakerToGoAPI.Models;
using SneakerToGoAPI.Repositories;
using SneakerToGoAPI.Services;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;



var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:3000")
                                                    .AllowAnyHeader()
                                                    .AllowAnyMethod();
                      });
});

builder.Services.AddControllers();
builder.Services.AddDbContext<SneakerToGoContext>(
    options => options.UseSqlServer("Data Source=DESKTOP-BD574DC\\SQLEXPRESS;Initial Catalog=SneakerToGo;Integrated Security=True;"));
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
});


builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Constants.JWT_SECURITY_KEY)),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IAccountsRepository, AccountsRepository>();
builder.Services.AddScoped<IBillDetailRepository, BillDetailRepository>();
builder.Services.AddScoped<IBillRepository, BillsRepository>();
builder.Services.AddScoped<IBrandRepository, BrandRepository>();
builder.Services.AddScoped<ICartRepository, CartRepository>();
builder.Services.AddScoped<ICartDetailRepository, CartDetailRepository>();
builder.Services.AddScoped<ICategotyRepository, CategoryRepository>();
builder.Services.AddScoped<IImageRepository, ImageRepository>();
builder.Services.AddScoped<IModelRepository, ModelRepository>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();

builder.Services.AddScoped<IAccountsService, AccountsService>();
builder.Services.AddScoped<IBillDetailsService, BillDetailService>();
builder.Services.AddScoped<IBillService, BillService>();
builder.Services.AddScoped<IBrandService, BrandService>();
builder.Services.AddScoped<ICartDetailService, CartDetailService>();
builder.Services.AddScoped<ICartService, CartService>();
builder.Services.AddScoped<ICategoryService, CategoryService>();
builder.Services.AddScoped<IImageService, ImageService>();
builder.Services.AddScoped<IModelService, ModelService>();
builder.Services.AddScoped<IProductService, ProductService>();


builder.Services.AddHttpContextAccessor();

var options = new JsonSerializerOptions()
{
    AllowTrailingCommas = true
};

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

var env = builder.Environment.IsDevelopment();

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
