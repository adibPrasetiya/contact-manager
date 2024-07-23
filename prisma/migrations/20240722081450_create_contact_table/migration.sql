-- CreateTable
CREATE TABLE `contacts` (
    `contact_id` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `gender` VARCHAR(100) NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `bank_account` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`contact_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
