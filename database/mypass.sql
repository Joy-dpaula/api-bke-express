generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model account {
  id         Int     @id @default(autoincrement())
  service    String  @db.VarChar(256)
  username   String  @db.VarChar(255)
  logo_image String? @db.VarChar(1000)
  pass       String  @db.VarChar(500)
  user_id    Int
  user       user    @relation(fields: [user_id], references: [id], onDelete: Cascade, onUpdate: NoAction, map: "account_ibfk_1")

  @@index([user_id], map: "user_id")
}

model user {
  id      Int       @id @default(autoincrement())
  email   String    @unique(map: "email") @db.VarChar(255)
  pass    String    @db.VarChar(300)
  account account[]
}


 insert into account values(null, 'Instagram', 'Joy_dpaula', 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', '123teste', 1);
 insert into account values(null, 'X', 'jujoba', 'https://cdn-icons-png.flaticon.com/256/5968/5968830.png', '123teste', 1);
 insert into account values(null, 'GitHub', 'Joy-dpaula', 'https://cdn-icons-png.flaticon.com/512/25/25231.png', '123teste', 1);
