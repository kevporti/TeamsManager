/*
  Warnings:

  - A unique constraint covering the columns `[ticketId]` on the table `PcDetails` will be added. If there are existing duplicate values, this will fail.

*/
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
    "teamManagerId" TEXT,
    CONSTRAINT "Ticket_teamManagerId_fkey" FOREIGN KEY ("teamManagerId") REFERENCES "TeamManager" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Ticket" ("createdAt", "dateMeeting", "description", "emailOfSender", "id", "importance", "lastNameOfSender", "meetings", "nameOfSender", "pcRequest", "placeMeeting", "status", "teamManagerId", "timeMeeting", "title", "updatedAt") SELECT "createdAt", "dateMeeting", "description", "emailOfSender", "id", "importance", "lastNameOfSender", "meetings", "nameOfSender", "pcRequest", "placeMeeting", "status", "teamManagerId", "timeMeeting", "title", "updatedAt" FROM "Ticket";
DROP TABLE "Ticket";
ALTER TABLE "new_Ticket" RENAME TO "Ticket";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "PcDetails_ticketId_key" ON "PcDetails"("ticketId");
