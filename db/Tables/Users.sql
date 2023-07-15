CREATE TABLE [dbo].[Users]
(
  ID BIGINT IDENTITY (1, 1) PRIMARY KEY,
    UserId INT UNIQUE,
    FirstName NVARCHAR(200) NOT NULL,
    LastName NVARCHAR(200) NOT NULL,
    Email NVARCHAR(50) UNIQUE NOT NULL,
    PhoneNumber NVARCHAR(20) NOT NULL,
    PasswordHash NVARCHAR(255) NOT NULL,
    ResetToken NVARCHAR(255),
    IsActive BIT NOT NULL DEFAULT 0,
    ActivationDTM DATETIME2,
    IsDeleted BIT NOT NULL DEFAULT 0,
    DeletedDTM DATETIME2,
    DeletedBy BIGINT,
    CreatedDTM DATETIME2,
    CreatedBy BIT,
    UpdatedDTM DATETIME2,
    UpdatedBy BIGINT,
    RowVersion TIMESTAMP
)
