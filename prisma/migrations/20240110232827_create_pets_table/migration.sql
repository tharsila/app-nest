-- CreateTable
CREATE TABLE `pets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `about` TEXT NOT NULL,
    `image` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `age` INTEGER NULL,
    `weight` DECIMAL(65, 30) NULL,
    `race` VARCHAR(191) NULL,
    `size` VARCHAR(191) NULL,
    `since` VARCHAR(191) NULL,
    `updatedAt` DATETIME(3) NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
