/*
  Warnings:

  - You are about to drop the column `bought` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `ipAddress` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `macAddress` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `motherBoard` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `pcDetails` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `proccessor` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `ramMemory` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `storage` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `typeOfStorage` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `teamManagerId` on the `Object` table. All the data in the column will be lost.
  - You are about to drop the column `teamManagerId` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `importance` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamManagerId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "PcDetails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bought" DATETIME,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "ipAddress" TEXT,
    "macAddress" TEXT,
    "ramMemory" TEXT,
    "storage" TEXT,
    "typeOfStorage" TEXT,
    "proccessor" TEXT,
    "motherBoard" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "ticketId" TEXT NOT NULL,
    CONSTRAINT "PcDetails_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ticket" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameOfSender" TEXT,
    "lastNameOfSender" TEXT,
    "emailOfSender" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "importance" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "pcRequest" TEXT,
    "meetings" TEXT,
    "dateMeeting" DATETIME,
    "timeMeeting" DATETIME,
    "placeMeeting" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "teamManagerId" TEXT NOT NULL,
    CONSTRAINT "Ticket_teamManagerId_fkey" FOREIGN KEY ("teamManagerId") REFERENCES "TeamManager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ticket" ("createdAt", "dateMeeting", "description", "id", "meetings", "placeMeeting", "status", "timeMeeting", "title", "updatedAt") SELECT "createdAt", "dateMeeting", "description", "id", "meetings", "placeMeeting", "status", "timeMeeting", "title", "updatedAt" FROM "Ticket";
DROP TABLE "Ticket";
ALTER TABLE "new_Ticket" RENAME TO "Ticket";
CREATE TABLE "new_Object" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "bought" DATETIME NOT NULL,
    "description" TEXT,
    "pcDetails" TEXT,
    "userName" TEXT,
    "password" TEXT,
    "ipAddress" TEXT,
    "macAddress" TEXT,
    "ramMemory" TEXT,
    "storage" TEXT,
    "typeOfStorage" TEXT,
    "proccessor" TEXT,
    "motherBoard" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "officeId" TEXT,
    "employeeId" TEXT,
    CONSTRAINT "Object_officeId_fkey" FOREIGN KEY ("officeId") REFERENCES "Office" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Object_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Object" ("bought", "createdAt", "description", "employeeId", "id", "ipAddress", "macAddress", "motherBoard", "name", "password", "pcDetails", "proccessor", "ramMemory", "status", "storage", "typeOfStorage", "updatedAt", "userName") SELECT "bought", "createdAt", "description", "employeeId", "id", "ipAddress", "macAddress", "motherBoard", "name", "password", "pcDetails", "proccessor", "ramMemory", "status", "storage", "typeOfStorage", "updatedAt", "userName" FROM "Object";
DROP TABLE "Object";
ALTER TABLE "new_Object" RENAME TO "Object";
CREATE TABLE "new_Employee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "employeeId" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "officeId" TEXT NOT NULL,
    CONSTRAINT "Employee_officeId_fkey" FOREIGN KEY ("officeId") REFERENCES "Office" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Employee" ("createdAt", "email", "employeeId", "firstName", "id", "lastName", "officeId", "password", "phoneNumber", "updatedAt", "userName") SELECT "createdAt", "email", "employeeId", "firstName", "id", "lastName", "officeId", "password", "phoneNumber", "updatedAt", "userName" FROM "Employee";
DROP TABLE "Employee";
ALTER TABLE "new_Employee" RENAME TO "Employee";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
