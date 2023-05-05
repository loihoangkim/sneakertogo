using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SneakerToGoAPI.Migrations
{
    public partial class AddTotalOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "totalOrder",
                table: "Models",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "totalOrder",
                table: "Models");
        }
    }
}
