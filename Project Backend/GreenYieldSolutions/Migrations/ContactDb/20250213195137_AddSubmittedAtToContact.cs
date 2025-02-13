using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GreenYieldSolutions.Migrations.ContactDb
{
    /// <inheritdoc />
    public partial class AddSubmittedAtToContact : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "SubmittedAt",
                table: "Contacts",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SubmittedAt",
                table: "Contacts");
        }
    }
}
