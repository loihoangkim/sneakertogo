using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SneakerToGoAPI.Migrations
{
    public partial class AddModelName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BillDetail_Products_productID",
                table: "BillDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_Bills_Accounts",
                table: "Bills");

            migrationBuilder.DropIndex(
                name: "IX_BillDetail_productID",
                table: "BillDetail");

            migrationBuilder.AddColumn<string>(
                name: "ModelName",
                table: "BillDetail",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_Bills_Accounts_accountID",
                table: "Bills",
                column: "accountID",
                principalTable: "Accounts",
                principalColumn: "accountID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bills_Accounts_accountID",
                table: "Bills");

            migrationBuilder.DropColumn(
                name: "ModelName",
                table: "BillDetail");

            migrationBuilder.CreateIndex(
                name: "IX_BillDetail_productID",
                table: "BillDetail",
                column: "productID");

            migrationBuilder.AddForeignKey(
                name: "FK_BillDetail_Products_productID",
                table: "BillDetail",
                column: "productID",
                principalTable: "Products",
                principalColumn: "productID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Bills_Accounts",
                table: "Bills",
                column: "accountID",
                principalTable: "Accounts",
                principalColumn: "accountID");
        }
    }
}
