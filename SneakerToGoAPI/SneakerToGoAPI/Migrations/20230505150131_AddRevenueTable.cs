using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SneakerToGoAPI.Migrations
{
    public partial class AddRevenueTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Revenues",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    date = table.Column<DateTime>(type: "datetime", nullable: false),
                    totalRevenueOfDay = table.Column<decimal>(type: "decimal", nullable: false),
                    totalSalesOfDay = table.Column<decimal>(type: "decimal", nullable: false),
                    totalOrder = table.Column<decimal>(type: "decimal", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Revenues", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Revenues");
        }
    }
}
