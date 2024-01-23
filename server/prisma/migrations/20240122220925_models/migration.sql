-- CreateTable
CREATE TABLE "Auth" (
    "token" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "todos" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "potencial_business" TEXT NOT NULL,
    "reminder_date" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Auth_token_key" ON "Auth"("token");

-- CreateIndex
CREATE UNIQUE INDEX "todos_description_key" ON "todos"("description");

-- CreateIndex
CREATE UNIQUE INDEX "todos_reminder_date_key" ON "todos"("reminder_date");
