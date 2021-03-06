set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
  "photoUrl" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."reviews" (
	"reviewId" serial NOT NULL,
	"userId" int NOT NULL,
	"chefId" int NOT NULL,
	"content" TEXT,
	"rating" int,
	"createdAt" timestamp with time zone NOT NULL,
	CONSTRAINT "reviews_pk" PRIMARY KEY ("reviewId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."favorites" (
	"userId" int NOT NULL,
	"chefId" int NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."chefs" (
	"chefId" serial NOT NULL,
	"username" TEXT NOT NULL,
	"photoUrl" TEXT NOT NULL,
	"bio" TEXT NOT NULL,
  "createdAt" timestamp with time zone NOT NULL,
	"userId" int,
	CONSTRAINT "chefs_pk" PRIMARY KEY ("chefId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."dishes" (
	"dishId" serial NOT NULL,
	"chefId" int NOT NULL,
	"name" TEXT,
	"photoUrl" TEXT NOT NULL,
  "userId" int,
	CONSTRAINT "dishes_pk" PRIMARY KEY ("dishId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."cuisines" (
	"cuisineId" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "cuisines_pk" PRIMARY KEY ("cuisineId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."chefCuisines" (
	"chefId" int NOT NULL,
	"cuisineId" int NOT NULL,
  "userId" int
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."chatRooms" (
  "roomId" serial NOT NULL,
  "userId" int NOT NULL,
  "chefId" int NOT NULL,
  CONSTRAINT "chatRooms_pk" PRIMARY KEY ("roomId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."messages" (
  "messageId" serial NOT NULL,
  "roomId" int NOT NULL,
  "author" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "createdAt" timestamp with time zone NOT NULL
  -- CONSTRAINT "messages_pk" PRIMARY KEY ("roomId")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk1" FOREIGN KEY ("chefId") REFERENCES "chefs"("chefId");

ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk1" FOREIGN KEY ("chefId") REFERENCES "chefs"("chefId");

ALTER TABLE "chefs" ADD CONSTRAINT "chefs_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "dishes" ADD CONSTRAINT "dishes_fk0" FOREIGN KEY ("chefId") REFERENCES "chefs"("chefId");


ALTER TABLE "chefCuisines" ADD CONSTRAINT "chefCuisines_fk0" FOREIGN KEY ("chefId") REFERENCES "chefs"("chefId");
ALTER TABLE "chefCuisines" ADD CONSTRAINT "chefCuisines_fk1" FOREIGN KEY ("cuisineId") REFERENCES "cuisines"("cuisineId");

ALTER TABLE "chatRooms" ADD CONSTRAINT "chatRooms_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "chatRooms" ADD CONSTRAINT "chatRooms_fk1" FOREIGN KEY ("chefId") REFERENCES "chefs"("chefId");

ALTER TABLE "messages" ADD CONSTRAINT "messages_fk0" FOREIGN KEY ("roomId") REFERENCES "chatRooms"("roomId");
