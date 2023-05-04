using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SneakerToGoAPI.Models
{
    public partial class SneakerToGoContext : DbContext
    {
        public SneakerToGoContext()
        {
        }

        public SneakerToGoContext(DbContextOptions<SneakerToGoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Account> Accounts { get; set; } = null!;
        public virtual DbSet<Bill> Bills { get; set; } = null!;
        public virtual DbSet<BillDetail> BillDetails { get; set; } = null!;
        public virtual DbSet<Brand> Brands { get; set; } = null!;
        public virtual DbSet<Cart> Carts { get; set; } = null!;
        public virtual DbSet<CartDetail> CartDetails { get; set; } = null!;
        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Image> Images { get; set; } = null!;
        public virtual DbSet<Model> Models { get; set; } = null!;
        public virtual DbSet<Product> Products { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-BD574DC\\SQLEXPRESS;Initial Catalog=SneakerToGo;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>(entity =>
            {
                entity.Property(e => e.AccountId)
                    .ValueGeneratedNever()
                    .HasColumnName("accountID");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("phoneNumber");

                entity.Property(e => e.Role).HasColumnName("role");

                entity.Property(e => e.UserName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("userName");
            });

            modelBuilder.Entity<Bill>(entity =>
            {
                entity.Property(e => e.BillId)
                    .ValueGeneratedNever()
                    .HasColumnName("billID");

                entity.Property(e => e.AccountId).HasColumnName("accountID");

                entity.Property(e => e.AddressOfReceiver)
                    .HasMaxLength(255)
                    .HasColumnName("addressOfReceiver");

                entity.Property(e => e.OrderStatus)
                    .HasMaxLength(50)
                    .HasColumnName("orderStatus");

                entity.Property(e => e.PhoneOfReceiver)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("phoneOfReceiver");

                entity.Property(e => e.paymentStatus)
                    .HasMaxLength(50)
                    .HasColumnName("paymentStatus");

                entity.Property(e => e.TotalPrice)
                    .HasColumnType("money")
                    .HasColumnName("totalPrice");

                entity.HasOne(d => d.Account)
                    .WithMany(p => p.Bills)
                    .HasForeignKey(d => d.AccountId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Bills_Accounts");
            });

            modelBuilder.Entity<BillDetail>(entity =>
            {
                entity.HasKey(e => new { e.BillId, e.ProductId });

                entity.ToTable("BillDetail");

                entity.Property(e => e.BillId).HasColumnName("billID");

                entity.Property(e => e.ProductId).HasColumnName("productID");

                entity.Property(e => e.ModelId).HasColumnName("modelID");

                entity.Property(e => e.Price)
                    .HasColumnType("money")
                    .HasColumnName("price");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

            });

            modelBuilder.Entity<Brand>(entity =>
            {
                entity.Property(e => e.BrandId)
                    .ValueGeneratedNever()
                    .HasColumnName("brandID");

                entity.Property(e => e.Banner)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("banner");

                entity.Property(e => e.CreateAt)
                    .HasColumnType("datetime")
                    .HasColumnName("createAt");

                entity.Property(e => e.CreateBy).HasColumnName("createBy");

                entity.Property(e => e.Descreption)
                    .HasMaxLength(255)
                    .HasColumnName("descreption");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.Slug)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("slug");

                entity.Property(e => e.UpdateAt)
                    .HasColumnType("datetime")
                    .HasColumnName("updateAt");

                entity.Property(e => e.Logo)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("logo");

                entity.Property(e => e.UpdateBy).HasColumnName("updateBy");
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.HasKey(e => e.CardId);

                entity.Property(e => e.CardId)
                    .ValueGeneratedNever()
                    .HasColumnName("cardID");

                entity.Property(e => e.AccountId).HasColumnName("accountID");

                entity.Property(e => e.Note)
                    .HasMaxLength(255)
                    .HasColumnName("note");

                entity.Property(e => e.Status)
                    .HasMaxLength(50)
                    .HasColumnName("status");

                entity.Property(e => e.TotalPrice)
                    .HasColumnType("money")
                    .HasColumnName("totalPrice");

                
            });

            modelBuilder.Entity<CartDetail>(entity =>
            {
                entity.HasKey(e => new { e.CardId, e.ProductId });

                entity.ToTable("CartDetail");

                entity.Property(e => e.CardId).HasColumnName("cardID");

                entity.Property(e => e.ProductId).HasColumnName("productID");

                entity.Property(e => e.ModelId).HasColumnName("modelID");

                entity.Property(e => e.ModelName)
                    .HasMaxLength(50)
                    .HasColumnName("modelName");

                entity.Property(e => e.Price)
                    .HasColumnType("money")
                    .HasColumnName("price");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.CategoryId)
                    .ValueGeneratedNever()
                    .HasColumnName("categoryID");

                entity.Property(e => e.IsDelete)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("isDelete")
                    .IsFixedLength();

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.Slug)
                    .HasMaxLength(100)
                    .HasColumnName("slug");
            });

            modelBuilder.Entity<Image>(entity =>
            {
                entity.Property(e => e.ImageId)
                    .ValueGeneratedNever()
                    .HasColumnName("imageID");

                entity.Property(e => e.Alt)
                    .HasMaxLength(50)
                    .HasColumnName("alt");

                entity.Property(e => e.IsDelete)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("isDelete")
                    .IsFixedLength();

                entity.Property(e => e.ModelId).HasColumnName("modelID");

                entity.Property(e => e.Path)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("path");

                //entity.HasOne(d => d.Model)
                //    .WithMany(p => p.Images)
                //    .HasForeignKey(d => d.ModelId)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_Images_Models");
            });

            modelBuilder.Entity<Model>(entity =>
            {
                entity.Property(e => e.ModelId)
                    .ValueGeneratedNever()
                    .HasColumnName("modelID");


                entity.Property(e => e.BrandId)
                .HasColumnName("brandID");

                entity.Property(e => e.CategoryId)
                .HasColumnName("categoryID");

                entity.Property(e => e.CreateAt)
                    .HasColumnType("datetime")
                    .HasColumnName("createAt");

                entity.Property(e => e.CreateBy)
                .HasColumnName("createBy");

                entity.Property(e => e.Descreption)
                    .HasColumnType("text")
                    .HasColumnName("descreption");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.UpdateAt)
                    .HasColumnType("datetime")
                    .HasColumnName("updateAt");

                entity.Property(e => e.UpdateBy)
                .HasColumnName("updateBy");

                entity.Property(e => e.IsDelete)
                    .HasColumnName("isDelete");

                //entity.Property(e => e.IsDelete)
                //.HasMaxLength(10)
                //.IsUnicode(false)
                //.HasColumnName("isDelete")
                //.IsFixedLength();

                //entity.HasOne(d => d.Brand)
                //    .WithMany(p => p.Models)
                //    .HasForeignKey(d => d.BrandId)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_Models_Brands");

                //entity.HasOne(d => d.Category)
                //    .WithMany(p => p.Models)
                //    .HasForeignKey(d => d.CategoryId)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_Models_Categories");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.ProductId)
                    .ValueGeneratedNever()
                    .HasColumnName("productID");

                entity.Property(e => e.CreateAt)
                    .HasColumnType("datetime")
                    .HasColumnName("createAt");

                entity.Property(e => e.CreateBy).HasColumnName("createBy");

                entity.Property(e => e.IsDelete)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("isDelete")
                    .IsFixedLength();

                entity.Property(e => e.ModelId).HasColumnName("modelID");

                entity.Property(e => e.Price)
                    .HasColumnType("money")
                    .HasColumnName("price");

                entity.Property(e => e.QuanlityRemainning).HasColumnName("quanlityRemainning");

                entity.Property(e => e.Size).HasColumnName("size");

                entity.Property(e => e.UpdateAt)
                    .HasColumnType("datetime")
                    .HasColumnName("updateAt");

                entity.Property(e => e.UpdateBy).HasColumnName("updateBy");

                //entity.HasOne(d => d.Model)
                //    .WithMany(p => p.Products)
                //    .HasForeignKey(d => d.ModelId)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_Products_Models");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
