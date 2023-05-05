using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SneakerToGoAPI.Migrations
{
    public partial class ChangeNumberOfSales : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "ImportPrice",
                table: "Products",
                type: "decimal",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImportPrice",
                table: "Products");
        }
    }
}
