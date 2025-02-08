using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GreenYieldSolutions.Migrations.BookFieldVisitDb
{
    /// <inheritdoc />
    public partial class AddIsDeletedByAdminToFieldVisitRequest : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDeletedByAdmin",
                table: "FieldVisitRequests",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDeletedByAdmin",
                table: "FieldVisitRequests");
        }
    }
}
