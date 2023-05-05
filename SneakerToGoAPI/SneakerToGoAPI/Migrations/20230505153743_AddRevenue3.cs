using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SneakerToGoAPI.Migrations
{
    public partial class AddRevenue3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "PriceFake",
                table: "Products",
                type: "decimal",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "totalQuantity",
                table: "Models",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "totalRevenue",
                table: "Models",
                type: "decimal",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "totalSales",
                table: "Models",
                type: "decimal",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PriceFake",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "totalQuantity",
                table: "Models");

            migrationBuilder.DropColumn(
                name: "totalRevenue",
                table: "Models");

            migrationBuilder.DropColumn(
                name: "totalSales",
                table: "Models");
        }
    }
}
