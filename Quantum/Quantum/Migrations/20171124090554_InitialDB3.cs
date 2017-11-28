using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Quantum.WebAPI.Migrations
{
    public partial class InitialDB3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClassDetails_Classes_ClassesId",
                table: "ClassDetails");

            migrationBuilder.DropIndex(
                name: "IX_ClassDetails_ClassesId",
                table: "ClassDetails");

            migrationBuilder.DropColumn(
                name: "ClassesId",
                table: "ClassDetails");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ClassesId",
                table: "ClassDetails",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClassDetails_ClassesId",
                table: "ClassDetails",
                column: "ClassesId");

            migrationBuilder.AddForeignKey(
                name: "FK_ClassDetails_Classes_ClassesId",
                table: "ClassDetails",
                column: "ClassesId",
                principalTable: "Classes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
