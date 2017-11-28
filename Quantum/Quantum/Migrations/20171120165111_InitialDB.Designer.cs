﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using Quantum.WebAPI.Data;
using System;

namespace Quantum.WebAPI.Migrations
{
    [DbContext(typeof(ClassContext))]
    [Migration("20171120165111_InitialDB")]
    partial class InitialDB
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Quantum.WebAPI.Data.Entities.ClassDetail", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Age");

                    b.Property<string>("ClassName");

                    b.Property<int?>("ClassesId");

                    b.Property<string>("GPA");

                    b.Property<string>("StudentFirstName");

                    b.Property<string>("StudentLastName");

                    b.HasKey("Id");

                    b.HasIndex("ClassesId");

                    b.ToTable("ClassDetails");
                });

            modelBuilder.Entity("Quantum.WebAPI.Data.Entities.Classes", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClassName");

                    b.Property<string>("Location");

                    b.Property<string>("TeacherName");

                    b.HasKey("Id");

                    b.ToTable("Classes");
                });

            modelBuilder.Entity("Quantum.WebAPI.Data.Entities.ClassDetail", b =>
                {
                    b.HasOne("Quantum.WebAPI.Data.Entities.Classes")
                        .WithMany("ClassDetails")
                        .HasForeignKey("ClassesId");
                });
#pragma warning restore 612, 618
        }
    }
}
