CREATE TABLE [dbo].[Users]
(
  [Id] BIGINT IDENTITY(1,1) NOT NULL,
  [UserId] UNIQUEIDENTIFIER NOT NULL DEFAULT (NEWID()),
  [Email] NVARCHAR(50) NOT NULL,
  [PhoneNumber] NVARCHAR(50) NOT NULL,
  [firstName] NVARCHAR(50) NOT NULL,
  [lastName] NVARCHAR(50) NOT NULL,
  [PasswordHash] NVARCHAR(50) NULL,
  [ResetToken] NVARCHAR(800) NULL,
  [ResetexpiryDTM] DATETIME2 NULL,
  [IsActive] BIT NOT NULL DEFAULT (0),
  [CreatedDTM] DATETIME2 NULL,
  [UpdatedDTM] DATETIME2 NULL,
  [RowVersion] ROWVERSION,
  CONSTRAINT PK_Users_Id PRIMARY KEY CLUSTERED ([Id])
);
GO

CREATE NONCLUSTERED INDEX IX_Users_UserId
  ON [dbo].[Users] ([UserId])
GO

CREATE UNIQUE INDEX UQ_Users_Email
  ON [dbo].[Users] ([Email]);
GO

CREATE UNIQUE INDEX UQ_Users_PhoneNumber
  ON [dbo].[Users] ([PhoneNumber]);
GO
